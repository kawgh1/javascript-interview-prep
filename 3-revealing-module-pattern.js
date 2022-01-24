// revealing module pattern
// Turn this object literal into a module that only exposes the render method

// let myModule = {
//     data: [],
//     render: () => {},
//     add: () => {},
//     remove: () => {},
// };

let myModule = (function () {
    let _data = ["cat", "dog", "fish", "horse"];

    let _render = function () {
        // click listeners for _add and _remove
        console.log("_render was executed");
    };

    let _add = function () {
        _data.push("asdf");
    };

    let _remove = function () {
        _data.pop();
    };

    return {
        render: _render,
    };
})();

////

// render() is the only method that can be called on myModule outside myModule, _add(), _data and _remove() all have private access
// - _render() has private access too, but it is returned explicitly within myModule
myModule.render();
myModule._data; // this will run as undefined
myModule._add(); // this will fail
console.log("myModule._data =", myModule._data); // this will print myModule._data = undefined
