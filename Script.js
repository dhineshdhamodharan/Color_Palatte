function myFunction() {
  var x = document.getElementById("myNumber").value;
  document.getElementById("demo").innerHTML = x;
}
function setup() {
  var x = document.getElementById("myNumber").value;
  console.log(x);
  var container = document.getElementById("container");

  for (var i = 0; i < x; i++) {
    var box = document.createElement("div");
    container.appendChild(box);
    var colors = random_bg_color(i);
    box.style.backgroundColor = colors;
  }
}

function random_bg_color(i) {
  var a = i * 8;
  console.log(a);
  var bgColor = "rgb(" + a + "," + 0 + "," + 0 + ")";
  return bgColor;
}
