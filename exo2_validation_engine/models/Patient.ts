export interface Patient {
    id: string;
    whiteBloodCellCount: number;
    geneticMarkers: string[];
    relapseDate?: Date;
}