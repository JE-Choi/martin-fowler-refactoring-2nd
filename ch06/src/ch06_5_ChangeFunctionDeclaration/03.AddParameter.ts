class AddParameter {
    reservations: string[] = [];

    addReservation(customer: string) {
        this.reservations.push(customer)
    }
}
const instance = new AddParameter();
instance.addReservation("고객1");
instance.addReservation("고객2");
console.log(instance.reservations);