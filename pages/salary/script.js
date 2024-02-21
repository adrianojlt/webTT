
/*
$('#salaryrange').mdbRange({
    value: {
      min: 800,
      max: 15000
    },
    single: {
      active: true,
      multi: {
        active: false,
        rangeLength: 50
      },
    }
});
*/

function calculateSalary(value) 
{


}

function addListeners(input, range) {

    range.addEventListener('input', function() {
        input.value = range.value;
    });

    input.addEventListener('change', function(val) {
        range.value = val.target.value;
    });
}

var rangeRight = document.getElementById('salarayrange_right');
var inputRight = document.getElementById('salaryvalue_right');

var rangeLeft = document.getElementById('salarayrange_left');
var inputLeft = document.getElementById('salaryvalue_left');

var leftTotal = document.getElementById('leftTotal');
var rightTotal = document.getElementById('rightTotal');
var difference = document.getElementById('difference');

addListeners(inputRight, rangeRight);
addListeners(inputLeft, rangeLeft);