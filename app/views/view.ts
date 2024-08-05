export abstract class View <T> {

    protected elemento: HTMLElement;

    public constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    protected abstract template(model: T): string; 

    update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}