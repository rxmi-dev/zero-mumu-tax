# backend/app/routes/daily.py
from flask import Blueprint, request, jsonify
from datetime import datetime, date, timedelta
from app.extensions import db
from app.utils.auth_decorators import token_required, get_current_user
from app.models.daily_entry import DailyEntry
import logging

bp = Blueprint("daily", __name__, url_prefix="/api/daily")
logger = logging.getLogger(__name__)


@bp.route("/profile", methods=["GET"])
@token_required
def get_daily_profile():
    """Get user's business profile based on past entries"""
    user = get_current_user()
    if not user:
        return jsonify({"error": "Invalid token"}), 401

    try:
        # Get last 30 days of entries to build profile
        thirty_days_ago = datetime.utcnow() - timedelta(days=30)
        recent_entries = DailyEntry.query.filter(
            DailyEntry.user_id == user.id,
            DailyEntry.created_at >= thirty_days_ago
        ).all()

        # Determine business type from user occupation
        business_type = 'individual'
        if user.occupation:
            occ_lower = user.occupation.lower()
            if 'business' in occ_lower or 'owner' in occ_lower or 'trader' in occ_lower:
                business_type = 'retail'
            elif 'manufacturing' in occ_lower:
                business_type = 'manufacturing'
            elif 'service' in occ_lower or 'professional' in occ_lower:
                business_type = 'service'
            elif 'farm' in occ_lower or 'agric' in occ_lower:
                business_type = 'agriculture'

        # Build profile based on patterns
        profile = {
            "hasEmployees": any(e.wages and e.wages > 0 for e in recent_entries),
            "paysRent": any(e.rent and e.rent > 0 for e in recent_entries),
            "hasTransport": any(e.transport and e.transport > 0 for e in recent_entries),
            "hasAjo": any(e.ajo and e.ajo > 0 for e in recent_entries),
            "hasUtilities": any(e.utilities and e.utilities > 0 for e in recent_entries),
            "businessType": business_type,
            "typicalDailySales": sum(e.sales or 0 for e in recent_entries[-7:]) / max(len(recent_entries[-7:]), 1) if recent_entries else 0,
            "averageProfit": sum((e.profit or 0) for e in recent_entries[-7:]) / max(len(recent_entries[-7:]), 1) if recent_entries else 0,
            "totalEntries": len(recent_entries),
            "lastEntryDate": recent_entries[0].created_at.isoformat() if recent_entries else None
        }

        return jsonify({
            "success": True,
            "profile": profile
        }), 200

    except Exception as e:
        logger.error(f"Error getting daily profile: {str(e)}")
        return jsonify({"error": str(e)}), 500


