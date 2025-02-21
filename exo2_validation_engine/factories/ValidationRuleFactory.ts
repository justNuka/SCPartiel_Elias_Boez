// factories/ValidationRuleFactory.ts
import { ValidationRule } from "../interfaces";
import { Rule801, Rule327, Rule666 } from "../rules";

export class ValidationRuleFactory {
    static createRules(): ValidationRule[] {
        return [
            new Rule801(),
            new Rule327(),
            new Rule666()
        ];
    }
}
