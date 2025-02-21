// rules/Rule666.ts
import { ValidationRule } from "../interfaces";
import { Prescription, Stock, Patient } from "../models";

export class Rule666 implements ValidationRule {

    appliesTo(prescription: Prescription): boolean {
        return true;
    }

    validate(patient: Patient, prescription: Prescription, stock: Stock): boolean {
        if (prescription.medicine !== stock.medicine) {
            return true;
        }
        return this.hasSufficientStock(stock);
    }

    private hasSufficientStock(stock: Stock): boolean {
        const emergencyReserve = 3;
        const safetyMargin = this.getSafetyMargin(stock);
        const requiredDoses = 1 * safetyMargin;

        return (stock.availableDoses - emergencyReserve) >= requiredDoses;
    }

    private getSafetyMargin(stock: Stock): number {
        return stock.isWeekend ? 1.2 : 1.0;
    }
}
