
const myCar= {
    name: "Ford Escort",

    drive() {
        const yourCar = Object.create(myCar, {
            model: {
                value: "Ford Escort",
                enumerable: true,
            },
        });
        console.log(yourCar.name);
        console.log(`${yourCar.model}`);    console.log("Weeee. I'm driving!");
    },

    panic() {
        console.log("Wait. How do you stop this thing?");
    },
};


