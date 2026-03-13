# backend/app/routes/daily.py
from flask import Blueprint, request, jsonify
from datetime import datetime, date, timedelta
from app.extensions import db
from app.utils.auth_decorators import token_required, get_current_user
from app.models.daily_entry import DailyEntry

bp = Blueprint("daily", __name__, url_prefix="/api/daily")


@bp.route("/summary", methods=["POST", "OPTIONS"])
@token_required
def save_daily_summary():
    if request.method == "OPTIONS":
        return "", 200

    user = get_current_user()
    if not user:
        return jsonify({"error": "Invalid token"}), 401

    try:
        data = request.get_json()

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
        estimated_tax = profit * 0.075  # Rough estimate

        # Parse entry date - FIXED: Convert to date object
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

        return jsonify({"success": True, "entry": entry.to_dict()}), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


@bp.route("/dashboard", methods=["GET"])
@token_required
def get_dashboard_stats():
    user = get_current_user()
    if not user:
        return jsonify({"error": "Invalid token"}), 401

    try:
        today = date.today()
        month_start = date(today.year, today.month, 1)

        # Get today's entries
        today_entry = DailyEntry.query.filter_by(
            user_id=user.id, entry_date=today
        ).first()

        today_sales = today_entry.sales if today_entry else 0
        today_expenses = today_entry.total_business_expenses if today_entry else 0

        # Get month's entries
        month_entries = DailyEntry.query.filter(
            DailyEntry.user_id == user.id,
            DailyEntry.entry_date >= month_start,
        ).all()

        month_sales = sum(e.sales + e.other_income for e in month_entries)
        month_expenses = sum(e.total_business_expenses for e in month_entries)
        month_profit = sum(e.profit for e in month_entries)
        estimated_tax = sum(e.estimated_tax for e in month_entries)

        # Get all time stats
        all_entries = DailyEntry.query.filter_by(user_id=user.id).all()
        total_sales = sum(e.sales + e.other_income for e in all_entries)
        total_expenses = sum(e.total_business_expenses for e in all_entries)
        total_tax = sum(e.estimated_tax for e in all_entries)
        days_tracked = len(all_entries)

        # Recent entries (last 10)
        recent = (
            DailyEntry.query.filter_by(user_id=user.id)
            .order_by(DailyEntry.entry_date.desc())
            .limit(10)
            .all()
        )

        recent_entries = []
        for e in recent:
            if e.sales > 0:
                recent_entries.append(
                    {
                        "date": e.entry_date.strftime("%b %d"),  # FIXED: Format date
                        "description": "End of Day Summary",
                        "amount": e.sales,
                        "type": "income",
                        "category": "Sales",
                    }
                )
            if e.other_income > 0:
                recent_entries.append(
                    {
                        "date": e.entry_date.strftime("%b %d"),
                        "description": "Other Income",
                        "amount": e.other_income,
                        "type": "income",
                        "category": "Other",
                    }
                )

        return (
            jsonify(
                {
                    "success": True,
                    "stats": {
                        "todaySales": today_sales,
                        "todayExpenses": today_expenses,
                        "monthSales": month_sales,
                        "monthExpenses": month_expenses,
                        "monthProfit": month_profit,
                        "estimatedTax": estimated_tax,
                        "totalSales": total_sales,
                        "totalExpenses": total_expenses,
                        "totalEstimatedTax": total_tax,
                        "daysTracked": days_tracked,
                        "recentEntries": recent_entries[:10],
                    },
                }
            ),
            200,
        )

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@bp.route("/month", methods=["GET"])
@token_required
def get_month_data():
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
        ).all()

        total_sales = sum(e.sales + e.other_income for e in entries)
        total_expenses = sum(e.total_business_expenses for e in entries)
        profit = sum(e.profit for e in entries)
        estimated_tax = sum(e.estimated_tax for e in entries)

        # Calculate VAT (simplified)
        vat_collected = total_sales * 0.075
        vat_paid = total_expenses * 0.075
        vat_payable = max(0, vat_collected - vat_paid)

        # Placeholder WHT (simplified)
        wht_deducted_from_you = profit * 0.05
        wht_you_deducted = total_expenses * 0.05

        # Get year-to-date
        ytd_start = date(year, 1, 1)
        ytd_entries = DailyEntry.query.filter(
            DailyEntry.user_id == user.id,
            DailyEntry.entry_date >= ytd_start,
            DailyEntry.entry_date < month_end,
        ).all()
        ytd_profit = sum(e.profit for e in ytd_entries)

        # Calculate annual estimate
        months_passed = month_num
        if months_passed > 0:
            estimated_annual_tax = (estimated_tax / months_passed) * 12
        else:
            estimated_annual_tax = 0

        progress_percent = min(100, int((months_passed / 12) * 100))

        return (
            jsonify(
                {
                    "success": True,
                    "data": {
                        "total_sales": total_sales,
                        "total_expenses": total_expenses,
                        "profit": profit,
                        "estimated_tax": estimated_tax,
                        "vat_collected": vat_collected,
                        "vat_paid": vat_paid,
                        "vat_payable": vat_payable,
                        "wht_deducted_from_you": wht_deducted_from_you,
                        "wht_you_deducted": wht_you_deducted,
                        "ytd_profit": ytd_profit,
                        "estimated_annual_tax": estimated_annual_tax,
                        "progress_percent": progress_percent,
                    },
                }
            ),
            200,
        )

    except Exception as e:
        return jsonify({"error": str(e)}), 500
