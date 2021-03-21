{
    class SeasonChecker {
        date = new Date();
        isBefore = (month: number) => {
            return this.date.getMonth() < month;
        }

        isAfter = (month: number) => {
            return month < this.date.getMonth();
        }
    }

    type Plan = {
        summer: {
            start: number;
            end: number;
            rate: number;
        },
        regular: {
            rate: number;
            serviceCharge: number;
        }
    }
    const plan: Plan = {
        summer: {
            start: 7,
            end: 10,
            rate: 0.8
        },
        regular: {
            rate: 1.0,
            serviceCharge: 1000
        }
    }

    const isSummer = () =>{
        return !aDate.isBefore(plan.summer.start) && !aDate.isAfter(plan.summer.end);
    }

    const summerCharge = () =>{
     return quantity * plan.summer.rate;
    }

    const regularCharge = () =>{
        return quantity * plan.regular.rate + plan.regular.serviceCharge;
    }

    const aDate: SeasonChecker = new SeasonChecker();
    let charge: number;
    const quantity = 3;

    // 여름철이면 할인율 달라짐.
    if (isSummer()) {
        charge = summerCharge();
    } else {
        charge = regularCharge();
    }

    console.log(charge);
}