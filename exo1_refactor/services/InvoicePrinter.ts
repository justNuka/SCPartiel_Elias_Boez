export class InvoicePrinter {
    printInvoice(price: number): void {
        console.log(`Total: ${price}`);
        if (price > 100) {
            console.log("Apply special discount next time!");
        }
    }
}