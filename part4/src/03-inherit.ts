// class Animal { 
//   name: string;
//   age: number;
//   constructor(name: string, age: number) { 
//     this.name = name;
//     this.age = age;
//   }
//   sayHello() {
//     console.log('动物在叫~');
//   }
//   run() { 
//     console.log(`${this.name}在跑`);
//   }
// }
// // Animal是父类，Dog是子类 子类继承父类
// // 使用继承后 子类将会拥有父类所有的方法和属性
// // 如果希望在子类中添加一些父类中没有的属性或方法，可以直接加在子类中
// // 如果在子类中添加了和父类相同的方法，则子类方法会覆盖掉父类的方法
// // 子类覆盖掉父类的方法后，我们称之为重写父类方法

// class Dog extends Animal {
  
//   sayHello(): void {
//     console.log('汪汪汪~');
//   }
  
// }
// class Cat extends Animal {
//   sayHello(): void {
//     console.log('喵喵喵~');
//   }
// }



// const dog = new Dog('旺财', 3);
// const cat = new Cat('咪咪', 2);
// cat.run();

