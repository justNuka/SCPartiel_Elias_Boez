import { ValidationEngine } from "./ValidationEngine";
import { Patient, Prescription, Stock } from "./models";

const patient: Patient = {
    id: "P123",
    whiteBloodCellCount: 1600,
    geneticMarkers: ["BRCA1"],
    relapseDate: new Date("2020-05-01"),
};

const prescription: Prescription = {
    medicine: "Y+Z",
    administrationDate: new Date("2025-02-19"),
    underIRMSupervision: true,
};

const stock: Stock = {
    medicine: "Y+Z",
    availableDoses: 10,
    isWeekend: false,
};

const validationEngine = new ValidationEngine();
const isValid = validationEngine.validate(patient, prescription, stock);
console.log("La prescription est-elle valide ? ", isValid);
