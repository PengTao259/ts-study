function ces() {
  return Math.random() < 0.5
}

// 显式定义返回值类型
function greet(person: String, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}`);
  
}

greet('Maddison', new Date())

// 在tsconfig.json中配置"noImplicitAny": true, 会报错
let subname : string = undefined
let age: number = null

