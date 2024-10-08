import { escapar } from "../decorators/escapar.js";
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {

    @escapar
    protected template(model: Negociacoes): string {
        return `
            <table class = "table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>

                <tbody>
                    ${model.lista().map(negociacao => {
                        return `
                            <tr>
                                <th>${this.formartar(negociacao.data)}</th>
                                <th>${negociacao.quantidade}</th>
                                <th>${negociacao.valor}</th>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        `;
    } 

    private formartar (data:Date): string {
        return new Intl.DateTimeFormat().format(data); 
    }
}