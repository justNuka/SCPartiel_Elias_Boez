import { Prescription } from "../models/Prescription";
import { Patient } from "../models/Patient";
import { Stock } from "../models/Stock";

export interface ValidationRule {
    appliesTo(prescription: Prescription): boolean;
    validate(patient: Patient, prescription: Prescription, stock: Stock): boolean;
}