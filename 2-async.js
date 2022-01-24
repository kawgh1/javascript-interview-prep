// https://felixgerschau.com/javascript-event-loop-call-stack/

let num = 0;

async function increment() {
    num += await 2; // same as Promise.resolve(2)
    // num = 0 + await 2
    console.log(num); // num = 2
}

increment();
num += 1;
console.log(num); // num = 1
/****
 * What is the resulting output?
 *
 *  2, 3  x
 *
 *  1, 3  x
 *
 *  1, 2  correct
 *
 *  2, 1  x
 */

// why?

// since num is already defined as 0 on line 1, that is the value used in increment()
// - even tho its an async function, num has already been assigned the value of 0 inside the function
//   before line 10, num += 1 gets run outside the increment function scope

// it simply means that adding 2 to num is being ignored by javascript engine until we run all code in the main stack
// and the wait is finished then we console.log() what is inside the function
