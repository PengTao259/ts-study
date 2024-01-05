"use strict";
let a;
a = {};
a = function () { };
// 用来指定对象中可以包含哪些属性
// 语法：{属性名:属性值,属性名:属性值}
let b;
b = { name: '123' };
// 这么写的意思就带标只要求有一个字符串类型的name 别的都不管
// 表示任意字符串类型的属性名，表示任意类型的属性
let c;
c = { name: '猪八戒', age: 18, gender: '男' };
let d;
d = function (n1, n2) {
    return n1 + n2;
};
// 数组的类型声明表示方式
let e;
e = ['a', 'b', 'c'];
let f; // 数组泛型 和let f:number[]一样
// 元组 => 固定长度的数组
let g;
g = ['hello', 123];
// enum 枚举
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
let i;
i = {
    name: '孙悟空',
    gender: Gender.Male
};
console.log(i.gender === Gender.Male);
let j;
j = {
    name: '孙悟空',
    age: 18
};
let k;
let l;
let m;
