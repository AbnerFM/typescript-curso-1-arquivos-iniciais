import { Imprimivel } from "../utils/imprimivel.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes extends Imprimivel {

    private negociacoes: Array<Negociacao> = []; // Array<Negociacao> == Negociacao[]

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista(): ReadonlyArray<Negociacao> { // ReadonlyArray<Negociacao> == readonly Negociacao[]
        return this.negociacoes;
    }

    public paraTexto(): string {
        return JSON.stringify(this.negociacoes, null, 2);
    }
}