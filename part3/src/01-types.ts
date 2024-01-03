let a: 10
// a = 11 // Error

// 联合类型
let b: "first" | "second"
b = "first"
b = "second"  

// any表示任意值 开发中不建议使用any
let c: any
c = 10
c = "hello"
c = true

// unknown 表示成为止类型
let e: unknown
e = 10
e = "hello"
e = true

let s: string

// unknown不能赋值给其他类型
// unknown实际上就是一个类型安全的any
// if (typeof e === "string") {
//   e = e
// }

// 类型断言
s = e as string





