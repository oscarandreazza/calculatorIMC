const calcular = document.getElementById("calcular");

// Calculo: Peso divido pela altura ao quadrado.
function imc() {
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");

  if (nome !== "" && altura !== "" && peso !== "") {
    const valorIMC = (peso / (altura * altura)).toFixed(2);

    let classificacao = "";
    if (valorIMC < 18.5) {
      classificacao = "abaixo do peso.";
    } else if (valorIMC < 24.9) {
      classificacao = "com o peso normal ou na média. Parabens!!!";
    } else if (valorIMC < 29.9) {
      classificacao = "com sobrepeso.";
    } else if (valorIMC < 34.9) {
      classificacao = "com obesidade grau I.";
    } else if (valorIMC < 39.9) {
      classificacao = "com obesidade grau II.";
    } else {
      classificacao = "com obesidade mórbida de grau III.";
    }

    resultado.textContent = `${nome} seu IMC é ${valorIMC}. Você está ${classificacao}`;
  } else {
    resultado.textContent = "Por favor, preencha todos os campos!";
  }
}

calcular.addEventListener("click", imc);
