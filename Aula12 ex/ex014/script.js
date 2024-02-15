function carregar() {
  let msg = document.querySelector("#msg");
  let img = document.querySelector("#imagem");
  let data = new Date();
  let hora = data.getHours();

  msg.innerHTML = `Agora são ${hora} horas.`;

  if (hora >= 0 && hora < 12) {
    img.src = "./fotos/manha.png";
    document.body.style.background = "#e2cd9f";
  } else if (hora >= 12 && hora <= 18) {
    img.src = "./fotos/tarde.png";
    document.body.style.background = "#b9846f";
  } else {
    img.src = "./fotos/noite.png";
    document.body.style.background = "#0f2961";
  }
}
