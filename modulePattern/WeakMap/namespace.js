const privateVar = new WeakMap();
const privateMethod = new WeakMap();

class myNameSpace {
    constructor() {
        privateVar.set(this, 0);
        privateMethod.set(this, (foo)=> console.log(foo));
        this.myPublicVar = 'foo';
    }

    myPublicFunction(bar){
        let privCounter = privateVar.get(this);
        const privMethod = privateMethod.get(this);

        privCounter++;
        privateVar.set(this, privCounter);

        privMethod(bar)
    }
}

const nameSpace = new myNameSpace();
nameSpace.myPublicFunction(nameSpace.myPublicVar);
