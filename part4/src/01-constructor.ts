console.log('Hello World!');

class Person {
  // 直接定义的属性是实例属性，需要通过对象的实例去访问
  // readonly 代表的是一个只读的属性，无法修改 
  // readonly name: string = '大圣'
  name = '大圣'
  // age: number = 0
  // 通过static开头的属性是静态属性(类属性)，可以直接通过类去访问
  // static age: number = 0
  age = 0
  // 定义方法
  // sayHello() {
    // console.log('hello 大圣');
  // }
  // 如果方法以static开头，则方法就是类方法，可以直接通过类去调用
  static sayHi() {
    console.log('hi 大圣');
  }
}

const per = new Person()

// console.log(Person.age);
// console.log(per.name);
// per.name = '孙悟空'
// console.log(per.name);
Person.sayHi()




