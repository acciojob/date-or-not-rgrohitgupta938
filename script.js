var isDate = function (input) {
  //   write your code here
	if( input instanceof Date && !isNaN(input)) return true;
	if(typeof input ==="string"){
		const newDate = new Date(input);
		if(!isNaN(newDate)) return true
	}
	return false;
};

// Do not change the code below.
//const input = prompt("Enter Date.");
alert(isDate(input));
