console.log("a");

let timmy = setTimeout(function () {
    console.log("b");
}, 1);

let timothy = setTimeout(function () {
    console.log("c");
}, 10);

let timer = setTimeout(function () {
    console.log("d");
}, 0);

console.log("e");

// what is the order of the output of the letters and why?

// a
// e
// b
// d
// c

// normally we would expect "d" to print before "b", since the timout is 0 vs 1, but since "b" was added to the stack first,
// and by the time "a" and "e" printed, well - 1 millisecond had already past, so it looks at who was first on the stack - "b" in this case

// it's important to remember on setTimeout that the number used for the timeout is not exact, rather it is the *minimum* delay
// if that delay has already been exceeded, it will run the code sequentially - first in, first out
