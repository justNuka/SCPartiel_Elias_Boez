import { DiscountStrategy } from "../../interfaces/DiscountStrategy";

export class VIPDiscount implements DiscountStrategy {
    apply(basePrice: number): number {
        return basePrice * 0.8;
    }
}