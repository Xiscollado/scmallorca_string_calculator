class Kata {
	add(value:string):number{
		if (arguments.length == 0 || value == "")
			return 0;

		let inputWithSameDelimiters =  value;

		while (inputWithSameDelimiters.indexOf("\n") != -1) {
			inputWithSameDelimiters = inputWithSameDelimiters.replace("\n", ",");
		}

		let numbers = inputWithSameDelimiters.split(",");
		let sum = 0;
		numbers.forEach(function(a) {
			sum += parseInt(a)
		});

		return sum;
	};
};