"use strict";
// 描述一个对象类型
const obj = {
    name: '小明',
    age: 18
};
const obj2 = {
    name: '小明',
    age: 18,
    gender: '男'
};
// 定义类时，可以使类去实现一个接口
// 实现接口就是使类满足接口的要求
class myClass {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log('大家好');
    }
}
