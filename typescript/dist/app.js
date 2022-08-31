"use strict";
function sum(a, b) {
    return a + b;
}
console.log(sum(123, 456));
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log(this.name, 'name');
    }
}
class Dog extends Animal {
    bark() {
        console.log(this.name, 'dog');
    }
}
let dog = new Dog("旺财", 18);
dog.bark();
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
}
function greeter(person) {
    return 'Hello, ' + person.firstName + '' + person.lastName;
}
let user = new User('Yee', 'Huang');
console.log(greeter(user));
