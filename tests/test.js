const random = require('../index');

console.log(`Random 0 - 1: ${random.number()}`);
console.log(`Random 0 - 4: ${random.number(4)}`);
console.log(`Random 50 - 100: ${random.number(50, 100)}`);

console.log(`Random 0.0 - 1.0: ${random.float()}`);
console.log(`Random 0.0 - 2.4: ${random.float(2.4)}`);
console.log(`Random 10.5 - 11.3: ${random.float(10.5, 11.3)}`);

console.log(`Random text 15: ${random.string()}`);
console.log(`Random Text 50: ${random.string(50)}`);
console.log(`Random Text 50: ${random.string(50, { numbers: false, dashes: true })}`);
console.log(`Random text abfy: ${random.character('abfy', 'lower')}`);

console.log(`Random HEX: ${random.color()}`);
