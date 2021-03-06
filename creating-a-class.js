class Person {
  constructor(name, lastname) {
    this.firstname = name;
    this.lastname = lastname;
  }

  fullname() {
    console.log(this.firstname + ' ' + this.lastname);
  }

  fullnameUppercase() {
    console.log(this.firstname.toUpperCase() + ' ' + this.lastname.toUpperCase());
  }
}

const person1 = new Person('Jhon', 'Doe');
const person2 = new Person('Amy', 'Yma');
person1.fullname();
person1.fullnameUppercase();
person2.fullname();

// __proto__ has the person prototype (fullname, fullNAmeUppercase)
console.log('+++++++++++++++++++++++++++++++++++++++++++');
console.log(person1.__proto__);
console.log('+++++++++++++++++++++++++++++++++++++++++++');