import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { imprimir } from "../utils/imprimir.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacao-view.js";

export class NegocicacaoController {

    @domInjector("#data")
    private inputData: HTMLInputElement;
    @domInjector("#quantidade")
    private inputQuantidade: HTMLInputElement;
    @domInjector("#valor")
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView("#negocicoesView");
    private mensagemView = new MensagemView('#mensagemView');
    private negociacoesService = new NegociacoesService();

    public constructor() {

        this.negociacoesView.update(this.negociacoes);

        // Criei um decorator que busca o elemento do campo do html, para não ficar fazendo essa linha de codigo toda hora que precisar de um novo elemento 
        /* this.inputData = document.querySelector("#data") as HTMLInputElement;
        this.inputQuantidade = document.querySelector("#quantidade") as HTMLInputElement;
        this.inputValor = <HTMLInputElement>document.querySelector("#valor") // pode ser escrito das duas formas;*/
    }

    @logarTempoDeExecucao()
    @inspect()
    public adiciona(): void {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update("So é permitido alocar negociações em dias uteis");
            return;
        }

        this.negociacoes.adiciona(negociacao);
        imprimir(negociacao, this.negociacoes);
        this.limparFormulario();
        this.atualizaView();
    }

    

    public importarDados(): void {

        this.negociacoesService.obterNegociacoesDoDia().then(negociacoesDeHoje => {
            for (let negociacao of negociacoesDeHoje) {
                this.negociacoes.adiciona(negociacao);
            }
            this.negociacoesView.update(this.negociacoes);
        })
    }

    private ehDiaUtil(data: Date): boolean {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação feita com sucesso');
    }
}