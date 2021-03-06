{
    type Invoice = {
        customer: string,
        orders: {
            amount: number
        }[],
        dueDate?: Date
    }

    // @ts-ignore
    function printDetails(invoice: Invoice, outStanding: number) {
        console.log(`고객명: ${invoice.customer}`);
        console.log(`채무액: ${outStanding}`);
        console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
    }

    /**
     * 배열, 레코드, 객체와 같은 데이터구조라면(주소값을 참조하는 데이터)
     * 함수에서 데이터를 수정했을때, 반환하지 않아도 원본 데이터 수정이 가능하다.
     */
    // @ts-ignore
    function recordDueDate() {
        const today: Date = new Date();
        invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
    }

    function calculateOutstanding(invoice: Invoice): number {
        // 미 해결 채무(outStanding)을 계산한다.
        let result = 0; // 문장 슬라이드하기
        for (const o of invoice.orders) {
            result += o.amount;
        }
        return result;
    }

    // @ts-ignore
    function printOwing(invoice: Invoice) {
        function printBanner() {
            console.log("*******************");
            console.log("******고객채무*****");
            console.log("*******************");
        }

        printBanner();

        // 미 해결 채무(outStanding)을 계산한다.
        const outStanding = calculateOutstanding(invoice);

        recordDueDate();

        printDetails(invoice, outStanding);

    }

    const invoice: Invoice = {
        customer: "고객",
        orders: [{
            amount: 1000
        }]
    }
    printOwing(invoice);
}