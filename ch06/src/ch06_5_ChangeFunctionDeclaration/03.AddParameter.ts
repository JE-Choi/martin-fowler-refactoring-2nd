class AddParameter {
    reservations: string[] = [];

    /**
     * @deprecated
     * @param customer
     */
    addReservation(customer: string) {
        this.new_addReservation(customer, false);
    }

    new_addReservation(customer: string, isPriority:boolean) {
        console.assert(isPriority === true || isPriority === false);
        this.reservations.push(customer)
    }
}
const instance = new AddParameter();
instance.addReservation("고객1");
instance.addReservation("고객2");
console.log(instance.reservations);