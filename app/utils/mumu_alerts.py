# backend-new/app/utils/mumu_alerts.py
from datetime import datetime


def detect_rent_relief_mumu(user_data, calculation_data):
    """Detect if user is missing rent relief"""
    rent_paid = float(calculation_data.get("rent_paid", 0) or 0)
    claimed_relief = calculation_data.get("claimed_rent_relief", False)
    has_rent_history = user_data.get("has_rent_history", False)

    if rent_paid == 0 and not claimed_relief and has_rent_history:
        return {
            "type": "rent_relief",
            "severity": "high",
            "title": "You dey miss free money! 💰",
            "message": "We see say you dey pay rent for your shop or house. Government suppose give you ₦500,000 back but you never collect am!",
            "action": "Calculate my rent relief now",
            "potential_savings": 500000,
            "priority": 1,
        }

    if rent_paid > 0:
        max_relief = min(rent_paid * 0.20, 500000)
        current_relief = calculation_data.get("rent_relief_applied", 0)

        if current_relief < max_relief:
            additional = max_relief - current_relief
            tax_saved = additional * 0.20

            return {
                "type": "rent_relief",
                "severity": "medium",
                "title": "You fit save more!",
                "message": f"With your rent of ₦{rent_paid:,.0f}, you fit claim up to ₦{max_relief:,.0f}. But your calculation only show ₦{current_relief:,.0f}.",
                "action": "Maximize my relief",
                "potential_savings": tax_saved,
                "priority": 2,
            }

    return None


def detect_cit_classification_mumu(user_data, calculation_data):
    """Detect if small company is paying 30% CIT"""
    turnover = float(calculation_data.get("turnover", 0) or 0)
    business_type = calculation_data.get("business_type", "")
    total_assets = float(calculation_data.get("total_assets", 0) or 0)

    is_professional = business_type in [
        "law_firm",
        "accounting_firm",
        "medical_practice",
        "consulting",
    ]

    if turnover <= 100000000 and not is_professional and total_assets <= 250000000:
        company_tier = calculation_data.get("company_tier", "")

        if company_tier == "large":
            cit_paid = float(calculation_data.get("cit", 0) or 0)

            return {
                "type": "cit_classification",
                "severity": "critical",
                "title": "You dey pay tax wey you no suppose pay! 🚨",
                "message": f"Your business na small company (turnover ₦{turnover:,.0f}). Small companies no pay CIT at all! But your calculation show say you dey pay ₦{cit_paid:,.0f}.",
                "action": "Recalculate as small company",
                "potential_savings": cit_paid,
                "priority": 1,
            }

    return None
