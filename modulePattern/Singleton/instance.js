let instance;

const privateMethod = () => {
    console.log('I am private');
};

const privateVariable = 'I am also private';
const randomNumber = Math.random();

class MySingleton{
    constructor(){
        if (!instance) {
            this.publicProperty = 'I am also public';
            instance = this;
        }
        return instance;
    }

    publicMethod(){
        console.log('The public can see me!');
    }

    getRandowmNumber(){
        return randomNumber;
    }
}

export default MySingleton;
