import { Patient } from "../models/Patient";
import { Prescription } from "../models/Prescription";
import { Stock } from "../models/Stock";
import { ValidationRule } from "../interfaces/ValidationRule";

export class Rule327 implements ValidationRule {

    appliesTo(prescription: Prescription): boolean {
        return prescription.medicine === "Y+Z";
    }

    validate(patient: Patient, prescription: Prescription, stock: Stock): boolean {
        if (this.isWednesdayWithIRMSupervision(prescription)) {
            return true;
        }
        return this.hasBRCA1Marker(patient);
    }

    private isWednesdayWithIRMSupervision(prescription: Prescription): boolean {
        return this.isWednesday(prescription) && prescription.underIRMSupervision === true;
    }

    private isWednesday(prescription: Prescription): boolean {
        return prescription.administrationDate.getDay() === 3; // Mercredi = 3
    }

    private hasBRCA1Marker(patient: Patient): boolean {
        return patient.geneticMarkers.includes("BRCA1");
    }
}