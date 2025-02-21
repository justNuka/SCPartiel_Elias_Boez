import { Package } from "../models/Package";
import { PriceCalculatorStrategy } from "../interfaces/PriceCalculatorStrategy";
import { DiscountStrategyFactory } from "../factories/DiscountStrategyFactory";

export class DeliveryService {
    constructor(private priceCalculator: PriceCalculatorStrategy) {}

    calculateDeliveryPrice(packages: Package[], customerType: string, urgent: boolean): number {
        let total = 0;
        const discountStrategy = DiscountStrategyFactory.getDiscountStrategy(customerType);

        for (const pkg of packages) {
            const basePrice = this.priceCalculator.calculate(pkg, urgent);
            total += discountStrategy.apply(basePrice);
        }

        if (packages.length > 3) {
            total *= 0.95;
        }

        return total;
    }
}