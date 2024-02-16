function contar() {
  let inicio = Number(document.querySelector("#txtIni").value);
  let fim = Number(document.querySelector("#txtFim").value);
  let passo = Number(document.querySelector("#txtPas").value);
  let res = document.querySelector("#res");

  if (inicio === "") {
    res.innerHTML = "Inpossivel contar!";
  }

  if (fim === "") {
    res.innerHTML = "Inpossivel contar FIM!";
  }

  if (passo === 0) {
    alert("Passo inválido! Considerando PASSO: 1");
    passo = 1;
  }

  for (let index = inicio; index < fim; index + passo) {
    res.innerHTML += index;
  }
}
