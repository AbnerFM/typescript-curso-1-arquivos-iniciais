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
