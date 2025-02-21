export interface DiscountStrategy {
    apply(basePrice: number): number;
}