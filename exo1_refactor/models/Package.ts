export class Package {
    constructor(private readonly weight: number, private readonly distance: number) {
        if (weight < 0) {
            throw new Error("Invalid weight!");
        }
        if (distance <= 0) {
            throw new Error("Invalid distance!");
        }
    }

    getWeight(): number {
        return this.weight;
    }

    getDistance(): number {
        return this.distance;
    }
}