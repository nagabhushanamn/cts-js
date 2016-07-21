/**
 * http://usejsdoc.org/
 */


// ES-5

//function Person(name, age) {
//	this.name = name;
//	this.age = age;
//}
//
//Person.prototype.sayName = function() {
//	console.log('im ' + this.name);
//};
//Person.prototype.sayAge = function() {
//	console.log('im ' + this.age + " old");
//};


// ES-6

class Person{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	sayName() {
		console.log('im ' + this.name);
	}
	sayAge() {
		console.log('im ' + this.age + " old");
	}
}



var p1 = new Person('Nag', 32);
var p2 = new Person('Ria', 1);




