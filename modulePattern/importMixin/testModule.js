import {privateMethod} from "./privateMethods.js";

const testModule = ()=>({
    publicMethod: ()=>{
        privateMethod();
    }
});
export default testModule;
