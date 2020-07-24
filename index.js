var randoms = {};

randoms.number = function (mod, callback) {
    mod = mod || 100;
    let output = Math.floor((Math.random() * mod) + 1);
    callback(output)
};

randoms.text = function (num, callback) {
    let r = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    callback(r);
};

module.exports = randoms;