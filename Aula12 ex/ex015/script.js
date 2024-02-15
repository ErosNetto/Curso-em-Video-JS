function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  let fano = Number(document.querySelector("#txtano").value);
  let res = document.querySelector("#res");

  if (fano == 0 || fano > ano) {
    alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    let fsex = document.getElementsByName("radsex");
    let idade = ano - fano;
    let genero = "";

    let img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      genero = "homem";
      if (idade < 10) {
        img.setAttribute("src", "./foto/foto_crianca_homem.png");
      } else if (idade < 21) {
        img.setAttribute("src", "./foto/foto_jovem_homem.png");
      } else if (idade < 50) {
        img.setAttribute("src", "./foto/foto_adulto_homem.png");
      } else {
        img.setAttribute("src", "./foto/foto_idoso_homem.png");
      }
    } else {
      genero = "mulher";
      if (idade < 10) {
        img.setAttribute("src", "./foto/foto_crianca_mulher.png");
      } else if (idade < 21) {
        img.setAttribute("src", "./foto/foto_jovem_mulher.png");
      } else if (idade < 50) {
        img.setAttribute("src", "./foto/foto_adulto_mulher.png");
      } else {
        img.setAttribute("src", "./foto/foto_idoso_mulher.png");
      }
    }

    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
