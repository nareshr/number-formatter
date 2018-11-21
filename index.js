'use strict';

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
module.exports = function(number, locale) {
    return number.toLocaleString(locale);
};

/*

"echo \"Error: no test specified\" && exit 1"
exports.printMsg = function() {
    console.log("This is a message from the demo package");
}
let x = 11;

function display() {
    console.log("Display x value -",x);
}

display();

console.log('Step: 1')
setTimeout(function () {
  console.log('Step: 3')
}, 0)
console.log('Step: 2')

console.log('Step: 11')
for (var i = 1; i<1000000000; i++) {
  // This will take 100-1000ms
}
console.log('Step: 22')*/

/*var fs = require('fs')
var myNumber = undefined

function addOne(callback) {
  fs.readFile('number.txt', function doneReading(err, fileContents) {
    myNumber = parseInt(fileContents)
    myNumber++
	
	fs.writeFile("number.txt", myNumber, function(err) {
		if(err) {
			return console.log(err);
		}
		console.log("The file was saved!");
	}); 	
    callback()
  })
}

function logMyNumber() {
  console.log(myNumber)
}

addOne(logMyNumber)*/
console.log(process);

console.time("loop");
for (var i = 0; i < 1000000; i += 1) {
    // Do nothing
}
console.timeEnd("loop");