// armazenar os elementos DOM
let inputNota1;
let inputNota2;
let inputNota3;
let btnEnviarNotas;
// armazenar notas do aluno
// como valores numéricos
let nota1;
let nota2;
let nota3;
let media;

function calcMedia()
{
    console.log("...")
    nota1 = Number(inputNota1.value);
    nota2 = Number(inputNota2.value);
    nota3 = Number(inputNota3.value);
    media = (nota1+nota2+nota3)/3;
    console.log(`A sua média é ${media}`);
}

function main()
{
    console.log("Main");
    inputNota1 = document.getElementById("input-nota-1");
    inputNota2 = document.getElementById("input-nota-2");
    inputNota3 = document.getElementById("input-nota-3");
    btnEnviarNotas = document.getElementById("btn-enviar-notas");
    btnEnviarNotas.addEventListener("click", calcMedia);
}

document.addEventListener("DOMContentLoaded", main);
