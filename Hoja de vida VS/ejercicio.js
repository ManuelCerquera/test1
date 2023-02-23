function operacion() {
  if (document.getElementById("v1").value < 0) {
    alert("Solo números positivos");
  } else {
    var v1 = document.getElementById("v1").value;
    var v2 = document.getElementById("v2").value;
    var r1 = document.getElementById("r1").value;
    var r2 = document.getElementById("r2").value;
    var beta = document.getElementById("beta").value;
  }
  var vbe = 0.7;
  var vcesat = 0.2;
  var ib = (v1 - vbe) / r1;
  var ic = beta * ib;
  var vce = v2 - ic * r2;

  var icsat = (v2 - vcesat) / r2;

  if (vce > vcesat) {
    var respuesta = document.getElementById("alternativo");
    respuesta.textContent = "Activa";
    var respuesta2 = document.getElementById("ib");
    respuesta2.textContent = "Ib=" + ib + "A";
    var respuesta3 = document.getElementById("ic");
    respuesta3.textContent = "Ic=" + ic + "A";
    var respuesta4 = document.getElementById("vce");
    respuesta4.textContent = "Vce=" + vce + "V";
  }
  if (icsat < beta * ib) {
    var respuesta = document.getElementById("alternativo");
    respuesta.textContent = "Saturación";
    var respuesta2 = document.getElementById("ib");
    respuesta2.textContent = "Ib=" + ib + "A";
    var respuesta3 = document.getElementById("ic");
    respuesta3.textContent = "Ic=" + icsat + "A";
    var respuesta4 = document.getElementById("vce");
    respuesta4.textContent = "Vce=" + vcesat + "V";
  }
}
