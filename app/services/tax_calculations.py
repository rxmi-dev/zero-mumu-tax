from app.config import Config


def calculate_progressive_tax(income):
    """Calculate tax using NTA 2025 progressive bands"""
    if income <= 0:
        return 0

    tax = 0
    remaining = income
    bands = Config.PIT_TAX_BANDS

    for i, band in enumerate(bands):
        if remaining <= 0:
            break
        prev_limit = bands[i - 1]["limit"] if i > 0 else 0
        band_limit = band["limit"] - prev_limit if band["limit"] else float("inf")
        taxable = min(remaining, band_limit)
        tax += taxable * band["rate"]
        remaining -= taxable

    return round(tax, 2)


def calculate_pit(data):
    """Calculate Personal Income Tax"""
    try:
        # Employment income
        employment_salary = float(data.get("employment_salary", 0) or 0)
        employment_basic = float(data.get("employment_basic", 0) or 0)
        employment_housing = float(data.get("employment_housing", 0) or 0)
        employment_transport = float(data.get("employment_transport", 0) or 0)
        employment_bonus = float(data.get("employment_bonus", 0) or 0)

        # Business and other income
        business_profit = float(data.get("business_profit", 0) or 0)
        pension_income = float(data.get("pension_income", 0) or 0)

        # Deductions
        pension_rsa = float(data.get("pension_rsa", 0) or 0)
        nhis = float(data.get("nhis", 0) or 0)
        nhf = float(data.get("nhf", 0) or 0)
        rent_paid = float(data.get("rent_paid", 0) or 0)
        paye_deducted = float(data.get("paye_deducted", 0) or 0)
        wht_credits = float(data.get("wht_credits", 0) or 0)

        # Calculate totals
        total_income = (
            employment_salary + employment_bonus + business_profit + pension_income
        )

        # Calculate deductions
        qualifying_income = employment_basic + employment_housing + employment_transport
        max_pension = qualifying_income * 0.08
        actual_pension = min(pension_rsa, max_pension) if pension_rsa > 0 else 0

        max_nhis = employment_basic * 0.05
        actual_nhis = min(nhis, max_nhis) if nhis > 0 else 0

        max_nhf = employment_basic * 0.025
        actual_nhf = min(nhf, max_nhf) if nhf > 0 else 0

        rent_relief = min(rent_paid * 0.20, 500000)

        total_deductions = actual_pension + actual_nhis + actual_nhf + rent_relief
        chargeable_income = max(0, total_income - total_deductions)

        # Check minimum wage exemption
        if total_income <= Config.MINIMUM_WAGE:
            return {
                "success": True,
                "data": {
                    "exempt": True,
                    "minimum_wage": Config.MINIMUM_WAGE,
                    "total_income": total_income,
                    "message": "Tax exempt - Minimum wage earner",
                },
            }

        # Calculate tax
        regular_tax = calculate_progressive_tax(chargeable_income)
        total_tax = max(0, regular_tax - wht_credits)

        # Determine result
        if paye_deducted > total_tax:
            refund = paye_deducted - total_tax
            additional = 0
            result_type = "refund"
        else:
            refund = 0
            additional = total_tax - paye_deducted
            result_type = "additional" if additional > 0 else "balanced"

        return {
            "success": True,
            "data": {
                "exempt": False,
                "total_income": round(total_income, 2),
                "total_deductions": round(total_deductions, 2),
                "chargeable_income": round(chargeable_income, 2),
                "tax_payable": round(total_tax, 2),
                "paye_deducted": round(paye_deducted, 2),
                "refund_amount": round(refund, 2),
                "additional_tax": round(additional, 2),
                "result_type": result_type,
                "effective_rate": (
                    round((total_tax / total_income * 100), 2)
                    if total_income > 0
                    else 0
                ),
                "deductions_breakdown": {
                    "pension": round(actual_pension, 2),
                    "nhis": round(actual_nhis, 2),
                    "nhf": round(actual_nhf, 2),
                    "rent_relief": round(rent_relief, 2),
                },
            },
        }
    except Exception as e:
        print(f"PIT calculation error: {str(e)}")
        import traceback

        traceback.print_exc()
        return {"success": False, "error": str(e)}


