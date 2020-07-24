const random = require('./index');
random.number(null, (data) => console.log(data));
random.number(1000, (data) => console.log(data));
random.text(2, (d) => { console.log(d) })