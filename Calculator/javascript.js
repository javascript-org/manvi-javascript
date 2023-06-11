function clk(val) {
  document.getElementById("screen").value =
    document.getElementById("screen").value + val;
}

function clrdisp() {
  document.getElementById("screen").value = "";
}

function eql() {
  var text = document.getElementById("screen").value;
  var reasult = eval(text);
  document.getElementById("screen").value = reasult;
}
