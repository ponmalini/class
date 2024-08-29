class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    display() {
        console.log(`Car Details \n Brand: ${this.brand} \n Model: ${this.model}`);
    }
}


const Car1 = new Car("MarutiSuzuki", "Fronx");
Car1.display();
