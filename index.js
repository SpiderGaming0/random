module.exports = {
	number(mod) {
		mod = mod || 100;
		return Math.floor((Math.random() * mod) + 1);
	},

	text(len, opts) {
		if (opts === undefined) opts = {};
		if (opts.numbers === undefined) opts.numbers = true;
		if (opts.letters === undefined) opts.letters = true;
		if (opts.symbols === undefined) opts.symbols = false;
		let nums = opts.numbers;
		let lets = opts.letters;
		let syms = opts.symbols;
		len = len || 15;

		let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
		let numbers = '1234567890'.split('');
		let symbols = '-_'.split('');

		let out = '', x = 0;
		do {
			let n = this.number(3);
			x++;
			if (n === 1) {
				out += numbers[this.number(10) - 1];
			} else if (n === 2) {
				if (this.number(2) === 1) {
					out += letters[this.number(26) - 1];
				} else {
					out += letters[this.number(26) - 1].toLowerCase();
				}
			} else if (n === 3) {
				out += symbols[this.number(2) - 1];
			} else {
				continue;
			}
		} while (x <= len);
		return out;
	}
}