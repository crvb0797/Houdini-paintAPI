function cambiaValores() {
  var color = document.querySelector(".color").value;
  var lineWidth = document.querySelector(".lineWidth").value;
  var placeholders = document.getElementsByClassName("placeholder");
  for (placeholder of placeholders) {
    document.querySelector("#boton1").addEventListener("click", cambiaValores);
    placeholder.style.setProperty("--stroke-color", color);
    placeholder.style.setProperty("--line-width", parseInt(lineWidth));
  }
}

cambiaValores();
