function printCode(pt: {x: number, y: number}) {
  console.log(pt.x, pt.y);
}

printCode({ x: 10, y: 20 });

function printName(obj: { first: string, last?: string }) {
  console.log(obj.last?.toUpperCase());
  
}
 
// printName({ first: 'Bob' });
printName({ first: 'Alice', last: 'Alisson' });