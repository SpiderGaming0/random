module.exports = {
	pad(num, max = 1) {
		num = num.toString();
		return num.length < max ? this.pad(`0${num}`, max) : num;
	}
};
