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