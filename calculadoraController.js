var visor = document.getElementById("visor");

function number(numero) {
  visor.value = visor.value + numero;
}

function somar() {
  if (visor.value.charAt(visor.value.length - 1) === "-") {
    visor.value = visor.value.replace(/.$/, "+");
  }
  if (
    visor.value.charAt(visor.value.length - 1) != "+" &&
    visor.value.charAt(visor.value.length - 1) != ""
  ) {
    visor.value = visor.value + "+";
  }
}

function subtrair() {
  if (visor.value.charAt(visor.value.length - 1) === "+") {
    visor.value = visor.value.replace(/.$/, "-");
  }

  if (
    visor.value.charAt(visor.value.length - 1) != "-" &&
    visor.value.charAt(visor.value.length - 1) != ""
  ) {
    visor.value = visor.value + "-";
  }
}

function limpar() {
  visor.value = "";
}
