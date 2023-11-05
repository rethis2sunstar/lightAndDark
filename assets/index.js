var toggleBtn = document.getElementById("switch");
var bodyVar = document.body;
var mode = "light";

toggleBtn.addEventListener("click", function () {
  console.log("Button clicked"); // Add this line to check if the event handler is working

  if (mode == "light") {
    mode = "dark";
    bodyVar.setAttribute("class", "dark");
  } else {
    mode = "light";
    bodyVar.setAttribute("class", "light");
  }
});
