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

// function personMaker() {
//     var person = {
//       firstName: 'Paul',
//       lastName: 'Jones',
//       // replace `null` with a function that uses self reference to return
//       // full name
//       fullName: function(){
//           return `${this.firstName} ${this.lastName}`;
//         }   
//     }
//     return person;
//   }

//   personMaker();

// // Modify the keyDeleter function so that it deletes keys for foo and bar for any object passed in and then returns the modified object.

// function keyDeleter(obj) {
//     delete obj.foo;
//     delete obj.bar;
//     return obj;
//   }
  
//   var sampleObj = {
//     foo: 'foo',
//     bar: 'bar',
//     bizz: 'bizz',
//     bang: 'bang',
//   };

//   console.log(keyDeleter(sampleObj));

// 1. Object initializers and methods

// Create an object called loaf using an object initializer ({}) with two properties: flour, which should be set to 300 and water which should be set to 210.
// Use console.log to print the flour and water properties.
// Add an empty method to the loaf object called hydration.
// Fill in the body of the method to return the hydration of the loaf (the water divided by the flour multiplied by 100).
// Call the hydration method and use console.log to print the result.
// const loaf = {
//     flour: 300,
//     water: 210,
//     hydration: function(){
//         return this.water / this.flour * 100;
//     }
// }

// console.log(loaf.flour, loaf.water);
// console.log(loaf.hydration());


// Create an object with five properties: foo, bar, fum, quux, and spam. Give each property a unique value of your choosing.
// Loop over the object using for ... in
// Use console.log to show each property name and its associated value.

// const hi= {
//     foo: 'foo',
//     bar: 'bar',
//     fum: 'fum',
//     quux: 'quux',
//     spam: 'spam'
// }

// for(let key in hi){
//     console.log(key, hi[key]);
// }

// Arrays in objects

// Create an object with a property called meals which is an array of strings: 'breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'.
// Use console.log to show the name of a hobbit's fourth meal of the day.
// Don't forget that humans and hobbits count from 1, but computers count from 0.

// const hobbitMeals = {
//     meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
// };

// console.log(hobbitMeals.meals[3]);



// Create 3-5 objects, each with a name and a jobTitle. Use people you know, or characters from fiction, or your own inventions.
// Store these objects in an array.
// Iterate over the array and use console.log to show each person's job title and name.

// const nyc = {
//     name: 'John',
//     jobTitle: 'Dev'
// }

// const pdx = {
//     name: 'Scott',
//     jobTitle: 'unemployed'
// }

// const cali = {
//     name: 'Hinderson',
//     jobTitle: 'CEO'
// }

// let cities = [nyc,pdx,cali];

// cities.forEach(function(city){
//     console.log(city.name, city.jobTitle);
// });

// . Properties that aren't there

// Expand on the previous example by adding a boss property to everyone except the owner of the company.
// Change the iteration to print out messages in this format: "${title} ${name} reports to ${boss}.". For example: Junior Engineer Bob reports to Fred..
// What gets printed out for the owner?
// Adjust the message so that people with no boss display "${title} ${name} doesn't report to anybody." - for example, Founder John doesn't report to anybody.


const nyc = {
    name: 'John',
    jobTitle: 'Dev',
    boss: 'Hinderson'
}

const pdx = {
    name: 'Scott',
    jobTitle: 'unemployed',
    boss: 'Hinderson'
}

const cali = {
    name: 'Hinderson',
    jobTitle: 'CEO'
}

let cities = [nyc,pdx,cali];

cities.forEach(function(city){
    let bossReport;
    if(city.boss){
        bossReport = `reports to ${city.boss}`;
    } 
    else{
        bossReport = "doesn't report to anybody";
    };
    console.log(`${city.jobTitle} ${city.name} ${bossReport}`)
}
)
