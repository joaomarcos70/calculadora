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

function igual() {
  visor.value = (visor.value.replace(/\s/g, "").match(/[+-]?([0-9.]+)/g) || []).reduce(function (
    sum,
    value
  ) {
    return parseFloat(sum) + parseFloat(value);
  });
}

function limpar() {
  visor.value = "";
}
