// 使用接口定义对象类型

interface Point { 
  x: number,
  y: number
}
function printCoord(pt: Point) { 
  
}

printCoord({
  x: 100,
  y: 100
})

// 使用接口的方式扩展类型

// interface Animal {
//   name: string
// }

// interface Bear extends Animal {
//   honey: boolean
// }

// const bear: Bear = {
//   name: 'Peter',
//   honey: true
// }

// console.log(bear.honey);
// console.log(bear.name);

// 使用类型别名扩展类型
// type Animal = {
//   name: string
// }

// type Bear = Animal & {
//   honey: boolean
// }

interface Animal { 
  name: string
}

interface Animal { 
  age: number
}

const w: Animal = {
  name: 'Peter',
  age: 18
}