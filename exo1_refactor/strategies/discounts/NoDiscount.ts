import { DiscountStrategy } from "../../interfaces/DiscountStrategy";

export class NoDiscount implements DiscountStrategy {
    apply(basePrice: number): number {
        return basePrice;
    }
}