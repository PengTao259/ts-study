let a: object
a = {}
a = function () { }

// 用来指定对象中可以包含哪些属性
// 语法：{属性名:属性值,属性名:属性值}
let b: {
  name: string,
  age?: number  // 属性名后面加上?，表示属性是可选的
}

b = { name: '123' }

// 这么写的意思就带标只要求有一个字符串类型的name 别的都不管
// 表示任意字符串类型的属性名，表示任意类型的属性
let c: {
  name: string,
  [propName: string]: any
}

c = { name: '猪八戒', age: 18, gender: '男' }

let d: (a: number, b: number) => number
d = function (n1, n2): number {
  return n1 + n2
}

// 数组的类型声明表示方式
let e: string[]
e = ['a', 'b', 'c']
let f: Array<number> // 数组泛型 和let f:number[]一样

// 元组 => 固定长度的数组
let g: [string, number]
g = ['hello', 123]

// enum 枚举
enum Gender { 
  Male = 0,
  Female = 1 
}

let i: {
  name: string,
  gender: Gender
}
i = {
  name: '孙悟空',
  gender: Gender.Male
}

console.log(i.gender === Gender.Male);
let j: { name: string } & {age: number}
j = {
  name: '孙悟空',
  age: 18
}

// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5
let k: myType
let l: myType
let m: myType


