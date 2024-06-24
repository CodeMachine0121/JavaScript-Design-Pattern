import {CarFactory} from "./CarFactory.js";

const carFactory = new CarFactory();
const car = carFactory.createCar({ carType: 'car', color: 'red'});
console.log(car instanceof Car);
console.log(car);
