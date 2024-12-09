const jogador = document
.querySelector(".jogador");

const projetil = document
.querySelector(".projetil");


function jogadorPular()
{
    jogador.classList.add("jogador-pulo");
    setTimeout(()=>{
        jogador.classList.remove("jogador-pulo");
    },500);
}

const loop = setInterval(()=>{
    const projetilPos = projetil.offsetLeft;
    
    const jogadorPos = +window
    .getComputedStyle(jogador)
    .bottom
    .replace("px","");

    if(projetilPos <= 170 &&
        projetilPos > 0 &&
        jogadorPos<100){
        projetil.style.display = "none";
        projetil.style.animation = "none";
        projetil.style.animation = `${projetilPos}px`;
        jogador.style.animation = "none"
        jogador.style.bottom = `${jogadorPos}px`;
        jogador.src="./images/jogador-derrotado.png";
    }
}, 300);

document.addEventListener("keydown", jogadorPular);
