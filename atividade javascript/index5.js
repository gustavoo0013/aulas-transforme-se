let idadeParaVoto = 16;

if (idadeParaVoto < 16) {
  console.log("Não pode votar");
} else if ((idadeParaVoto >= 16 && idadeParaVoto < 18) || idadeParaVoto > 70) {
  console.log("Voto opcional");
} else {
  console.log("Voto obrigatório");
}
