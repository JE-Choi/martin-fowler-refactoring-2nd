class Party{

}

class Employee extends Party{
    monthlyCost: number = 1;

    get annualCost() {
        return this.monthlyCost * 12;
    }
}

class Department extends Party{
    monthlyCost: number = 1;
    get totalAnnualCost() {
        return this.monthlyCost * 12;
    }
}