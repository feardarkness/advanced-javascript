function Person(name, lastname) {
  this.firstname = name;
  this.lastname = lastname;
}

Person.prototype.fullName = function() {
  console.log(this.firstname + ' ' + this.lastname);
};

const person1 = new Person('Jhon', 'Doe');
const person2 = new Person('Amy', 'Yma');
person1.fullName();
person2.fullName();