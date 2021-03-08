type Item = {
    price: number;
}

class Order {
    constructor(public quantity: number, public item: Item) {
    }

    get price() {
        return this.basePrice * this.discountFactor;
    }

    get basePrice(){
        return this.quantity * this.item.price;
    }

    get discountFactor(){
        let discountFactor = 0.98;

        if (this.basePrice > 1000) {
            discountFactor -= 0.03;
        }
        return discountFactor;
    }
}

console.log(new Order(10, {price: 1000}).price);