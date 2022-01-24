// here obj is an IIFE, an Immediately Invoked Function Expression
// that is,  a function that is immediately run as soon as it is defined
// https://www.javascripttutorial.net/javascript-immediately-invoked-function-expression-iife/

/**
 * Create an example of a JavaScript Singleton.
 * After the first object is created, it will return additional
 * references to itself
 */

/* 

let obj = (function () {
    let objInstance; //private variable 
    function create() {
        //private function to create methods and properties
    }
    return {};
})(); 



let obj1 = obj.getInstance();
let obj2 = obj.getInstance();

 */

let obj = (function () {
    // - we want to know if this objInstance has already been created - if yes, then we return a copy, if not, then we create and return the original
    let objInstance; //private variable
    function create() {
        //private function to create methods and properties
        let _isRunning = false;
        let start = function () {
            _isRunning = true;
        };
        let stop = function () {
            _isRunning = false;
        };
        let currentState = function () {
            return _isRunning;
        };
        return {
            start: start,
            stop: stop,
            currentState: currentState,
        };
    }
    return {
        getInstance: function () {
            if (!objInstance) {
                objInstance = create();
            }
            return objInstance;
        },
    };
})();

let obj1 = obj.getInstance();
let obj2 = obj.getInstance();
// both return false
console.log(obj1.currentState());
console.log(obj2.currentState());

obj1.start();

// both return true - showing that obj1 and obj2 are pointing to the same object
console.log(obj1.currentState());
console.log(obj2.currentState());
