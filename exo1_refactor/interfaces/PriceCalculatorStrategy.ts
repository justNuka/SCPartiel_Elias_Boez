import { Package } from "../models/";

export interface PriceCalculatorStrategy {
    calculate(pkg: Package, urgent: boolean): number;
}