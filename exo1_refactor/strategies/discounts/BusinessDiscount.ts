import { DiscountStrategy } from "../../interfaces/DiscountStrategy";

export class BusinessDiscount implements DiscountStrategy {
    apply(basePrice: number): number {
        return basePrice * 0.9;
    }
}