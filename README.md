> ***random*** | *Random generator and more*  
> **Status:** *Working Progress*

![Repo Size](https://img.shields.io/github/repo-size/spidergamin/random?style=flat-square)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/SpiderGamin/random.svg?logo=lgtm&logoWidth=18&style=flat-square)](https://lgtm.com/projects/g/SpiderGamin/random/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/SpiderGamin/random.svg?logo=lgtm&logoWidth=18&style=flat-square)](https://lgtm.com/projects/g/SpiderGamin/random/context:javascript)

# random
Random generator and more

[Documentation]() (Not set up yet)


### Random Generators
Unchecked boxes are planned but not worked on features. More features to comes as time goes on.
- [x] Integer
- [x] Float
- [x] String
- [x] Character
- [ ] Word
- [x] HEX color (Working Progress)
- [x] Time (Working Progress)
- [x] Date (Working Progress)
- [ ] Day
- [ ] Month

### Random Selection
- [x] Shuffle Arrays
- [x] Choose random item from array


## Setup
Requires NodeJS `v14` or higher. This module was created in NodeJS `v14.13.1`

Require
```js
const random = require('@spidergaming/random');
```

## Examples:
### Generate a random number
`random.number(min?, max?, not?)`
```js
// Get a random integer between 0 and 1
console.log(`Random 0 - 1: ${random.number()}`);

// Get a random integer between 0 and 4
console.log(`Random 0 - 4: ${random.number(4)}`);

// Get a random integer between 50 and 100
console.log(`Random 50 - 100: ${random.number(50, 100)}`);

// Get a random number between 0 and 5 that is not 3
console.log('0 - 5 not 3:', random.number(0, 5, 3));
```

For _almost_ all functions, check out [`src/tests/test.js`](/src/tests/test.js)

## Maintainers
- [SpiderGamin](https://github.com/SpiderGamin/)


## License
**random** is released under the MIT License. Read [here](/LICENSE) for more information.
