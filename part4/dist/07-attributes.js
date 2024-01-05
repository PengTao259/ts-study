"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get Name() {
        return this.name;
    }
    set Name(name) {
        this.name = name;
    }
    get Age() {
        return this.age;
    }
    set Age(age) {
        if (age >= 0) {
            this.age = age;
        }
    }
}
const per = new Person('小明', 18);
per.Name = '小红';
console.log(per.Name);
per.Age = 33;
console.log(per.Age);
// 现在属性是直接在对象中设置
// 属性可以在类中设置
// 属性可以被任意修改会导致对象中的数据变得非常不安全
// per.name = 'sss';
// per.age = -19;
// per.setName('小红')
// console.log(per.getName() );
// per.setAge(-19);
// console.log(per.getAge());
class Guy {
    constructor(name, age, gender, birthYear) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.birthYear = birthYear;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
    getAge() {
        return this.age;
    }
    getGender() {
        return this.gender;
    }
    static getSpecies() {
        return this.species;
    }
}
Guy.species = 'Homo Sapiens'; // 静态属性
// console.log(Guy.species);
const guy = new Guy('Peter', 10, '2022', 20);
console.log(guy.name);
