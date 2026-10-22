let idade = 25;

if (idade < 0) {
  console.log("Idade inválida");
} else if (idade < 12) {
  console.log("Criança");
} else if (idade <= 17) {
  console.log("Adolescente");
} else if (idade <= 59) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}
