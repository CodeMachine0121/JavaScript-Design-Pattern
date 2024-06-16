import MySingleton from "./instance.js";
import MyTransient from "./transient.js";

const mySingleton = new MySingleton();
const mySingleton2 = new MySingleton();
const myTransient = new MyTransient();
const myTransient2 = new MyTransient();


console.log(`mySingleton.randomNumber: ${mySingleton.getRandowmNumber()}`);
console.log(`mySingleton2.randomNumber: ${mySingleton2.getRandowmNumber()}`);
console.log(`myTransient.randomNumber: ${myTransient.getRandowmNumber()}`);
console.log(`myTransient2.randomNumber: ${myTransient2.getRandowmNumber()}`);
