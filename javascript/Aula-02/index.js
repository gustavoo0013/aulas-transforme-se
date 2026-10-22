// -> - maior
// < - menor
// == - igualdade
// === - igualdade + tipo de variavel
// ! = diferente
// !== - dirença + tipo de variavel

let idade = Number(prompt("digite sua idade"));

document.write(idade);

if (idade > 18) {
  alert("voce é maior de idade!");
} else {
  alert("voce é menor de idade.");
}

let diadasemana = prompt("digite o dia da semana");

if (diadasemana.toLowerCase() == "segunda") {
  alert("hoje é dia de kahoot");
} else if (diadasemana.toLowerCase() == "terca") {
  alert("hoje veremos harry potter");
} else if (diadasemana.toLocaleLowerCase() == "quarta") {
  alert("veremos laços de repeticao");
} else {
  alert("algo deu errado!");
}
