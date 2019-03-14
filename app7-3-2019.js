//object properties and methods

var obj = {
    greet : 'Hello'
}

console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);

/*------------------------------------------------- */

// functions and arrays

var arr = [];

arr.push(function(){
    console.log('Hello world 1');
});

arr.push(function(){

    console.log('Hello world 2');
});

arr.push(function(){
    console.log('Hello world 3');
});

arr.forEach(function(item){
    item();
})

/*----------------------------------- */

/*var Emitter = require('./Emitter');*/

//utiliza el emisor de eventos propios de NodeJS
var Emitter = require('events');

var emtr = new Emitter();

emtr.on('greet', function(){
    console.log('somewhere, someone said hello');
});

emtr.on('greet', function(){
    console.log('A greeting ocurred!');
});

console.log('Hello!');
emtr.emit('greet');

