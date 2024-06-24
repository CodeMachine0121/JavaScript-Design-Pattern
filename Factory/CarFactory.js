import {Car, Truck} from "./Cars.js";

export class CarFactory{
    constructor(){
        this.Car = Car;
    }

    createCar(options){
        const { carType, ...rest} = options;

        switch (carType){
            case 'car':
                this.Car = Car;
                break;
            case 'truck':
                this.Car = Truck;
                break;
        }
        return new this.Car(rest);
    }
}
