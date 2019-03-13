// our array
var helloList = ["Hello", "Namaste", "Hola", "Bonjour", "Hej", "Ahoy", "Xin Chao", "Jambo", "Zdravstvuyte", "Ni Hao"];

// declare and initialize our counter
let counter = 0;

// function that swaps our text
function rotate() {
  // display the text in the index currently calle dby the counter
  document.getElementById("helloText").innerHTML = helloList[counter];

  // if the counter is greater than the number of things in the array, reset to 0, otherwise, add 1
  if (counter >= helloList.length - 1) {
    counter = 0;
  } counter = counter + 1;
}

function addToList() {
  let t = document.getElementById("toAdd").value;
  helloList.push(t);
}

function removeFromList() {
  var removedText = helloList[helloList.length = 1];
  document.getElementById("removed").innerHTML = "<em>" + removedText + "was removed.</em>"
  helloLIst.splice(helloList.length - 1, 1);
}
