class Party {
    get monthlyCost(): number {
        throw new Error("서브클래스 책임 오류");
    }

    get annualCost():number {
        return this.monthlyCost * 12;
    }
}

class Employee extends Party {
}

class Department extends Party {
}

const person: Party = new Employee();
console.log(person.annualCost);