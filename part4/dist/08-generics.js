"use strict";
// 泛型
// 如果使用any类型，会导致这个函数可以接收任何类型的参数
// 但是我们预期是传入number类型并且返回number类型
// 在定义函数或者在定义类是 如果不确定类型不明确的时候可以使用泛型
// function fn(a: any): any {
// return a
// }
function fn(a) {
    return a;
}
// 可以直接调用具有泛型的函数
let res = fn(10);
let res2 = fn('generics'); // 可以直接指定泛型
// console.log(res);
// console.log(res2);
function fn2(a, b) {
    // console.log(b);
    return a;
}
fn2(123, 'hello');
function fn3(a) {
    return a.length;
}
// fn3('123')
class MyClass {
    constructor(name) {
        this.name = name;
    }
}
const mc = new MyClass('generics');
console.log(mc);