def calculate_cit(data):
    """Calculate Companies Income Tax"""
    try:
        # Extract data
        business_type = data.get("business_type", "trading")
        turnover = float(data.get("turnover", 0) or 0)
        total_assets = float(data.get("total_assets", 0) or 0)
        trading_profit = float(data.get("trading_profit", 0) or 0)
        rental_income = float(data.get("rental_income", 0) or 0)
        operating_expenses = float(data.get("operating_expenses", 0) or 0)
        interest_expense = float(data.get("interest_expense", 0) or 0)
        losses_brought_forward = float(data.get("losses_brought_forward", 0) or 0)
        wht_credits = float(data.get("wht_credits", 0) or 0)

        # Assets for capital allowances
        assets_data = {
            "industrial_building": float(data.get("industrial_building", 0) or 0),
            "plant_machinery": float(data.get("plant_machinery", 0) or 0),
            "furniture_fittings": float(data.get("furniture_fittings", 0) or 0),
            "motor_vehicle": float(data.get("motor_vehicle", 0) or 0),
        }

        # Calculate profit
        total_income = trading_profit + rental_income
        total_expenses = operating_expenses + interest_expense
        pbt = total_income - total_expenses
        profit_after_losses = max(0, pbt - losses_brought_forward)

        # Calculate capital allowances
        capital_allowance_result = calculate_capital_allowances(
            assets_data, profit_after_losses
        )
        capital_allowance = capital_allowance_result["restricted"]
        assessable_profit = max(0, profit_after_losses - capital_allowance)

        # Determine company tier
        is_professional = business_type in Config.PROFESSIONAL_SERVICES
        if (
            turnover <= Config.SMALL_COMPANY_THRESHOLD
            and total_assets <= Config.ASSET_THRESHOLD
            and not is_professional
        ):
            company_tier = "small"
            cit_rate = Config.SMALL_CIT_RATE
            levy_rate = 0
        else:
            company_tier = "large"
            cit_rate = Config.LARGE_CIT_RATE
            levy_rate = Config.DEVELOPMENT_LEVY_RATE

        cit = assessable_profit * cit_rate
        levy = assessable_profit * levy_rate
        total_tax = max(0, cit + levy - wht_credits)

        return {
            "success": True,
            "data": {
                "company_tier": company_tier,
                "total_income": round(total_income, 2),
                "total_expenses": round(total_expenses, 2),
                "pbt": round(pbt, 2),
                "assessable_profit": round(assessable_profit, 2),
                "cit_rate": cit_rate * 100,
                "cit": round(cit, 2),
                "levy_rate": levy_rate * 100,
                "levy": round(levy, 2),
                "total_tax_payable": round(total_tax, 2),
                "capital_allowances": round(capital_allowance, 2),
            },
        }
    except Exception as e:
        print(f"CIT calculation error: {str(e)}")
        import traceback

        traceback.print_exc()
        return {"success": False, "error": str(e)}


def calculate_capital_allowances(assets_data, assessable_profit):
    """Calculate capital allowances based on NTA 2025 rates"""
    rates = {
        "industrial_building": 0.10,
        "plant_machinery": 0.20,
        "furniture_fittings": 0.20,
        "motor_vehicle": 0.20,
    }

    total_annual = 0
    for asset_type, value in assets_data.items():
        if value > 0 and asset_type in rates:
            total_annual += value * rates[asset_type]

    max_allowed = assessable_profit * (2 / 3)
    actual_allowance = min(total_annual, max_allowed)

    return {
        "annual": round(total_annual, 2),
        "restricted": round(actual_allowance, 2),
        "excess": round(max(0, total_annual - max_allowed), 2),
    }
