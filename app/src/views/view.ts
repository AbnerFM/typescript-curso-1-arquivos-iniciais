import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View <T> {

    protected elemento: HTMLElement;

    public constructor(seletor: string) {
        const elemento = document.querySelector(seletor);

        if (elemento){
            this.elemento = elemento as HTMLInputElement;
        } else {
            throw Error (`Seletor ${seletor} não existe`)
        }
    }

    protected abstract template(model: T): string; 


    update(model: T): void {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }
}