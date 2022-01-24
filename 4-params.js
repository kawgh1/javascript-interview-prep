let f = function (a, b) {
    // code here
};

// determine if the function received the number of params it expected

f(1);
f(1, 2);
f(1, 2, 3);

// 'arguments' below is a property available to any JS function, it simply contains the arguments (a,b) passed to the function it is used on
// '.length' below is a property available to any JS function, it equals the number of arguments passed to the function (2)

// The "arguments" is only available in functions that are declared with "function" - either named or anonymous
// A.K.A. you can't use "arguments" inside an arrow function

let func = function (a, b) {
    if (arguments.length === func.length) {
        console.log("we have a match");
    } else {
        console.log("no match");
    }

    console.log("arguments = ", arguments);
};

func(1);
func(1, 2);
func(1, 2, 3);

// For Arrow functions, you can do something like this if all you need to know is the length of the arguments being passed.
// const someFn2 = (...args) => {
//   console.log(args.length)
// }
// someFn2(1, 3, 3, 3); //output: 4
// However, with this, someFn2.length will be 0
// So, you can't compare the length of arguments expected vs arguments provided :(
