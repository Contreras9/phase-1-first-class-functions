// /*function receivesAFunction(num1, num2, callback) {
//     let number = callback(num1, num2);
//     console.log(number)
// }


// receivesAFunction(5,3, (num1, num2) => num1 * num2);
// */


function receivesAFunction(cb) {
    return cb();
}

function returnsANamedFunction() {
    const five = function() {return };
    return five;
}

function returnsAnAnonymousFunction() {
    return function(){return "Hamzah"};
}


// /*let weirdFunction = returnsAWeirdfunction();

// weirdFunction(() => console.log("Hello"));

// function returnsAWeirdfunction() {
//     return receivesAFunction;
// }*/