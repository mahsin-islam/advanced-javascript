class Person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const heroPerson = new Person('Hero', 'Balam', 20000);
console.log(heroPerson);
const friendlyPerson = new Person('Helo', 'Kalam', 25000);
console.log(friendlyPerson);


// new keyword ta amra tokhni use korbo jokhon kono akta class thake amra kono akta object bananbo and jotogulo dorker totogulo banabo hoite bare 1 2 or 3ta ai kaj ta kano korchi amra alada alada na banaia firstly sobgulo object r jonne dhore dhore alda property likha lagche na r secondly r gurrenty dai ja ai property gulor semtri gulo thakbe pore amra ader upor operation chalai or method call kori or add or sum kori saita kora onek easy hobe
// why new:  class thake object bananor jonne new use kora hoi  ebnong kano class thake object banai jate sob gulo object r moddhe property r behaviour r similirity thake 
function Person1(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}
const oldPerson = new Person1('Grand', 'Papa', 1200);
console.log(oldPerson);