@bp.route("/summary", methods=["POST", "OPTIONS"])
@token_required
def save_daily_summary():
    """Save end of day summary"""
    if request.method == "OPTIONS":
        return "", 200

    user = get_current_user()
    if not user:
        return jsonify({"error": "Invalid token"}), 401

    try:
        data = request.get_json()
        logger.info(f"Saving daily summary for user {user.id}: {data}")

        # Calculate totals
        sales = float(data.get("sales", 0) or 0)
        other_income = float(data.get("other_income", 0) or 0)
        cost_of_goods = float(data.get("cost_of_goods", 0) or 0)
        transport = float(data.get("transport", 0) or 0)
        rent = float(data.get("rent", 0) or 0)
        wages = float(data.get("wages", 0) or 0)
        utilities = float(data.get("utilities", 0) or 0)
        ajo = float(data.get("ajo", 0) or 0)
        other_expenses = float(data.get("other_expenses", 0) or 0)

        total_income = sales + other_income
        total_business_expenses = (
            cost_of_goods + transport + rent + wages + utilities + ajo + other_expenses
        )
        profit = total_income - total_business_expenses
        
        # Calculate tax based on user type
        estimated_tax = 0
        if user.occupation and ('business' in user.occupation.lower() or 'owner' in user.occupation.lower()):
            # Business owner - approximate CIT
            estimated_tax = profit * 0.30
        else:
            # Individual - approximate PIT
            estimated_tax = profit * 0.075

        # Parse entry date
        entry_date_str = data.get("date", date.today().isoformat())
        try:
            entry_date = datetime.strptime(entry_date_str, "%Y-%m-%d").date()
        except:
            entry_date = date.today()

        # Check if entry already exists for this date
        existing = DailyEntry.query.filter_by(
            user_id=user.id, entry_date=entry_date
        ).first()

        if existing:
            # Update existing
            existing.sales = sales
            existing.other_income = other_income
            existing.cost_of_goods = cost_of_goods
            existing.transport = transport
            existing.rent = rent
            existing.wages = wages
            existing.utilities = utilities
            existing.ajo = ajo
            existing.other_expenses = other_expenses
            existing.personal_expenses = float(data.get("personal_expenses", 0) or 0)
            existing.total_income = total_income
            existing.total_business_expenses = total_business_expenses
            existing.profit = profit
            existing.estimated_tax = estimated_tax
            db.session.commit()
            entry = existing
            message = "Entry updated successfully"
        else:
            # Create new
            entry = DailyEntry(
                user_id=user.id,
                entry_date=entry_date,
                sales=sales,
                other_income=other_income,
                cost_of_goods=cost_of_goods,
                transport=transport,
                rent=rent,
                wages=wages,
                utilities=utilities,
                ajo=ajo,
                other_expenses=other_expenses,
                personal_expenses=float(data.get("personal_expenses", 0) or 0),
                total_income=total_income,
                total_business_expenses=total_business_expenses,
                profit=profit,
                estimated_tax=estimated_tax,
            )
            db.session.add(entry)
            db.session.commit()
            message = "Entry saved successfully"

        return jsonify({
            "success": True,
            "message": message,
            "entry": entry.to_dict(),
            "totals": {
                "income": total_income,
                "expenses": total_business_expenses,
                "profit": profit,
                "estimated_tax": estimated_tax,
                "net_income": profit - estimated_tax
            }
        }), 201

    except Exception as e:
        db.session.rollback()
        logger.error(f"Error saving daily summary: {str(e)}")
        return jsonify({"error": str(e)}), 500


@bp.route("/dashboard", methods=["GET"])
@token_required
def get_dashboard_stats():
    """Get dashboard statistics for the current user"""
    user = get_current_user()
    if not user:
        return jsonify({"error": "Invalid token"}), 401

    try:
        today = date.today()
        month_start = date(today.year, today.month, 1)
        year_start = date(today.year, 1, 1)

        # Get today's entries
        today_entry = DailyEntry.query.filter_by(
            user_id=user.id, entry_date=today
        ).first()

        today_sales = today_entry.sales if today_entry else 0
        today_expenses = today_entry.total_business_expenses if today_entry else 0
        today_profit = today_entry.profit if today_entry else 0

        # Get month's entries
        month_entries = DailyEntry.query.filter(
            DailyEntry.user_id == user.id,
            DailyEntry.entry_date >= month_start,
        ).all()

        month_sales = sum(e.sales + (e.other_income or 0) for e in month_entries)
        month_expenses = sum(e.total_business_expenses or 0 for e in month_entries)
        month_profit = sum(e.profit or 0 for e in month_entries)
        month_tax = sum(e.estimated_tax or 0 for e in month_entries)

        # Get year's entries
        year_entries = DailyEntry.query.filter(
            DailyEntry.user_id == user.id,
            DailyEntry.entry_date >= year_start,
        ).all()

        year_sales = sum(e.sales + (e.other_income or 0) for e in year_entries)
        year_expenses = sum(e.total_business_expenses or 0 for e in year_entries)
        year_profit = sum(e.profit or 0 for e in year_entries)
        year_tax = sum(e.estimated_tax or 0 for e in year_entries)

        # Get all time stats
        all_entries = DailyEntry.query.filter_by(user_id=user.id).all()
        total_sales = sum(e.sales + (e.other_income or 0) for e in all_entries)
        total_expenses = sum(e.total_business_expenses or 0 for e in all_entries)
        total_tax = sum(e.estimated_tax or 0 for e in all_entries)
        days_tracked = len(all_entries)

        # Get streak (consecutive days with entries)
        streak = 0
        if all_entries:
            # Sort entries by date
            sorted_entries = sorted(all_entries, key=lambda x: x.entry_date, reverse=True)
            check_date = today
            for entry in sorted_entries:
                if entry.entry_date == check_date:
                    streak += 1
                    check_date = check_date - timedelta(days=1)
                else:
                    break

        # Recent entries (last 10)
        recent = (
            DailyEntry.query.filter_by(user_id=user.id)
            .order_by(DailyEntry.entry_date.desc())
            .limit(10)
            .all()
        )

        recent_entries = []
        for e in recent:
            if e.sales and e.sales > 0:
                recent_entries.append({
                    "date": e.entry_date.strftime("%b %d"),
                    "description": "End of Day Summary",
                    "amount": e.sales,
                    "type": "income",
                    "category": "Sales",
                    "profit": e.profit,
                    "tax": e.estimated_tax
                })
            if e.other_income and e.other_income > 0:
                recent_entries.append({
                    "date": e.entry_date.strftime("%b %d"),
                    "description": "Other Income",
                    "amount": e.other_income,
                    "type": "income",
                    "category": "Other",
                    "profit": e.profit,
                    "tax": e.estimated_tax
                })

        # Calculate tax eligibility (NTA 2025 threshold: ₦800,000/year)
        tax_threshold = 800000
        annual_projection = (month_profit / max(len(month_entries), 1)) * 365 if month_entries else 0
        is_tax_eligible = annual_projection > tax_threshold

        return jsonify({
            "success": True,
            "stats": {
                # Today
                "todaySales": today_sales,
                "todayExpenses": today_expenses,
                "todayProfit": today_profit,
                
                # This month
                "monthSales": month_sales,
                "monthExpenses": month_expenses,
                "monthProfit": month_profit,
                "monthTax": month_tax,
                
                # This year
                "yearSales": year_sales,
                "yearExpenses": year_expenses,
                "yearProfit": year_profit,
                "yearTax": year_tax,
                
                # All time
                "totalSales": total_sales,
                "totalExpenses": total_expenses,
                "totalTax": total_tax,
                "daysTracked": days_tracked,
                "streak": streak,
                
                # Tax eligibility
                "taxThreshold": tax_threshold,
                "annualProjection": annual_projection,
                "isTaxEligible": is_tax_eligible,
                "amountToThreshold": max(0, tax_threshold - annual_projection),
                
                # Recent entries
                "recentEntries": recent_entries[:10],
            },
        }), 200

    except Exception as e:
        logger.error(f"Error getting dashboard stats: {str(e)}")
        return jsonify({"error": str(e)}), 500


