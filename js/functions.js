
function closures() {

	var fn = (function (x) { return function(y) { return x+y; } })(2) // returns a function ...

	var result  = fn(10); // 12

	console.log(result);
}

