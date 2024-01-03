"use strict";
function printCode(pt) {
    console.log(pt.x, pt.y);
}
printCode({ x: 10, y: 20 });
function printName(obj) {
    console.log(obj.last?.toUpperCase());
}
// printName({ first: 'Bob' });
printName({ first: 'Alice', last: 'Alisson' });
