class ChangeParameter {
    inNewEngland(aCustomer) {
        return ["MA", "CT", "VT", "NH", "RI"].includes(aCustomer.address.state);
    }
}

type Customer = {
    name: string,
    address: {
        state: string;
    }
}
const someCustomers: Customer[] = [
    {name: "고객1", address: {state: "MA"}},
    {name: "고객2", address: {state: "CT"}},
    {name: "고객3", address: {state: "NH"}},
    {name: "고객4", address: {state: "VT"}},
    {name: "고객5", address: {state: "RI"}},
    {name: "고객6", address: {state: "SO"}},
    {name: "고객7", address: {state: "KK"}},
];
const changeParameter: ChangeParameter = new ChangeParameter();
const newEnglanders = someCustomers.filter(v => changeParameter.inNewEngland(v));

const expectVal:number = 5;
console.log(newEnglanders.length === expectVal);