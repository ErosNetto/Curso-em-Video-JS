let num = document.querySelector("#txtNum");
let lista = document.querySelector("#fLista");
let res = document.querySelector("#res");
let valores = [];

function isNumero(n) {
  return n >= 1 && n <= 100 ? true : false;
}

function adicionar() {
  let n = Number(num.value);

  if (isNumero(n) && !valores.includes(n)) {
    valores.push(n);
    let item = document.createElement("option");
    item.text = `Valor ${n} adicionado.`;
    lista.appendChild(item);
    res.innerHTML = "";
  } else {
    alert("Valor invalido ou já encontrado na lista!");
  }
  num.value = "";
  num.focus();
}

function finalizar() {
  if (valores.length !== 0) {
    let total = valores.length;
    let maior = Math.max(...valores);
    let menor = Math.min(...valores);
    let soma = 0;
    for (let pos in valores) {
      soma += valores[pos];
    }
    let media = soma / total;

    res.innerHTML = "";
    res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    res.innerHTML += `<p>Somando todos os valor, temos ${soma}.</p>`;
    res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;
  } else {
    alert("Adicione valores antes de finalizar!");
  }
}
