# backend/app/routes/tax_years.py
from flask import Blueprint, request, jsonify
from datetime import datetime
from app.extensions import db
from app.utils.auth_decorators import token_required, get_current_user
from app.models.tax_year import TaxYear
from app.models.calculation import Calculation
from app.models.credit import CreditBalance, CreditTransaction
import uuid

bp = Blueprint("tax_years", __name__, url_prefix="/api/tax-years")


@bp.route("/", methods=["GET"])
@token_required
def get_tax_years():
    """Get all tax years for the current user"""
    user = get_current_user()
    if not user:
        return jsonify({"error": "Invalid token"}), 401

    try:
        # Get all tax years for this user
        tax_years = (
            TaxYear.query.filter_by(user_id=user.id).order_by(TaxYear.year.desc()).all()
        )

        return (
            jsonify({"success": True, "years": [year.to_dict() for year in tax_years]}),
            200,
        )

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@bp.route("/<int:year>", methods=["GET"])
@token_required
def get_year_details(year):
    """Get detailed data for a specific year"""
    user = get_current_user()
    if not user:
        return jsonify({"error": "Invalid token"}), 401

    try:
        # Check if user has access to this year
        tax_year = TaxYear.query.filter_by(user_id=user.id, year=year).first()

        if not tax_year:
            return jsonify({"error": "Year not found"}), 404

        # Get all calculations from this year
        calculations = (
            Calculation.query.filter(
                Calculation.user_id == user.id,
                Calculation.tax_year == year,
                Calculation.is_saved == True,
            )
            .order_by(Calculation.created_at.desc())
            .all()
        )

        return (
            jsonify(
                {
                    "success": True,
                    "year": tax_year.to_dict(),
                    "calculations": [calc.to_dict() for calc in calculations],
                }
            ),
            200,
        )

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@bp.route("/unlock", methods=["POST"])
@token_required
def unlock_year():
    """Unlock a tax year (costs 5 credits)"""
    user = get_current_user()
    if not user:
        return jsonify({"error": "Invalid token"}), 401

    try:
        data = request.get_json() or {}
        year = data.get("year")

        if not year:
            return jsonify({"error": "Year is required"}), 400

        # Check if already unlocked
        existing = TaxYear.query.filter_by(user_id=user.id, year=year).first()
        if existing:
            return (
                jsonify(
                    {
                        "success": True,
                        "message": "Year already unlocked",
                        "year": existing.to_dict(),
                    }
                ),
                200,
            )

        # Check credit balance
        credit = CreditBalance.query.filter_by(user_id=user.id).first()
        if not credit or credit.balance < 5:
            return jsonify({"error": "Insufficient credits. Need 5 credits."}), 400

        # Get calculations for this year to pre-fill data
        calculations = Calculation.query.filter(
            Calculation.user_id == user.id,
            Calculation.tax_year == year,
            Calculation.is_saved == True,
        ).all()

        # Calculate totals
        total_income = 0
        total_tax_paid = 0

        for calc in calculations:
            if calc.calculator_type == "pit":
                total_income += calc.result_data.get("total_income", 0)
                total_tax_paid += calc.result_data.get("tax_payable", 0)
            elif calc.calculator_type == "cit":
                total_income += calc.result_data.get("assessable_profit", 0)
                total_tax_paid += calc.result_data.get("total_tax_payable", 0)

        effective_rate = (
            (total_tax_paid / total_income * 100) if total_income > 0 else 0
        )

        # Create tax year record
        tax_year = TaxYear(
            user_id=user.id,
            year=year,
            total_income=total_income,
            total_tax_paid=total_tax_paid,
            effective_rate=effective_rate,
        )
        db.session.add(tax_year)

        # Deduct credits
        credit.balance -= 5
        transaction = CreditTransaction(
            user_id=user.id,
            amount=-5,
            description=f"Unlocked tax year {year}",
            transaction_type="spend",
            reference=str(uuid.uuid4()),
        )
        db.session.add(transaction)

        db.session.commit()

        return (
            jsonify(
                {
                    "success": True,
                    "message": f"Year {year} unlocked successfully",
                    "year": tax_year.to_dict(),
                    "new_balance": credit.balance,
                }
            ),
            200,
        )

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


@bp.route("/calculate", methods=["POST"])
@token_required
def calculate_year_data():
    """Calculate or update year data based on saved calculations"""
    user = get_current_user()
    if not user:
        return jsonify({"error": "Invalid token"}), 401

    try:
        data = request.get_json() or {}
        year = data.get("year")

        if not year:
            return jsonify({"error": "Year is required"}), 400

        # Get all calculations for this year
        calculations = Calculation.query.filter(
            Calculation.user_id == user.id,
            Calculation.tax_year == year,
            Calculation.is_saved == True,
        ).all()

        total_income = 0
        total_tax_paid = 0

        for calc in calculations:
            if calc.calculator_type == "pit":
                total_income += calc.result_data.get("total_income", 0)
                total_tax_paid += calc.result_data.get("tax_payable", 0)
            elif calc.calculator_type == "cit":
                total_income += calc.result_data.get("assessable_profit", 0)
                total_tax_paid += calc.result_data.get("total_tax_payable", 0)

        effective_rate = (
            (total_tax_paid / total_income * 100) if total_income > 0 else 0
        )

        # Find or create tax year record
        tax_year = TaxYear.query.filter_by(user_id=user.id, year=year).first()

        if tax_year:
            tax_year.total_income = total_income
            tax_year.total_tax_paid = total_tax_paid
            tax_year.effective_rate = effective_rate
            tax_year.updated_at = datetime.utcnow()
        else:
            tax_year = TaxYear(
                user_id=user.id,
                year=year,
                total_income=total_income,
                total_tax_paid=total_tax_paid,
                effective_rate=effective_rate,
            )
            db.session.add(tax_year)

        db.session.commit()

        return (
            jsonify(
                {
                    "success": True,
                    "year": tax_year.to_dict(),
                    "calculations_count": len(calculations),
                }
            ),
            200,
        )

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
