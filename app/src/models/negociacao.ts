import { Imprimivel } from "../utils/imprimivel.js";

export class Negociacao extends Imprimivel{

    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;

    // constructor(data: Date, quantidade: number , valor: number){
    //     this._data = data;
    //     this._quantidade = quantidade;
    //     this._valor = valor;
    // }

    public constructor(private _data: Date, private _quantidade: number, private _valor: number) { 
        super();
    }

    public get data(): Date {
        const data = new Date(this._data.getTime())
        return data;
    }

    public get quantidade(): number {
        return this._quantidade;
    }

    public get valor(): number {
        return this._valor;
    }

    public get volume(): number {
        return this._valor * this._quantidade;
    }

    public paraTexto(): string {
        return ` Data: ${this.data}, Quantidade: ${this.quantidade}, Valor: ${this.valor}`
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);

        return new Negociacao(date, quantidade, valor);
    }
}