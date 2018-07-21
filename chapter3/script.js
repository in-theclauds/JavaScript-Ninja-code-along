// Assign a new object to a variable
var ninja = {};

// Adding new object to an array
ninjaArray.push ({});

// Assigns a new object as a property of another obj.
ninja.data = {};

// Can be passed as arguments to functions -- newly created obj. passed as an argument to a function
function hide(ninja) {
  ninja.visibility = false;
}

hide({});

// Can be returned as values from functions -- retuns a new onj from a function
function returnNewNinja() {
  return {};
}

// & can possess properties that are dynamically created and assigned -- creates a new property on an object

var ninja= {};
ninja.name = "Clauds";





// FUNCTIONS AS FIRST CLASS OBJECTS 


// We say funtions are first class objects, which can also be:

// Assigned to variables, aray entries, and properties of other objects

var ninjaFunction = function()  {};   -- // assigns a new function to a variable \\
ninjaArray.push(function(){}); // Adds a new function to an array\\
ninja.data = function() {}; //assigns a new function as a property of another object





