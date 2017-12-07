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


// const nyc = {
//     name: 'John',
//     jobTitle: 'Dev',
//     boss: 'Hinderson'
// }

// const pdx = {
//     name: 'Scott',
//     jobTitle: 'unemployed',
//     boss: 'Hinderson'
// }

// const cali = {
//     name: 'Hinderson',
//     jobTitle: 'CEO'
// }

// let cities = [nyc,pdx,cali];

// cities.forEach(function(city){
//     let bossReport;
//     if(city.boss){
//         bossReport = `reports to ${city.boss}`;
//     } 
//     else{
//         bossReport = "doesn't report to anybody";
//     };
//     console.log(`${city.jobTitle} ${city.name} ${bossReport}`)
// }
// )



// function decode(word){
//     let decoded = ""; 
//     let wordArr = word.split(" ");
//     let firstLetters = [];
//     wordArr.forEach(function(n) {
//         firstLetters.push(n.substring(0,1));
//     });
//     // console.log(arr2);
//     for(let x = 0; x < firstLetters.length; x++){
//         if (firstLetters[x] == "a") {
//             decoded = decoded + "2";
//         }

//         else if (firstLetters[x] == "b") {
//             decoded = decoded + "3";
//         }

//         else if (firstLetters[x] == "c") {
//             decoded = decoded + "4";
//         }

//         else if (firstLetters[x] == "d") {
//             decoded = decoded + "5";
//         }

//         else {
//             decoded = decoded + "-";
//         }
//     }

//     return word.charAt(decoded);
// }

// Redo your Cracking the Code problem from String Drills but this time use an object as your cipher. Additionally, instead of having the function accept a single word, have the function accept a single string of words, and then return the fully decoded message.


// let decode = {
//     a: 2,
//     b: 3,
//     c: 4,
//     d: 5
// }
// // console.log(decode.a);

// function decodedString(str) {
//     let decodedAnswer = '';
//     let wordArray = str.split(" ");
//     wordArray.forEach(function (word) {
//         let charNumber = decode[word.substring(0, 1)];
//         if (charNumber === undefined) {
//             decodedAnswer += ' ';
//         } else {
//             decodedAnswer += word.charAt(charNumber - 1);
//         }
//     })
//     return decodedAnswer;
// }

// console.log(decodedString("craft block argon meter bells brown croon droop"));

// 7. Factory Functions with LOTR

// Write a factory function called createCharacter (review in this assignment) that could appropriately build characters from LOTR that have the following attributes:
// ===============================================================================================
// | Name                      | Nickname    | Race       | Origin         | Attack   | Defense  |
// -----------------------------------------------------------------------------------------------
// | Gandalf the White         | gandalf     | Wizard     | Middle Earth   | 10       | 6        |
// -----------------------------------------------------------------------------------------------
// | Bilbo Baggins             | bilbo       | Hobbit     | The Shire      | 2        | 1        |
// -----------------------------------------------------------------------------------------------
// | Frodo Baggins             | frodo       | Hobbit     | The Shire      | 3        | 2        |
// -----------------------------------------------------------------------------------------------
// | Aragorn son of Arathorn   | aragorn     | Man        | Dunnedain      | 6        | 8        |
// -----------------------------------------------------------------------------------------------
// | Legolas                   | legolas     | Elf        | Woodland Realm | 8        | 5        |
// -----------------------------------------------------------------------------------------------
// Each character should have the method describe which takes no parameters and prints out the string: "{name} is a {race} from {origin}."

// Each character should also have a method called evaluateFight that takes in a character object and returns the following string: "Your opponent takes {x} damage and you receive {y} damage" where x and y are the differences between each characters attack and defense values. If defense exceeds attack, then take zero damage.

// Using array literal syntax, create an array characters that calls your factory function for each character in the table above with the relevant parameters. Your characters array should now have 5 objects in it.

// Add a new character to characters (make up any attributes not provided):

// Arwen Undomiel is a Half-Elf of Rivendell
// Using the .find() function, retrieve your character nicknamed aragorn from characters and then call his describe method.

