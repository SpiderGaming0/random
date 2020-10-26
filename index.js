const other = require('./src/other');

module.exports = {
	/**
	 * Generates a random integer between 0 and 1 or in a requested range
	 *
	 * If you input one number, it will be set as the max while the min will be set to 0
	 * @param {number} [min=0] Minimum value
	 * @param {number} [max=1] Maximum value
	 * @param {number|number[]} [not] Make sure the output number is not this inputted number(s)
	 * @returns {number} Returns a random number
	 */
	number(min, max, not) {
		if (min === null && max !== undefined) min = 0;
		if (min && max === undefined) {
			max = min;
			min = 0;
		}
		if (min === undefined) {
			min = 0;
			max = 1;
		}

		min = Math.ceil(min);
		max = Math.floor(max);
		let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

		if (typeof not === 'number') {
			if (randomNumber === not) return this.number(min, max, not);
			return randomNumber;
		} else if (Array.isArray(not)) {
			let allow = true;
			not.forEach((number) => {
				if (number === randomNumber) return allow = false;
			});
			if (allow) {
				return randomNumber;
			} else {
				return this.number(min, max, not);
			}
		} else {
			return randomNumber;
		}
	},

	/**
	 * Generates a random float between 0 and 1 or in a requested range
	 *
	 * If you input one number, it will be set as the max while the min will be set to 0
	 * @param {number} [min=0] Minimum value
	 * @param {number} [max=1] Maximum value
	 * @returns {float} Returns a random float
	 */
	float(min, max) {
		if (min === null && max !== undefined) min = 0.0;
		if (min && max === undefined) {
			max = min;
			min = 0.0;
		}
		if (min === undefined) {
			min = 0.0;
			max = 1.0;
		}

		return Math.random() * (max - min) + min;
	},

	/**
	 * Generates a random string 15 characters long or to the specified length
	 *
	 * If you input one number, it will be set as the max while the min will be set to 0
	 * @param {number} [length=15] Length of the string
	 * @param {Object} [options] String options
	 * @param {boolean} [options.numbers=true] Weather or not to include numbers
	 * @param {boolean} [options.underscores=false] Weather or not to include underscores ( _ )
	 * @param {boolean} [options.dashes=false] Weather or not to include dashes ( - )
	 * @param {boolean} [options.lowercase=true] Weather or not to include lower case letters
	 *
	 * @returns {string} Returns a random string
	 */
	string(length, options) {
		if (!length) length = 15;

		if (options === undefined) options = { numbers: true, underscores: false, dashes: false, lowerCase: true };
		if (options.numbers === undefined) options.numbers = true;
		if (options.underscores === undefined) options.underscores = false;
		if (options.dashes === undefined) options.dashes = false;
		if (options.lowercase === undefined) options.lowercase = true;

		let i = 0, output = '';
		do {
			switch (this.number(8)) {
				case 0: case 2: {
					output += this.character();
					i++;
					break;
				}
				case 3: case 5: {
					if (options.numbers === false) break;
					output += this.number(9);
					i++;
					break;
				}
				case 6: case 4: {
					if (options.underscores === false) break;
					output += '_';
					i++;
					break;
				}
				case 8: {
					if (options.dashes === false) break;
					output += '-';
					i++;
					break;
				}
				case 7: case 1: {
					if (options.lowerCase === false) break;
					output += this.character(null, 'lower');
					i++;
					break;
				}
				default: {
					output += 'A';
					i++;
					break;
				}
			}
		} while (length > i);

		return output;
	},

	word() {
		return;
	},

	character(characterRange, characterCase) {
		let letters = characterRange || 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		switch (characterCase) {
			case 'upper': case 0: {
				return this.character(letters).toUpperCase();
			}
			case 'lower': case 1: {
				return this.character(letters).toLowerCase();
			}
			case 'random': {
				return this.character(letters, this.number());
			}
			default: {
				return letters[this.number(letters.length - 1)];
			}
		}
	},

	choice(...choices) {
		if (choices.length <= 1) {
			return choices[0][this.number(choices[0].length - 1)];
		}
		return choices[0][this.number(choices.length - 1)];
	},

	shuffle(items, times) {
		if (Array.isArray(items) === false) return 'No array';
		if (times !== undefined && times <= 0) return items;
		let shuffled = Array(items.length);
		let not = [];
		items.forEach((item) => {
			let newIndex = this.number(0, items.length - 1, not);
			not.push(newIndex);
			shuffled[newIndex] = item;
		});
		if (times >= 1) return this.shuffle(shuffled, times - 1);
		return shuffled;
	},

	/**
	 * Generates a random hex color
	 * @returns {string} Returns a random hex color
	 */
	color() {
		let color = '#', i = 0;
		do {
			if (this.number(4) > 2) {
				color += this.number(9);
			} else {
				color += this.character('ABCDEF', 'random');
			}
			i++;
		} while (i < 6);

		return color;
	},

	/**
	 * Generates a random time between 0:00 and 23:59
	 * @param {Object} [start] Start time
	 * @param {number|string} [start.hour] Start hour
	 * @param {number|string} [start.minute] Start minute
	 *
	 * @param {Object} [end] End time
	 * @param {number|string} [end.hour] Start hour
	 * @param {number|string} [end.minute] Start minute
	 *
	 * @param {string} [hourFormat=24] Hour format (12, 24)
	 *
	 * @returns {Object} Object with hour and minute
	 */
	time(start, end, hourFormat) {
		let sH = parseInt(start?.hour) || 0;
		let eH = parseInt(end?.hour) || 23;
		let sM = parseInt(start?.minute) || 0;
		let eM = parseInt(end?.minute) || 59;

		let format = parseInt(hourFormat) || 24;

		let hour = 0, minute = 0;

		if (sH > eH) {
			let nSH = format - sH;
			let i = 0;

			let hours = [];
			do {
				hours.push(sH + i);
				i++;
			} while (nSH >= i);
			i = 0;
			do {
				hours.push(eH - i);
				i++;
			} while (eH >= i);
			hour = this.choice(this.shuffle(hours, format));
		} else {
			hour = this.number(sH, eH);
		}

		if (sM > eM) {
			let nSM = 60 - sM;
			let i = 0;

			let minutes = [];
			do {
				minutes.push(sM + i);
				i++;
			} while (nSM >= i);
			i = 0;
			do {
				minutes.push(eM - i);
				i++;
			} while (eM >= i);
			minute = this.choice(this.shuffle(minutes, format));
		}
		if (minute > 59) {
			minute = 0;
			hour++;
		}
		if (hour > (format - 1)) {
			hour = 0;
		}
		let outputTime = {
			hour: other.pad(hour, 2),
			minute: other.pad(minute, 2)
		};
		if (format === 12) outputTime.cycle = this.choice(['AM', 'PM']);
		return outputTime;
	},

	date() {
		return new Date(this.number(0, Date.now()));
	},

	day() {
		return;
	},

	month() {
		return;
	}

};
