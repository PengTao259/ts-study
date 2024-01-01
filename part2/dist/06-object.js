"use strict";
function printCode(pt) {
    console.log(pt.x, pt.y);
}
printCode({ x: 10, y: 20 });
function printName(obj) {
    var _a;
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
// printName({ first: 'Bob' });
printName({ first: 'Alice', last: 'Alisson' });
