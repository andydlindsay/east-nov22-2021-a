console.log('hello from the script file');

console.log(name);

$(document).ready(() => {



// `${}`
// <%= %>

// element selection (finding things in the DOM)
// jQuery()
document.getElementById('main-list');
$('#main-list > li')

// create things for the DOM
$('<h1>'); // creates an h1
$('h1'); // finds an h1

// create an li, give it the text 'water', append it to the DOM
// const myLi = $('<li>');
// myLi.text('water'); // <li>water</li>
// $('#main-list').append(myLi);

// parent.append(child)
// child.appendTo(parent)

// const myLi = $('<li>water</li>');

$('<li>water</li>').appendTo('#main-list');

// var node = document.createElement("LI");                 // Create a <li> node
// var textnode = document.createTextNode("Water");         // Create a text node
// node.appendChild(textnode);                              // Append the text to <li>
// document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"

// document.addEventListener('click', () => {});

$('h1').on('click', (something) => {
  console.log(something);
});

// conn.on('data', (data) => { console.log(data) });


// find the button in the DOM
const myButton = $('#my-button');

// add an event listener to the button (click)
myButton.on('click', () => {
  console.log('this works?');

  // grab the input field
  const myInput = $('#my-input');

  // get the value the user typed in
  const newText = myInput.val();

  // create a new li with the text from the user
  const myNewLi = $('<li>').text(newText);

  // add to the DOM
  $('#main-list').append(myNewLi);

  // clear the input field
  myInput.val('');

  // give the input field focus
  myInput.focus();
});

});
