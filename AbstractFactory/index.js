import {AbstractCarFactory} from "./AbstractCarFactory.js";

const abstractFactory = new AbstractCarFactory();

abstractFactory.registerCar("SUV", {drive: true});
abstractFactory.registerCar("Sedan", {drive: true});

const car = abstractFactory.getCar('SUV', {
    color: "blue"
});

console.log(car);

const car1 = abstractFactory.getCar("S", {
    color: "red"
});
console.log(car1)

