import $ from "jquery";

const appElement = document.querySelector("#app");

export abstract class Component {
  //@ts-ignore
  private _element: HTMLElement;

  constructor(public parent?: Component, public props?: any) {
    this._init();
  }

  public abstract render(): string;

  private _init() {
    this._element = $(this.render()).get(0);
    if (!this._element) {
      throw new Error("Invalid element");
    }
    if (!this.parent) {
      if (!appElement) {
        throw new Error("You must add div with id (#app)!");
      }
      appElement.innerHTML = "";
      appElement.appendChild(this._element);
      return;
    }
    this._repaint();
  }

  private _repaint() {
    const parentElement = this.parent?._element;
    if (!parentElement) {
      throw new Error("Something went wrong");
    }
    parentElement.innerHTML += this._element.outerHTML;
  }
}
