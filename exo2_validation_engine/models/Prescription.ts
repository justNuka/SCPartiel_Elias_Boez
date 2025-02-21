export interface Prescription {
    medicine: string;
    protocol?: string;
    administrationDate: Date;
    underIRMSupervision?: boolean;
}