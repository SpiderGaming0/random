# random
Does random things

## Examples:
Generate a random number
```js
const random = require('@spidergaming/random');
random.number(null, (data) => console.log(data)); // random number between 1 and 100
random.number(1000, (data) => console.log(data)); // random number between 1 and 1000
```

Generate random string
```js
const random = require('./index');
random.text(null, (d) => { console.log(d) }); // random string
```