@bp.route("/month", methods=["GET"])
@token_required
def get_month_data():
    """Get detailed data for a specific month"""
    user = get_current_user()
    if not user:
        return jsonify({"error": "Invalid token"}), 401

    try:
        month = request.args.get("month")
        if not month:
            return jsonify({"error": "Month parameter required"}), 400

        year, month_num = map(int, month.split("-"))
        month_start = date(year, month_num, 1)
        if month_num == 12:
            month_end = date(year + 1, 1, 1)
        else:
            month_end = date(year, month_num + 1, 1)

        entries = DailyEntry.query.filter(
            DailyEntry.user_id == user.id,
            DailyEntry.entry_date >= month_start,
            DailyEntry.entry_date < month_end,
        ).order_by(DailyEntry.entry_date).all()

        # Daily breakdown
        daily_data = []
        total_sales = 0
        total_expenses = 0
        total_profit = 0
        total_tax = 0

        for entry in entries:
            day_sales = (entry.sales or 0) + (entry.other_income or 0)
            day_expenses = entry.total_business_expenses or 0
            day_profit = entry.profit or 0
            day_tax = entry.estimated_tax or 0

            total_sales += day_sales
            total_expenses += day_expenses
            total_profit += day_profit
            total_tax += day_tax

            daily_data.append({
                "date": entry.entry_date.strftime("%Y-%m-%d"),
                "sales": day_sales,
                "expenses": day_expenses,
                "profit": day_profit,
                "tax": day_tax,
                "breakdown": {
                    "cost_of_goods": entry.cost_of_goods or 0,
                    "transport": entry.transport or 0,
                    "rent": entry.rent or 0,
                    "wages": entry.wages or 0,
                    "utilities": entry.utilities or 0,
                    "ajo": entry.ajo or 0,
                    "other": entry.other_expenses or 0
                }
            })

        # Calculate trends
        avg_daily_profit = total_profit / max(len(entries), 1)
        
        # Calculate VAT (simplified - 7.5% on sales if applicable)
        vat_collected = total_sales * 0.075
        vat_paid = total_expenses * 0.075
        vat_payable = max(0, vat_collected - vat_paid)

        # WHT (simplified - 5% on profit)
        wht_deducted = total_profit * 0.05
        wht_payable = wht_deducted

        # Year-to-date comparison
        ytd_start = date(year, 1, 1)
        ytd_entries = DailyEntry.query.filter(
            DailyEntry.user_id == user.id,
            DailyEntry.entry_date >= ytd_start,
            DailyEntry.entry_date < month_end,
        ).all()
        ytd_profit = sum(e.profit or 0 for e in ytd_entries)
        
        # Previous month comparison
        prev_month_start = date(year, month_num - 1, 1) if month_num > 1 else date(year - 1, 12, 1)
        prev_month_end = month_start
        prev_entries = DailyEntry.query.filter(
            DailyEntry.user_id == user.id,
            DailyEntry.entry_date >= prev_month_start,
            DailyEntry.entry_date < prev_month_end,
        ).all()
        prev_month_profit = sum(e.profit or 0 for e in prev_entries)
        
        month_over_month_change = ((total_profit - prev_month_profit) / max(prev_month_profit, 1)) * 100 if prev_month_profit > 0 else 0

        # Annual estimate
        months_passed = month_num
        estimated_annual_tax = (total_tax / months_passed) * 12 if months_passed > 0 else 0
        estimated_annual_profit = (total_profit / months_passed) * 12 if months_passed > 0 else 0

        progress_percent = min(100, int((months_passed / 12) * 100))

        return jsonify({
            "success": True,
            "data": {
                "month": f"{year}-{month_num:02d}",
                "summary": {
                    "total_sales": total_sales,
                    "total_expenses": total_expenses,
                    "profit": total_profit,
                    "estimated_tax": total_tax,
                    "avg_daily_profit": avg_daily_profit,
                    "days_recorded": len(entries)
                },
                "taxes": {
                    "vat_collected": vat_collected,
                    "vat_paid": vat_paid,
                    "vat_payable": vat_payable,
                    "wht_deducted": wht_deducted,
                    "wht_payable": wht_payable,
                    "total_tax_liability": vat_payable + wht_payable
                },
                "trends": {
                    "ytd_profit": ytd_profit,
                    "prev_month_profit": prev_month_profit,
                    "month_over_month_change": round(month_over_month_change, 2),
                    "estimated_annual_tax": estimated_annual_tax,
                    "estimated_annual_profit": estimated_annual_profit,
                    "progress_percent": progress_percent
                },
                "daily_breakdown": daily_data
            },
        }), 200

    except Exception as e:
        logger.error(f"Error getting month data: {str(e)}")
        return jsonify({"error": str(e)}), 500


