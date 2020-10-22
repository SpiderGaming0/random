# random
Does random things  
Require
```js
const random = require('@spidergaming/random');
```

Warning: I may no longer maintain this project. You are welcome to send pull requests and start an issue on github

## Examples:
### Generate a random number
`random.number([maxNumber])`
```js
let number = random.number();
console.log(number); // random number between 1 and 100

let number = random.number(1000);
console.log(number) // random number between 1 and 1000
```

Generate random string
```js
let text = random.text();
console.log(text); // random string
```