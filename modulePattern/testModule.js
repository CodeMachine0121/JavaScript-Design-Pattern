let counter = 0;

const testModule = {
    incrementCounter: function() {
        counter ++;
    },
    resetCounter: function() {
        console.log(`Counter value prior to reset: ${counter}`);
        counter = 0;
    }
};
export default testModule;


