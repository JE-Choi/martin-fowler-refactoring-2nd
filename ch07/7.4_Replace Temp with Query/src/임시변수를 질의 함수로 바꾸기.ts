type Item = {
    price: number;
}

class Order {
    constructor(public quantity: number, public item: Item) {
    }

    get price() {
        const basePrice = this.quantity * this.item.price;
        let discountFactor = 0.98;

        if(basePrice > 1000){
            discountFactor -= 0.03;
        }
        return basePrice * discountFactor;
    }
}