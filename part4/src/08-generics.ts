// 泛型
// 如果使用any类型，会导致这个函数可以接收任何类型的参数
// 但是我们预期是传入number类型并且返回number类型
// 在定义函数或者在定义类是 如果不确定类型不明确的时候可以使用泛型
// function fn(a: any): any {
  // return a
// }

function fn<T>(a: T):T { 
  return a
}

// 可以直接调用具有泛型的函数
let res = fn(10)
let res2 = fn<string>('generics')  // 可以直接指定泛型
// console.log(res);
// console.log(res2);

function fn2<T, K>(a: T, b: K): T {
  // console.log(b);
  return a
}
fn2<number, string>(123, 'hello')
 

interface Inter { 
  length: number
}

function fn3<T extends Inter>(a: T): number {
  return a.length
}

// fn3('123')

class MyClass<T> { 
  name: T
  constructor(name: T) {
    this.name = name
  }
}

const mc = new MyClass<string>('generics')
console.log(mc);





