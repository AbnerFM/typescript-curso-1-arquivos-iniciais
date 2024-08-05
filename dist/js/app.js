import { NegocicacaoController } from "./controllers/negocicao-controller.js";
const controller = new NegocicacaoController;
const form = document.querySelector(".form");
form.addEventListener("submit", event => {
    event.preventDefault();
    controller.adiciona();
});
