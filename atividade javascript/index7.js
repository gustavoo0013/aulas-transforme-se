let numero1 = 10;
let numero2 = 5;
let operador = "*";

switch (operador) {
  case "+":
    console.log("Resultado: " + (numero1 + numero2));
    break;

  case "-":
    console.log("Resultado: " + (numero1 - numero2));
    break;

  case "*":
    console.log("Resultado: " + numero1 * numero2);
    break;

  case "/":
    if (numero2 !== 0) {
      console.log("Resultado: " + numero1 / numero2);
    } else {
      console.log("Erro! Não é possível dividir por zero.");
    }
    break;

  default:
    console.log("Operador inválido");
}
