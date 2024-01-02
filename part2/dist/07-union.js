"use strict";
// // 联合类型
// function prindId(id: number | string | number[]) {
//   console.log(`Your ID is: ${id}`);
//   // console.log(id.toUpperCase());
//   if (typeof id === 'string') {
//     console.log(id.toUpperCase());
//   } else {
//     console.log(id);
//   }
// }
// // prindId(10)
// prindId('123')
// function welcomePeople(x: string[] | string) {
//   if (Array.isArray(x)) {
//     console.log(`Hello, ${x.join(' and ')}`);
//   } else { 
//     console.log(`Welcome lone traveler ${x}`);
//   }
// }
// welcomePeople('Mark');
// welcomePeople(['Mark', 'Bob']);
