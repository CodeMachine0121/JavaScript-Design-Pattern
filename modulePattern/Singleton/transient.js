let instance;
class MyTransient{
    constructor(){
        this.randomNumber = Math.random();
        instance = this;

        return instance;
    }
    getRandowmNumber(){
        return this.randomNumber;
    }
}

export default MyTransient;
