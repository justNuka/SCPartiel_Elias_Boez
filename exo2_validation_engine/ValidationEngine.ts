import { ValidationRule } from "./interfaces";
import { ValidationRuleFactory } from "./factories/ValidationRuleFactory";
import { Patient, Prescription, Stock } from "./models";

export class ValidationEngine {
    private readonly rules: ValidationRule[];

    constructor(rules?: ValidationRule[]) {
        this.rules = rules ?? ValidationRuleFactory.createRules();
    }

    validate(patient: Patient, prescription: Prescription, stock: Stock): boolean {
        return this.rules
            .filter(rule => rule.appliesTo(prescription))
            .every(rule => rule.validate(patient, prescription, stock));
    }
}