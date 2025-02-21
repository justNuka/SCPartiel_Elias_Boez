import { Package } from "./models";
import { DeliveryService } from "./services/DeliveryService";
import { InvoicePrinter } from "./services/InvoicePrinter";
import { StandardPriceCalculator } from "./strategies/pricing/StandardPriceCalculator";

const packages = [
    new Package(8, 100),
    new Package(12, 50),
    new Package(5, 200)
];

const deliveryService = new DeliveryService(new StandardPriceCalculator());
const price = deliveryService.calculateDeliveryPrice(packages, "VIP", true);

const invoicePrinter = new InvoicePrinter();
invoicePrinter.printInvoice(price);