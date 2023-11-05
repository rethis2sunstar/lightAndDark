var toggleBtn = document.getElementById("switch");
var bodyVar = document.body;
var mode = "light";

toggleBtn.addEventListener("click", function () {
  if (mode == "light") {
    mode = "dark";
    bodyVar.setAttribute("class", "dark");
  } else {
    mode = "light";
    bodyVar.setAttribute("class", "light");
  }
});
