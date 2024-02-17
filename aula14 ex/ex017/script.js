function tabuada() {
  let num = Number(document.querySelector("#txtNum").value);
  let res = document.querySelector("#res");

  if (num === "" || num === 0) {
    alert("Por favor digite um número!");
  }

  res.innerHTML = "";

  for (let index = 0; index <= 10; index++) {
    res.innerHTML += `${index} x ${num} = ${index * num} <br>`;
  }
}
