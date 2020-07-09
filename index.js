var randoms = {};

randoms.number = function (mod, callback) {
    let output = Math.random()
    callback(output)
}

randoms.text = function (callback) {
    callback('Random text, soon to have a use.')
}

module.exports = randoms;