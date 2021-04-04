let calcular = document.getElementById("calcular");
/* peso / (altura * altura)) */

function imc() {
  let nome = document.getElementById("nome").value;
  let altura = document.getElementById("altura").value;
  let peso = document.getElementById("peso").value;
  let resultado = document.getElementById("resultado");

  if (nome !== "" && altura !== "" && peso !== "") {
    const valorIMC = (peso / (altura * altura)).toFixed(2);
    let classificacao = "";

    if ((valorIMC < 18, 5)) {
      classificacao = "Você está abaixo do peso.";
    }
    if ((valorIMC < 24, 9)) {
      classificacao = "Você está com o peso normal.";
    }
    if ((valorIMC < 29, 9)) {
      classificacao = "Você está acima do peso.";
    }
    if ((valorIMC < 34, 9)) {
      classificacao = "Você está com obesidade grau 1.";
    }
    if ((valorIMC < 39, 9)) {
      classificacao = "Você está com obesidade grau 2.";
    } else {
      classificacao = "Você está com obesidade morbida. Cuidado!";
    }

    resultado.textContent = ` ${nome} seu imc é: ${valorIMC}. ${classificacao}`;
  } else {
    resultado.textContent = "Preencha todos os campos";
  }
}

calcular.addEventListener("click", imc);