@bp.route("/export", methods=["POST"])
@token_required
def export_data():
    """Export daily entries data for a date range"""
    user = get_current_user()
    if not user:
        return jsonify({"error": "Invalid token"}), 401

    try:
        data = request.get_json() or {}
        start_date_str = data.get("start_date")
        end_date_str = data.get("end_date")

        if not start_date_str or not end_date_str:
            return jsonify({"error": "Start date and end date required"}), 400

        start_date = datetime.strptime(start_date_str, "%Y-%m-%d").date()
        end_date = datetime.strptime(end_date_str, "%Y-%m-%d").date()

        entries = DailyEntry.query.filter(
            DailyEntry.user_id == user.id,
            DailyEntry.entry_date >= start_date,
            DailyEntry.entry_date <= end_date,
        ).order_by(DailyEntry.entry_date).all()

        # Format data for export
        export_data = {
            "user": {
                "name": user.full_name,
                "email": user.email,
                "export_date": datetime.utcnow().isoformat()
            },
            "date_range": {
                "start": start_date_str,
                "end": end_date_str
            },
            "entries": [entry.to_dict() for entry in entries],
            "summary": {
                "total_entries": len(entries),
                "total_sales": sum(e.sales or 0 for e in entries),
                "total_expenses": sum(e.total_business_expenses or 0 for e in entries),
                "total_profit": sum(e.profit or 0 for e in entries),
                "total_tax": sum(e.estimated_tax or 0 for e in entries)
            }
        }

        return jsonify({
            "success": True,
            "data": export_data
        }), 200

    except Exception as e:
        logger.error(f"Error exporting data: {str(e)}")
        return jsonify({"error": str(e)}), 500