// Using the .filter() function, create a new array from characters that ONLY contains characters of the race Hobbit.

// Using the .filter() function, create a new array from characters that ONLY contains characters with attack value above 5.

// What if you wanted to equip a weapon for each character and change how they are described? For example:

// Gandolf the White is a Wizard of the Middle Earth who uses a wizard staff
// Bilbo Baggings is a Hobbit of the Shire who uses the Ring
// Frodo ... String and Barrow Blade
// Aragon .... Anduril
// Legolas ... Bow and Arrow
// Arwen .... Hadhafang
// How would you change the factory function and other methods?

function createCharacter(name, nickName, race, origin, attack, defense, opponent){

    return {
        name,
        nickName,
        race,
        origin,
        attack,
        defense,
        describe: function(){
            console.log(`${this.name} is a ${this.race} from ${this.origin}.`)},
        evaluateFight: function(opponent){
            let opponentDamage = opponent.defense - this.attack;
            let ownDamage = this.defense - opponent.attack;
            if(opponentDamage < 0){
                opponentDamage = 0
                };
            if(ownDamage < 0) {
                ownDamage = 0
            };   
           console.log(`Your opponent takes ${opponentDamage} damage and you receive ${ownDamage} damage`);
            }
        }    
   
        };
console.log(        
 createCharacter('scott', 'scottie', 'white', 'NC', 20, 200));

 // Using array literal syntax, create an array characters that calls your factory function for each character in the table above with the relevant parameters. Your characters array should now have 5 objects in it.

 let characters = [createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', '10', '6'), createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1), createCharacter('Frodo', 'Bagginsfrodo', 'Hobbit', 'The Shire', 3, 2), createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8), createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)];

 console.log(characters);

// Add a new character to characters (make up any attributes not provided):
// Arwen Undomiel is a Half-Elf of Rivendell

 characters.push(createCharacter('Arwen Undomiel', 'Evenstar', 'Half-Elf', 'Rivendell', 8, 5));

 console.log(characters);

 // Using the .find() function, retrieve your character nicknamed aragorn from characters and then call his describe method.

const findAragorn = (characters.find(character => character.nickName === 'aragorn'));
findAragorn.describe();

 // Using the .filter() function, create a new array from characters that ONLY contains characters of the race Hobbit.

const hobbits = characters.filter(character => character.race === 'Hobbit');
 console.log(hobbits);


 // ===============================================================================================
// | Name                      | Nickname    | Race       | Origin         | Attack   | Defense  |
// -----------------------------------------------------------------------------------------------
// | Gandalf the White         | gandalf     | Wizard     | Middle Earth   | 10       | 6        |
// -----------------------------------------------------------------------------------------------
// | Bilbo Baggins             | bilbo       | Hobbit     | The Shire      | 2        | 1        |
// -----------------------------------------------------------------------------------------------
// | Frodo Baggins             | frodo       | Hobbit     | The Shire      | 3        | 2        |
// -----------------------------------------------------------------------------------------------
// | Aragorn son of Arathorn   | aragorn     | Man        | Dunnedain      | 6        | 8        |
// -----------------------------------------------------------------------------------------------
// | Legolas                   | legolas     | Elf        | Woodland Realm | 8        | 5        |
// -----------------------------------------------------------------------------------------------

// Using the .find() function, retrieve your character nicknamed aragorn from characters and then call his describe method.

// Using the .filter() function, create a new array from characters that ONLY contains characters of the race Hobbit.

// Using the .filter() function, create a new array from characters that ONLY contains characters with attack value above 5.

// What if you wanted to equip a weapon for each character and change how they are described? For example:

// Gandolf the White is a Wizard of the Middle Earth who uses a wizard staff
// Bilbo Baggings is a Hobbit of the Shire who uses the Ring
// Frodo ... String and Barrow Blade
// Aragon .... Anduril
// Legolas ... Bow and Arrow
// Arwen .... Hadhafang
// How would you change the factory function and other methods?