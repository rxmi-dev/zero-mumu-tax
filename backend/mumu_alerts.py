# backend/mumu_alerts.py
from datetime import datetime

def detect_rent_relief_mumu(user_data, calculation_data):
    """
    Detect if user is missing rent relief
    Returns alert object if mumu moment detected
    """
    rent_paid = float(calculation_data.get('rent_paid', 0) or 0)
    claimed_relief = calculation_data.get('claimed_rent_relief', False)
    
    # Check if user has ever indicated they pay rent (from profile)
    has_rent_history = user_data.get('has_rent_history', False)
    
    # If rent is 0 but user likely pays rent
    if rent_paid == 0 and not claimed_relief and has_rent_history:
        return {
            'type': 'rent_relief',
            'severity': 'high',
            'title': 'You dey miss free money! 💰',
            'message': 'We see say you dey pay rent for your shop or house. Government suppose give you ₦500,000 back but you never collect am!',
            'action': 'Calculate my rent relief now',
            'action_type': 'fill_rent',
            'action_value': '2000000',  # Suggest ₦2M as example
            'potential_savings': 500000,
            'priority': 1,
            'category': 'deduction'
        }
    
    # If rent is entered but relief not maximized
    if rent_paid > 0:
        max_relief = min(rent_paid * 0.20, 500000)
        current_relief = calculation_data.get('rent_relief_applied', 0)
        
        if current_relief < max_relief:
            additional = max_relief - current_relief
            tax_saved = additional * 0.20  # Approximate tax savings
            
            return {
                'type': 'rent_relief',
                'severity': 'medium',
                'title': 'You fit save more!',
                'message': f'With your rent of ₦{rent_paid:,.0f}, you fit claim up to ₦{max_relief:,.0f}. But your calculation only show ₦{current_relief:,.0f}.',
                'action': 'Maximize my relief',
                'action_type': 'update_rent_relief',
                'action_value': max_relief,
                'potential_savings': tax_saved,
                'priority': 2,
                'category': 'deduction'
            }
    
    return None


def detect_cit_classification_mumu(user_data, calculation_data):
    """
    Detect if small company is paying 30% CIT
    """
    turnover = float(calculation_data.get('turnover', 0) or 0)
    business_type = calculation_data.get('business_type', '')
    total_assets = float(calculation_data.get('total_assets', 0) or 0)
    
    is_professional = business_type in ['law_firm', 'accounting_firm', 'medical_practice', 'consulting']
    
    # Small company threshold: ₦100M turnover, not professional service
    if turnover <= 100000000 and not is_professional and total_assets <= 250000000:
        # Check if they're being charged as large company
        company_tier = calculation_data.get('company_tier', '')
        
        if company_tier == 'large':
            cit_paid = float(calculation_data.get('cit', 0) or 0)
            
            return {
                'type': 'cit_classification',
                'severity': 'critical',
                'title': 'You dey pay tax wey you no suppose pay! 🚨',
                'message': f'Your business na small company (turnover ₦{turnover:,.0f}). Small companies no pay CIT at all! But your calculation show say you dey pay ₦{cit_paid:,.0f}.',
                'action': 'Recalculate as small company',
                'action_type': 'fix_cit_classification',
                'action_value': 'small',
                'potential_savings': cit_paid,
                'priority': 1,
                'category': 'classification'
            }
    
    return None


def detect_pension_mumu(user_data, calculation_data):
    """
    Detect if user is not maximizing pension
    """
    pension_rsa = float(calculation_data.get('pension_rsa', 0) or 0)
    employment_basic = float(calculation_data.get('employment_basic', 0) or 0)
    employment_housing = float(calculation_data.get('employment_housing', 0) or 0)
    employment_transport = float(calculation_data.get('employment_transport', 0) or 0)
    
    qualifying_income = employment_basic + employment_housing + employment_transport
    max_pension = qualifying_income * 0.08
    
    if max_pension > 0 and pension_rsa < max_pension * 0.8:
        additional = max_pension - pension_rsa
        tax_saved = additional * 0.20
        
        return {
            'type': 'pension',
            'severity': 'medium',
            'title': 'Your pension fit save you tax',
            'message': f'If you add ₦{additional:,.0f} more to your pension, government go give you ₦{tax_saved:,.0f} back!',
            'action': 'Increase pension now',
            'action_type': 'update_pension',
            'action_value': max_pension,
            'potential_savings': tax_saved,
            'priority': 3,
            'category': 'contribution'
        }
    
    return None


def detect_nhis_mumu(user_data, calculation_data):
    """
    Detect if user is missing NHIS deductions
    """
    nhis = float(calculation_data.get('nhis', 0) or 0)
    employment_basic = float(calculation_data.get('employment_basic', 0) or 0)
    
    max_nhis = employment_basic * 0.05
    
    if max_nhis > 0 and nhis < max_nhis * 0.5:
        additional = max_nhis - nhis
        tax_saved = additional * 0.20
        
        return {
            'type': 'nhis',
            'severity': 'low',
            'title': 'NHIS fit help you save',
            'message': f'You fit claim up to ₦{max_nhis:,.0f} for NHIS. Adding ₦{additional:,.0f} go reduce your tax by ₦{tax_saved:,.0f}.',
            'action': 'Add NHIS deduction',
            'action_type': 'update_nhis',
            'action_value': max_nhis,
            'potential_savings': tax_saved,
            'priority': 4,
            'category': 'deduction'
        }
    
    return None


