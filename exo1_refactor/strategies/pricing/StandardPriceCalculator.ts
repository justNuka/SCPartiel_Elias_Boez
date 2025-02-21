import { PriceCalculatorStrategy } from "../../interfaces/PriceCalculatorStrategy";
import { Package } from "../../models/Package";

export class StandardPriceCalculator implements PriceCalculatorStrategy {
    calculate(pkg: Package, urgent: boolean): number {
        let base = pkg.getDistance() * 0.1;

        if (pkg.getWeight() > 10) {
            base += 5;
        } else if (pkg.getWeight() > 5) {
            base += 3;
        }

        if (urgent) {
            base *= 1.5;
        }

        return base;
    }
}