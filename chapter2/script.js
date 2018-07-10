
//define an addMessage Function that, when invoked, creates a new <li> 
// element, sets its text content, and APPENDS to an existing element.

function addMessage(element, message){
  var messageElement = document.createElement("li");
  messageElement.textContent = message;
  element.appendChild(messageElement);
}

// we follow this by using getElementByID method to fetch the element with the #ID #first
// from the document and adding a messege to it that notifies us that the page is loading

var first = document.getElementById("first");
addMessage(first, "Page is now loading");

// Next, we attach mousemove event handler to body

document.body.addEventListener("mousemove", function(){
  var second = document.getElementById("second");
  addMessage(second, "Event: mousemove");
})