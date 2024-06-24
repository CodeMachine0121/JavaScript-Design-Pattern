export class Car{
    constructor({ doors= 4, state='brand new', color= 'silver'}){

        this.doors = doors;
        this.state = state;
        this.color = color;
    }
}
export class Truck{
    constructor({state='used', wheelsize='large', color='black'}){
        this.state = state;
        this.color = color;
        this.wheelsize = wheelsize;
    }
}

