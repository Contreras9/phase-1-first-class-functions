/*function receivesAFunction(num1, num2, callback) {
    let number = callback(num1, num2);
    console.log(number)
}


receivesAFunction(5,3, (num1, num2) => num1 * num2);
*/


function receivesAFunction(callback) {
    callback();
}



function returnsANamedFunction() {
    const five = function() {return 5};
    return five;
}

function returnsAnAnonymousFunction() {
    return function(){return 5};
}


/*let weirdFunction = returnsAWeirdfunction();

weirdFunction(() => console.log("Hello"));

function returnsAWeirdfunction() {
    return receivesAFunction;
}*/