function ces() {
    return Math.random() < 0.5;
}
// 显式定义返回值类型
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString()));
}
greet('Maddison', new Date());
