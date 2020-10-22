const random = require('./index');

console.log('num: ', random.number());
console.log('num 2: ', random.number(1000));

console.log('text: ', random.text());
console.log('text: ', random.text(100, { numbers: false }));