@bp.route("/delete/<date>", methods=["DELETE"])
@token_required
def delete_entry(date):
    """Delete a specific daily entry"""
    user = get_current_user()
    if not user:
        return jsonify({"error": "Invalid token"}), 401

    try:
        entry_date = datetime.strptime(date, "%Y-%m-%d").date()
        entry = DailyEntry.query.filter_by(
            user_id=user.id,
            entry_date=entry_date
        ).first()

        if not entry:
            return jsonify({"error": "Entry not found"}), 404

        db.session.delete(entry)
        db.session.commit()

        return jsonify({
            "success": True,
            "message": "Entry deleted successfully"
        }), 200

    except Exception as e:
        db.session.rollback()
        logger.error(f"Error deleting entry: {str(e)}")
        return jsonify({"error": str(e)}), 500


@bp.route("/insights", methods=["GET"])
@token_required
def get_insights():
    """Get AI-powered insights based on user's data"""
    user = get_current_user()
    if not user:
        return jsonify({"error": "Invalid token"}), 401

    try:
        # Get last 90 days of entries
        ninety_days_ago = datetime.utcnow() - timedelta(days=90)
        entries = DailyEntry.query.filter(
            DailyEntry.user_id == user.id,
            DailyEntry.created_at >= ninety_days_ago
        ).order_by(DailyEntry.entry_date).all()

        if len(entries) < 7:
            return jsonify({
                "success": True,
                "insights": [{
                    "type": "info",
                    "title": "Keep Tracking!",
                    "message": "Track at least 7 days to see personalized insights.",
                    "action": "Continue adding daily entries"
                }]
            }), 200

        insights = []
        
        # Calculate averages
        avg_profit = sum(e.profit or 0 for e in entries[-30:]) / min(len(entries[-30:]), 30)
        avg_expenses = sum(e.total_business_expenses or 0 for e in entries[-30:]) / min(len(entries[-30:]), 30)
        
        # Profit trend
        recent_avg = sum(e.profit or 0 for e in entries[-7:]) / 7
        previous_avg = sum(e.profit or 0 for e in entries[-14:-7]) / 7 if len(entries) >= 14 else recent_avg
        
        if recent_avg > previous_avg * 1.1:
            insights.append({
                "type": "positive",
                "title": "📈 Profit Increasing",
                "message": f"Your profit has increased by {((recent_avg/previous_avg)-1)*100:.1f}% in the last week!",
                "action": "Review what changed and replicate success"
            })
        elif recent_avg < previous_avg * 0.9:
            insights.append({
                "type": "warning",
                "title": "📉 Profit Decreasing",
                "message": f"Your profit has decreased by {((1-recent_avg/previous_avg)*100):.1f}% in the last week.",
                "action": "Review expenses and consider adjusting prices"
            })

        # Expense ratio
        if avg_expenses > 0 and avg_profit > 0:
            expense_ratio = avg_expenses / (avg_profit + avg_expenses)
            if expense_ratio > 0.7:
                insights.append({
                    "type": "critical",
                    "title": "⚠️ High Expense Ratio",
                    "message": f"{expense_ratio*100:.1f}% of your revenue goes to expenses.",
                    "action": "Look for ways to reduce costs"
                })

        # Tax insights
        total_profit_ytd = sum(e.profit or 0 for e in entries)
        if total_profit_ytd > 800000:
            insights.append({
                "type": "tax",
                "title": "💰 Tax Eligible",
                "message": f"You've exceeded the NTA 2025 threshold of ₦800,000.",
                "action": "Use the PIT calculator to estimate your tax"
            })

        # Best day
        if entries:
            best_day = max(entries, key=lambda x: x.profit or 0)
            insights.append({
                "type": "insight",
                "title": "🌟 Your Best Day",
                "message": f"Your highest profit was {best_day.entry_date.strftime('%b %d')} at ₦{best_day.profit:,.0f}",
                "action": "Try to understand what made that day successful"
            })

        return jsonify({
            "success": True,
            "insights": insights
        }), 200

    except Exception as e:
        logger.error(f"Error getting insights: {str(e)}")
        return jsonify({"error": str(e)}), 500