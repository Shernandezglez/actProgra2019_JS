/*var firstname = 'Jane';

(function(lastname){

    var firstname = 'john';
    console.log(firstname);
    console.log(lastname);
}('Doe'));

console.log;

/*------------------------------------------------------ */
/*var greet = require('./greet1');
greet();*/

var greet2 = require('./greet2');
greet2.greet();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'changed hello world';

var greet3b = require('./greet3');
greet3b.greet();

var greet4 = require('./greet4');
var grtr = new greet4();
grtr.greet();

var greet5 = require('./greet5');