def calculate_mumu_score(user, calculations):
    """
    Calculate the Mumu Score (0-100) for a user
    Higher score = smarter taxpayer (less mumu)
    """
    score = 100
    breakdown = []
    total_potential_savings = 0
    
    # Check 1: Did they claim rent relief? (-15 if not)
    has_rent_calc = any(c.get('rent_paid', 0) > 0 for c in calculations)
    claimed_rent = any(c.get('rent_relief_applied', 0) > 0 for c in calculations)
    
    if has_rent_calc and not claimed_rent:
        score -= 15
        breakdown.append({
            'reason': 'You never claim rent relief',
            'penalty': -15,
            'savings': 500000,
            'tip': 'Add your rent to save up to ₦500,000'
        })
        total_potential_savings += 500000
    
    # Check 2: Small company paying CIT? (-20 if yes)
    for calc in calculations:
        if calc.get('calculator_type') == 'cit':
            turnover = float(calc.get('turnover', 0) or 0)
            company_tier = calc.get('company_tier', '')
            business_type = calc.get('business_type', '')
            
            if turnover <= 100000000 and company_tier == 'large' and business_type not in ['law_firm', 'accounting_firm', 'medical_practice', 'consulting']:
                score -= 20
                cit_paid = float(calc.get('cit', 0) or 0)
                breakdown.append({
                    'reason': 'Your small company dey pay CIT wey you no suppose pay',
                    'penalty': -20,
                    'savings': cit_paid,
                    'tip': 'Small companies pay 0% CIT, not 30%'
                })
                total_potential_savings += cit_paid
                break
    
    # Check 3: Not maximizing pension? (-10)
    pension_total = 0
    pension_max = 0
    for calc in calculations:
        if calc.get('calculator_type') == 'pit':
            pension = float(calc.get('pension_rsa', 0) or 0)
            basic = float(calc.get('employment_basic', 0) or 0)
            housing = float(calc.get('employment_housing', 0) or 0)
            transport = float(calc.get('employment_transport', 0) or 0)
            qualifying = basic + housing + transport
            max_pension = qualifying * 0.08
            
            pension_total += pension
            pension_max += max_pension
    
    if pension_max > 0 and pension_total < pension_max * 0.8:
        score -= 10
        additional = pension_max - pension_total
        tax_saved = additional * 0.20
        breakdown.append({
            'reason': 'You no dey use pension well',
            'penalty': -10,
            'savings': tax_saved,
            'tip': f'Increase pension by ₦{additional:,.0f} to save ₦{tax_saved:,.0f}'
        })
        total_potential_savings += tax_saved
    
    # Check 4: Saved calculations? (-5 if none)
    if len(calculations) == 0:
        score -= 5
        breakdown.append({
            'reason': 'You never save any calculation',
            'penalty': -5,
            'savings': 0,
            'tip': 'Save your calculations to track your tax history'
        })
    
    # Check 5: Used What-If? (-5 if never)
    what_if_count = sum(1 for c in calculations if c.get('is_comparison', False))
    if what_if_count == 0 and len(calculations) > 0:
        score -= 5
        breakdown.append({
            'reason': 'You never try What-If comparison',
            'penalty': -5,
            'savings': 100000,
            'tip': 'Compare scenarios to find the best tax strategy'
        })
        total_potential_savings += 100000
    
    # Ensure score stays within 0-100
    score = max(0, min(100, score))
    
    # Calculate rank based on score
    if score >= 90:
        rank = 'Tax Master 👑'
        rank_description = 'You sabi tax well well!'
    elif score >= 75:
        rank = 'Wise Taxpayer 🦉'
        rank_description = 'You dey try, but fit still better'
    elif score >= 50:
        rank = 'Learning 📚'
        rank_description = 'You dey learn, keep going'
    elif score >= 25:
        rank = 'Beginner 🐣'
        rank_description = 'You just start, plenty to learn'
    else:
        rank = 'Mumu Alert! 🚨'
        rank_description = 'Abeg, follow our tips quick quick!'
    
    return {
        'score': score,
        'rank': rank,
        'rank_description': rank_description,
        'breakdown': breakdown,
        'total_potential_savings': total_potential_savings,
        'peer_comparison': {
            'better_than_percent': min(95, score + 5),  # Simplified for demo
            'in_lagos': min(90, score + 10)
        }
    }


def get_all_mumu_alerts(user, calculation_data, calculator_type):
    """
    Run all detectors and return prioritized alerts
    """
    alerts = []
    
    # Convert user to dict format
    user_data = {
        'has_rent_history': hasattr(user, 'rent_history') and user.rent_history,
        'business_type': getattr(user, 'business_type', ''),
        'turnover': getattr(user, 'turnover', 0)
    }
    
    calc_data = calculation_data if calculation_data else {}
    calc_data['calculator_type'] = calculator_type
    
    # Run relevant detectors based on calculator type
    if calculator_type == 'pit':
        detectors = [detect_rent_relief_mumu, detect_pension_mumu, detect_nhis_mumu]
    elif calculator_type == 'cit':
        detectors = [detect_cit_classification_mumu]
    else:
        detectors = []
    
    for detector in detectors:
        alert = detector(user_data, calc_data)
        if alert:
            alerts.append(alert)
    
    # Sort by priority (1 = highest)
    alerts.sort(key=lambda x: x['priority'])
    
    return alerts