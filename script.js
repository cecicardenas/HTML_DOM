function handleRemove() {
  var parent = document.getElementById("div1");
  var child = document.getElementById("p2");
  parent.removeChild(child);
}

function handleCreate() {
  var parent = document.getElementById("div1");

  var child = document.createElement("p");
  var text = document.createTextNode("Smart TV - $900");
  child.appendChild(text);
  parent.appendChild(child);
}
