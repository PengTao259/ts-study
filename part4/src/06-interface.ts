// // 描述一个对象类型

// type myType = {
//   name: string;
//   age: number;
// }

// const obj: myType = {
//   name: '小明',
//   age: 18
// }

// // 除了使用这种方式来定义也可以使用接口来定义
// interface myInterface { 
//   name: string;
//   age: number;
// }
// interface myInterface { 
//   gender: string;
// }

// const obj2: myInterface = {
//     name: '小明',
//     age: 18,
//     gender: '男'
// }

// // 接口可以在定义类的时候去限制类的结构
// // 接口中的所有属性不能有实际的值
// // 接口只定义对象的结构，而不考虑实际值
// // 在接口中所有的方法都是抽象方法
// interface myInter { 
//   name: string;
//   sayHello(): void;
// }
// // 定义类时，可以使类去实现一个接口
// // 实现接口就是使类满足接口的要求
// // 接口就是类的一个限制
// class myClass implements myInter { 
//   name: string;
//   constructor(name: string) { 
//     this.name = name;
//   }
//   sayHello() { 
//     console.log('大家好');
//   }
// }


