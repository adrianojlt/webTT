
function closures() {

	var fn = (function (x) { return function(y) { return x+y; } })(2) // returns a function ...

	var result  = fn(10); // 12

	console.log(result);
}

function hoisting() {

	var a = 123;

	function f() {
		console.log(a); // undefined
		var a = 1;
		console.log(a); // 1
	}

	f();
}

