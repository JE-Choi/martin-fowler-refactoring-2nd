type Invoice = {
    customer: string,
    orders: {
        amount: number
    }[],
    dueDate?: Date
}
function printOwing(invoice: Invoice) {
    function printBanner(){
        console.log("*******************");
        console.log("******고객채무*****");
        console.log("*******************");
    }

    function printDetails(){
        console.log(`고객명: ${invoice.customer}`);
        console.log(`채무액: ${outStanding}`);
        console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
    }

    let outStanding = 0;

    printBanner();

    // 미 해결 채무(outStanding)을 계산한다.
    for (const o of invoice.orders) {
        outStanding += o.amount;
    }

    const today: Date = new Date();
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

    printDetails();

}

const invoice: Invoice = {
    customer: "고객",
    orders: [{
        amount: 1000
    }]
}
printOwing(invoice);