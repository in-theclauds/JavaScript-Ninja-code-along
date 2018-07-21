// // Assign a new object to a variable
// var ninja = {};

// // Adding new object to an array
// ninjaArray.push ({});

// // Assigns a new object as a property of another obj.
// ninja.data = {};

// // Can be passed as arguments to functions -- newly created obj. passed as an argument to a function
// function hide(ninja) {
//   ninja.visibility = false;
// }

// hide({});

// // Can be returned as values from functions -- retuns a new onj from a function
// function returnNewNinja() {
//   return {};
// }

// // & can possess properties that are dynamically created and assigned -- creates a new property on an object

// var ninja= {};
// ninja.name = "Clauds";





// // FUNCTIONS AS FIRST CLASS OBJECTS 


// // We say funtions are first class objects, which can also be:

// // Assigned to variables, aray entries, and properties of other objects

// var ninjaFunction = function()  {};   -- // assigns a new function to a variable \\
// ninjaArray.push(function(){}); // Adds a new function to an array\\
// ninja.data = function() {}; //assigns a new function as a property of another object



// // Passed as arguments to other functions
// function call(ninjaFunction){
//   ninjaFunction();
// }
// call (function() {}); //a newly created function passed as an argument to a function


// // returned as values from functions 

// function returnNewNinjaFunction() {
//   return function() {} //returns new function
// }


// // They can also possess properties that are dynamically created and assigned
// var ninjaFunction = function() {};
// ninjaFunction.name = "clauds"


// CHAPTER THREE CONTINUED

// Simple callback ex.

// var text = "Domo arogato!";
// report("Before defining functions");

// function useless(ninjaCallback) {
//   report("In Useless function");
//   return ninjaCallback();   // defies a function tht takes a callback function and immediately invokes it
// }

// function getText() {
//   report (" in getText function"); // defies a simple function that returns a global variable
//   return text;
// }

// assert (useless(getText) === text,
// "the useless function works! " + text);  // calls our useless function with the getText funct. as a callback

// report("After the calls have been made");


// FUNCTION AS OBJECTS

var ninja = {};
ninja.name= "hitsuke"; //Creates an object and assigns a new porperty to it

var wieldSword = function() {}; // creates a function and assigns a new property to it
wieldSword.swordType = "katana";





// STORING A COLLECTION OF UNIQUE FUNCTIONS

var store = {
  nextId: 1, // Keeps track of the next avail ID to be assigned
  cache: {}, // creates an object to serve as a chache (where we'll store functions)
  add: function(fn) {
    if (!fn.id) {
      fn.id = this.nextId++;
      this.cache[fn.id] = fn;
      return true;
    }
  }
};