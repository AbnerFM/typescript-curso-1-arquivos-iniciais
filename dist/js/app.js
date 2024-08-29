import { NegocicacaoController } from "./controllers/negocicao-controller.js";
const controller = new NegocicacaoController;
const form = document.querySelector(".form");
if (form) {
    form.addEventListener("submit", event => {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error("Não foi possivel realizar a operação");
}
const botaoImporta = document.querySelector('#botao-importa');
if (botaoImporta) {
    botaoImporta.addEventListener('click', () => {
        controller.importarDados();
    });
}
else {
    throw Error("Botão importa não foi encontrado");
}
