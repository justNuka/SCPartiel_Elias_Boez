import { ValidationRule } from "../interfaces/ValidationRule";

import { Patient } from "../models/Patient";
import { Prescription } from "../models/Prescription";
import { Stock } from "../models/Stock";

export class Rule801 implements ValidationRule {

    appliesTo(prescription: Prescription): boolean {
        return prescription.medicine === "X";
    }

    validate(patient: Patient, prescription: Prescription, stock: Stock): boolean {
        if (this.isUnderGammaProtocol(prescription)) {
            return this.hasSufficientWhiteBloodCellsForGamma(patient);
        }
        return this.hasSufficientWhiteBloodCells(patient);
    }

    private isUnderGammaProtocol(prescription: Prescription): boolean {
        return prescription.protocol === "gamma";
    }

    private hasSufficientWhiteBloodCells(patient: Patient): boolean {
        return patient.whiteBloodCellCount > 2000;
    }

    private hasSufficientWhiteBloodCellsForGamma(patient: Patient): boolean {
        return patient.whiteBloodCellCount > 1500;
    }
}