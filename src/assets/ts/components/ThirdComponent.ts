import { Component } from "../app/Component";

export class ThirdComponent extends Component {
  constructor(parentElem: Component, props: any) {
    super(parentElem, props);
  }
  render() {
    return `
            <main style='color: red;'>
                <strong>Title</strong>
                <p>Hello world</p>
                <small class='foo'>${this.props.text}</small>
            </main>
        `;
  }
}
