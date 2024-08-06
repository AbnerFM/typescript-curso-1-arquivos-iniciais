import { Negociacao } from "./negociacao.js";

export class Negociacoes {

    private negociacoes: Array<Negociacao> = []; // Array<Negociacao> == Negociacao[]

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista(): ReadonlyArray<Negociacao> { // ReadonlyArray<Negociacao> == readonly Negociacao[]
        return this.negociacoes;
    }
}