
function closures() {

	fn = (function (x) { return function(y) { return x+y; } })(2) // returns a function ...

	var result  = fn(10); // 12

	console.log(result);
}

// closures
function secret() {

	var secretWords = ['pass','asdf','1234'];

	return function( password ) {

		if ( secretWords.indexOf(password) !== -1 ) {
			console.log('welcome ...');
			return true;
		}
		else {
			console.log('you are wrong!');
			return false;
		}
	} 
}

function greetFamily(familyName) {

	return function() {

		var peers = Array.prototype.slice.call(arguments).join(', ');
		console.log('welcome, ' + peers + " " + familyName);
	}
}

// the value of 'a' is undefined because it was not defined, but it still exist in local 
// space due to the special behavior called 'hoisting'
function hoisting() {

	var a = 123;

	function f() {
		//console.log(b); // this will create an error ...
		console.log(a); // undefined ... it was declared via hoisting ...
		var a = 1;
		console.log(a); // 1
	}

	f();

	return true;
}

function howThisWork() {

	var fullname = 'John Doe';

	var obj = {

		fullname: 'colin inhrig',

		prop: {
			fullname: 'Aurelio De Rosa',
			getFullname: function() {
				return this.fullname;
			}
		}
	};

	console.log(obj.prop.getFullname()); // returns 'colin inhrig'
	var f = obj.prop.getFullname; // ... now the context refers to the howThisWork function ...
	console.log(f()); // returns 'John Doe'
}

