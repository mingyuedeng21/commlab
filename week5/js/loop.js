let links = ["http://google.com", "http://ima.nyu.edu.sh", "http://shanghai.nyu.edu", "http://nytimes.com", "http://bbc.com", "http://github.com", "http://apple.com", "http://washingtonpost.com", "http://buzzfeed.com", "http://twitter.com"];

for (i = 0; i < links.length; i++) {
  var a = document.createElement("A");
  a.href = links [i];
  document.body.appendChild(a);
  let b = document.createElement("BUTTON");
  let t = document.createTextNode("Click me for" + links[i]);
  b.appendChild(t);
  a.appendChild(b);
  let br = document.createElement("BR");
  document.body.appendChild(br);

}

var btn = document.getElementById("btn");
btn.addEventListener("Click", clicked);

function clicked() {
  console.log("button was clicked");
}
