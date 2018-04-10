const props = {
  val2: function() {
    console.log('aa+++++++++++++++++++++++++++++++++++++++++++');
    console.log(this.val);
    console.log('aa+++++++++++++++++++++++++++++++++++++++++++');
  },
};
const person1 = Object.create(props);
const person2 = Object.create(props);
person1.val = 11;
person2.val = 10;

console.log('+++++++++++++++++++++++++++++++++++++++++++');
person1.val2();
person2.val2();
console.log('+++++++++++++++++++++++++++++++++++++++++++');