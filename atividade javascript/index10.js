let salario = 4500;
let imposto = 0;

if (salario <= 2000) {
  imposto = 0;
  console.log("Isento de imposto");
} else if (salario <= 4000) {
  imposto = (salario - 2000) * 0.1;
  console.log("Imposto na faixa de 10%");
} else {
  imposto = 200 + (salario - 4000) * 0.2;
  console.log("Imposto na faixa de 20%");
}

console.log("Valor devido: R$ " + imposto.toFixed(2).replace(".", ","));
