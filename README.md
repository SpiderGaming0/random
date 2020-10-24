> *random* | Generates random things  
> Status: Working Progress

![Repo Size](https://img.shields.io/github/repo-size/spidergamin/random?style=flat-square)
# random

[Documentation](https://) (none yet)

Require
```js
const random = require('@spidergaming/random');
```

Any unchecked boxes are planned features.
### Generates Random
- [x] Integers
- [x] Floats
- [x] Strings
- [x] Characters
- [ ] Words
- [x] HEX colors (Working Progress)
- [ ] Times
- [ ] Dates
- [ ] Days
- [ ] Months

#### Other
- [ ] Shuffle Arrays
- [ ] Choose random item from array

## Examples:
### Generate a random number
`random.number(min?, max?)`
```js
// Get a random integer between 0 and 1
console.log(`Random 0 - 1: ${random.number()}`);

// Get a random integer between 0 and 4
console.log(`Random 0 - 4: ${random.number(4)}`);

// Get a random integer between 50 and 100
console.log(`Random 50 - 100: ${random.number(50, 100)}`);
```

## Maintainers
- [SpiderGamin](https://github.com/SpiderGamin/)


## License
**random** is released under the MIT License. Read [here](/LICENSE) for more information.
