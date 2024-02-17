function contar() {
  let inicio = Number(document.querySelector("#txtIni").value);
  let fim = Number(document.querySelector("#txtFim").value);
  let passo = Number(document.querySelector("#txtPas").value);
  let res = document.querySelector("#res");

  if (inicio === "" || inicio === 0) {
    res.innerHTML = "Impossivel contar!";
    return;
  }

  if (fim === "" || fim === 0) {
    res.innerHTML = "Impossivel contar!";
    return;
  }

  if (passo === 0) {
    alert("Passo inválido! Considerando PASSO: 1");
    passo = 1;
  }

  if (inicio < fim) {
    res.innerHTML = "";
    for (let index = inicio; index <= fim; index += passo) {
      res.innerHTML += index;
      res.innerHTML += "&#x1F449;";
    }
    res.innerHTML += "&#x1F3C1;";
  } else {
    res.innerHTML = "";
    for (let index = inicio; index >= fim; index -= passo) {
      res.innerHTML += index;
      res.innerHTML += "&#x1F449;";
    }
    res.innerHTML += "&#x1F3C1;";
  }
}
