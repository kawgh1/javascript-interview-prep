// ASI = "Automatic Semicolon Injection"

// ASI, object literals, square bracket syntax, hoisting
// what happens when you run this code? why?
// how would you fix it?

let a = {
    a: 123,
}[a].forEach(function (x) {
    console.log(x);
});

// first what is this code trying to do?

// it's creating an object  that contains a key-value pair, a = {a: 123}
// it's then trying to put that object inside an array, iterate over it with forEach() and log what's inside

// to fix it, we need to add a semicolon after the object and before [a]

let a = {
    a: 123,
};
[a].forEach(function (x) {
    console.log(x);
});

// if you put bracket squigglies {} immediately followed by square brackets [], Javascript is going to say, that's valid code ok
// but then it starts looking for a variable - NOT a property - called a

// without the semicolon, using square bracket notation - or property accessors - Javascript is trying to access the property a on the object a which hasnt yet been defined
// we would need to put a in quotes like this['a'] to access the property
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors

let b = {
    c: 123,
};
[b].forEach(function (x) {
    console.log(x);
});
