// Object creator
// In this drill, you need to write code for the createMyObject function so that it returns an object with the following key value pairs:

// foo => 'bar'
// answerToUniverse => 42
// olly olly => 'oxen free'
// sayHello => a function that returns the string 'hello'


// function createMyObject(){
//     return {
//         foo: 'bar',
//         answerToUniverse: 42,
//         "olly olly": 'oxen free',
//         sayHello: function(){
//             return("Hello")
//         }
//     }
// }

// console.log(createMyObject());

// Modify the updateObject function (which takes a single argument (obj)) so that it adds the following key/value pairs to obj and returns it:
// function updateObject(obj) {
//     obj.foo = 'foo';
//     obj.bar = 'bar';
//     obj.bizz = 'bizz';
//     obj.bang = 'bang';
//     return obj;
// }

// let hi = {
//     color: 'red',
//     shade: 'blue'
// }
// console.log(updateObject(hi));

// Self-reference
// Modify personMaker.fullName to be a function that uses self-reference (via this) in order to return the firstName and lastName properties separated by a space.

// So, for instance, if firstName was 'Jane' and lastName was 'Doe', fullName() should return 'Jane Doe'.

function personMaker() {
    var person = {
      firstName: 'Paul',
      lastName: 'Jones',
      // replace `null` with a function that uses self reference to return
      // full name
      fullName: function(){
          return `${this.firstName} ${this.lastName}`;
        }   
    }
    return person;
  }

  personMaker();