function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greet = function(){
    console.log('Hello, ' 
    + this.firstname 
    + ' ' + this.lastname);
};

var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);

/*---------------------------------------------*/

//pas by value

function change(b){
    b = 2;
}

 var a = 1;
 change(a);
 console.log(a);

 //pass by reference
 function changeObj(d){
     d.drop1 = function(){};
     d.prop2 = {};
 }

 var c = {};
 changeObj(c);
 console.log(c);