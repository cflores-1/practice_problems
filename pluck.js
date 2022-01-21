/*
write the pluck method
takes an array and a property, and returns the value of that property for each of the items.

const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
console.log(pluck(stooges, 'name'));//[ 'moe', 'larry', 'curly' ]
console.log(pluck(stooges, 'age'));//[ 40, 50, 60]; 
console.log(pluck(stooges, 'foo'));//[ undefined, undefined, undefined]; 
*/


let pluck = (arr, key)=> {
  return arr.map( item => item[key]);
}