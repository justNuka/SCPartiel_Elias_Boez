import { DiscountStrategy } from "../interfaces/DiscountStrategy";
import { NoDiscount, VIPDiscount, BusinessDiscount } from "../strategies/discounts";

export class DiscountStrategyFactory {
    static getDiscountStrategy(customerType: string): DiscountStrategy {
        switch (customerType) {
            case "VIP":
                return new VIPDiscount();
            case "Business":
                return new BusinessDiscount();
            default:
                return new NoDiscount();
        }
    }
}