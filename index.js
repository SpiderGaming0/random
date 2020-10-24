module.exports = {
	/**
	 * Generates a random integer between 0 and 1 or in a requested range.  
	 * If you input one number, it will be set as the max while the min will be set to 0;
	 * @param {number} [min=0] Minimum value
	 * @param {number} [max=1] Maximum value
	 */
	number(min, max) {
		if (min === null && max !== undefined) min = 0;
		if (min && max === undefined) { max = min; min = 0 }
		if (min === undefined) { min = 0; max = 1 }
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},

	/**
	 * Generates a random float between 0 and 1 or in a requested range.  
	 * If you input one number, it will be set as the max while the min will be set to 0;
	 * @param {number} [min=0] Minimum value
	 * @param {number} [max=1] Maximum value
	 */
	float(min = 0.0, max = 1.0) {
		if (min === null && max !== undefined) min = 0;
		if (min && max === undefined) { max = min; min = 0 }
		if (min === undefined) { min = 0; max = 1 }
		return Math.random() * (max - min) + min;
	},

	/**
	 * Generates a random string 15 characters long or to the specified length.  
	 * If you input one number, it will be set as the max while the min will be set to 0;
	 * @param {number} [length=15] Length of the string
	 * @param {object} [options] String options
	 * @param {boolean} [options.numbers=true] Weather or not to include numbers
	 * @param {boolean} [options.underscores=false] Weather or not to include underscores ( _ )
	 * @param {boolean} [options.dashes=false] Weather or not to include dashes ( - )
	 * @param {boolean} [options.lowercase=true] Weather or not to include lower case letters
	 */
	string(length, options) {
		if (!length) length = 15;

		if (options === undefined) options = { numbers: true, underscores: false, dashes: false, lowerCase: true }
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
		} while (length > i)

		return output;
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

	choice(choices) {
		return choices;
	},

	shuffle(items) {
		return;
	},

	/**
	 * Generates a random hex color
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
	 * Generates a random time between ?? and ??  
	 * This function does not have functionality yet
	 * @param {time} start 
	 * @param {*} end 
	 */
	time(start, end) {
		return;
	},

	date() {
		return;
	},

	day() {
		return;
	},

	month() {
		return;
	},


}