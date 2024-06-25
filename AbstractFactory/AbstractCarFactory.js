import {Car} from "../Factory/Cars.js";

export class AbstractCarFactory{

    constructor() {
        this.types = {};
    }

    getCar(type, customizations) {
        const car = this.types[type];
        return car ? new Car(customizations) : null;
    }

    registerCar(type, car) {;
        if (car.drive) {
            this.types[type] = car;
        }
        return this;
    }
}
