class Person { 
  // public 修饰的属性可以在任意位置访问（修改）默认值
  // private 私有属性，私有属性只能在类内部进行访问（修改）
  //   - 通过在类中添加方法使得私有属性可以被外部访问
  // protected 受保护的属性，只能在当前类和当前类的子类中访问（修改）
  // readonly 只读属性，无法修改
  private name: string;
  private age: number;
  constructor(name: string, age: number) { 
    this.name = name;
    this.age = age;
  }
  get Name() { 
    return this.name;
  }
  set Name(name: string) {
    this.name = name;
  }
  get Age() {
    return this.age;
  }
  set Age(age: number) {
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
  public name: string; // 公开属性
  private age: number; // 私有属性
  protected gender: string; // 受保护属性
  readonly birthYear: number; // 只读属性
  static species = 'Homo Sapiens'; // 静态属性

  constructor(name: string, age: number, gender: string, birthYear: number) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.birthYear = birthYear;
  }

  public sayHello() { // 公开方法
    console.log(`Hello, my name is ${this.name}`);
  }

  private getAge() { // 私有方法
    return this.age;
  }

  protected getGender() { // 受保护方法
    return this.gender;
  }

  static getSpecies() { // 静态方法
    return this.species;
  }
}

// console.log(Guy.species);
const guy = new Guy('Peter', 10, '2022', 20)
console.log(guy.name);



