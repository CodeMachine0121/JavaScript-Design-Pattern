let privateVar = 'private variable';
const publicVar = 'public variable';

const privateFunction = () => {
    console.log(`privateFunction: ${privateVar}`);
}

const publicSetVar = strVar =>{
    privateVar = strVar;
};

const publicEchoVar = ()=>{
    privateFunction();
};

export const myRevealingModule = {
    set: publicSetVar,
    get: publicVar,
    echoVar: publicEchoVar
}
