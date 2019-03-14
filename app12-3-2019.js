

/*var Emitter = require('./Emitter');*/

//utiliza el emisor de eventos propios de NodeJS
var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function(){
    console.log('somewhere, someone said hello');
});

emtr.on('greet', function(){
    console.log('A greeting ocurred!');
});

console.log('Hello!');
emtr.emit('greet');

/*---------------------------------------------*/

var person = {
    firstname: '',
    lastname:'',
    greet: function(){
        return this.firstname + ' ' + this.lastname;
    }
}

var john = Object.create(person);
john.firstname = 'john';
john.lastname = 'Doe';

var jane = Object.create(person);
jane.firstname = 'jane';
jane.lastname = 'Doe';

console.log(john.greet());
console.log(jane.greet());

/* ------------------------------------------------*/


var EventEmitter = require('events');

var util = require('util');

function Greetr() {
    this.greeting = 'Hello world';

}

util.inherits(Greetr, EventEmitter);



Greetr.prototype.greet = function(){
    console.log(this.greeting);
    this.emit('greet');
}

//genera un nuevo objeto del function constructor
var greeter1 = new Greetr();

//imprimira un string cuando se ejecute el evento greet
greeter1.on('greet', function(){
    console.log('Someone greeted!');
});

greeter1.greet();