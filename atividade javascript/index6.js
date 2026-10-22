let ladoA = 5;
let ladoB = 5;
let ladoC = 8;

if (
  ladoA <= 0 ||
  ladoB <= 0 ||
  ladoC <= 0 ||
  ladoA + ladoB <= ladoC ||
  ladoA + ladoC <= ladoB ||
  ladoB + ladoC <= ladoA
) {
  console.log("Triângulo inválido");
} else if (ladoA === ladoB && ladoB === ladoC) {
  console.log("Triângulo Equilátero");
} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
  console.log("Triângulo Isósceles");
} else {
  console.log("Triângulo Escaleno");
}
