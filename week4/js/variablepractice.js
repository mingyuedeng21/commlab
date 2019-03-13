var newFontSize = 30 + "px";
console.log("fontsize:" + newFontSize);
document.getElementById('title').style.fontsize = newFontSize;

var xPos = 50;
var yPos = 100;
var myBox = document.getElementById('box')

function moveUp() {
  yPos = yPos - 10;
  myBox.style.top = yPos + "px";
  console.log(yPos);
}

function moveDown() {
  yPos = yPos - 20
  document.getElementById('title')
  console.log(yPos);
}

function moveLeft() {
  yPos = yPos + 10
  document.getElementById('subtitle')
  console.log(yPos);
}

function moveRight() {
  yPos = yPos + 20
  document.getElementById('subtitle')
  console.log(yPos);
}
