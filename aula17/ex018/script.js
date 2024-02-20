let numeros = [];

function adicionar() {
  let num = document.querySelector("#txtNum");
  let tab = document.querySelector("#seltab");
  let res = document.querySelector("#res");
  let n = Number(num.value);

  if (res.innerHTML != "") res.innerHTML = "";

  if (num.value.length === 0 || numeros.includes(n) || n > 100 || n < 1) {
    alert("Valor invalido ou ja encontrado na lista!");
  } else {
    numeros.push(n);

    let item = document.createElement("option");
    item.text = `Valor ${n} adicionado.`;
    tab.appendChild(item);
    num.value = "";
  }
}

function finalizar() {
  let res = document.querySelector("#res");

  if (numeros.length === 0) {
    alert("Adicione valores antes de finalizar!");
  } else {
    res.innerHTML = "";

    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
      soma += numeros[i];
    }

    res.innerHTML = `<p>Ao todo, temos ${numeros.length} números cadastrados.</p>`;
    res.innerHTML += `<p>O mair valor informado foi ${Math.max(
      ...numeros
    )}.</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${Math.min(
      ...numeros
    )}.</p>`;
    res.innerHTML += `<p>Somando todos os valor, temos ${soma}.</p>`;
    res.innerHTML += `<p>A média dos valores digitados é ${
      soma / numeros.length
    }.</p>`;
  }
}
