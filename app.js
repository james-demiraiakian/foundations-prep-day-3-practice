//string
console.log('hello world');

//numbers
console.log(1 + 1);

//empty
console.log(undefined);
console.log(null);

//variables

const PI = 3.1415926;

console.log(PI);
console.log(`The area of a circle with radius 2 is: ${PI * 2 * 2}`);

console.log('4' + '2');
console.log(4 + '2');
console.log(4 + Number('2'));
console.log(4 + 2);

//arrays
let myListNum = [1, 2, 3, 4];
let names = ['James', 'Caroline', 'Ellie', 'Alexis'];
let mixed = [1, 'Caroline', 2, 'James'];

console.log(myListNum);
console.log(names);
console.log(mixed);

let colors = ['purple', 'forest green', 'black'];
console.log(colors);
console.log(colors[0]);

colors[2] = 'grey';
console.log(colors);

colors.push('yellow');
console.log(colors);

colors.pop();
console.log(colors);

colors.shift();
console.log(colors);