//function statement
/*
function greet(){
    console.log('hi');
}
greet();

//functions are first-class
function logGreeting(fn){
    fn();
}
logGreeting(greet);

//function expression
var greetMe = function(){
    console.log('Hi omelo chino');
}
greetMe();

//it's first-class
logGreeting(greetMe);
*/
//use a function expression on the fly
var ss = function() {
    console.log('Henlo Sergio!');
}


module.exports = ss;


