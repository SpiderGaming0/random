const random = require('../../index');
const color = require('chalk');

// Number
console.log(color.blueBright('\nNumber'));
console.log('0 - 1:', random.number());
console.log('0 - 4:', random.number(4));
console.log('50 - 100:', random.number(50, 100));
console.log('0 - 5 not 3:', random.number(0, 5, 3));
console.log('0 - 5 not 1, 3:', random.number(0, 5, [1, 3]));

// Float
console.log(color.blueBright('\nFloat'));
console.log('0.0 - 1.0:', random.float());
console.log('0.0 - 2.4:', random.float(2.4));
console.log('10.5 - 11.3:', random.float(10.5, 11.3));

// String
console.log(color.blueBright('\nString'));
console.log('15:', random.string());
console.log('50:', random.string(50));
console.log('50 numbers and dashes:', random.string(50, { numbers: false, dashes: true }));

// Word
console.log(color.blueBright('\nWord - Not added'));

// Character
console.log(color.blueBright('\nCharacter'));
console.log(random.character());
console.log('lowercase:', random.character(null, 'lower'));
console.log('abfy:', random.character('abfy', 'lower'));

// Choice
console.log(color.blueBright('\nChoice'));
console.log(random.choice(['Hello', 'Im weird', 'I didn\'t know that', 1, 3, 4, 10]));

// Shuffle
console.log(color.blueBright('\nShuffle'));
console.log(random.shuffle(['Hello', 'not', 'today', 'mate'], 10));
console.log(random.shuffle(['Hello', 'not', 'today', 'mate']));

// Color
console.log(color.blueBright('\nColor'));
let hex = random.color();
console.log(color.hex(hex)(hex));

// Time
console.log(color.blueBright('\nTime'));
console.log(random.time());
console.log(random.time({ hour: 10, minute: 40 }, { hour: 8, minute: 22 }));
console.log(random.time({ hour: 10, minute: 40 }, { hour: 8, minute: 22 }, 12));

// Date
console.log(color.blueBright('\nDate'));
console.log(random.date());
