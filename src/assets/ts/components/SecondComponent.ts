import { Component } from "../app/Component";
import { getState, setState } from "../store/state";

export class SecondComponent extends Component {
  constructor(parent: Component, props: any) {
    super(parent, props);
    //@ts-ignore
    window.setAndGetState = this.setAndGetState.bind(this);
  }
  setAndGetState() {
    setState({ type: "ADD_FAV_COLOR", payload: "orange" });
    setTimeout(() => {
      const state = getState();
      console.log(state);
    }, 1500);
  }

  render() {
    return `
            <div id="zxc">
                <button onclick='setAndGetState()'>Click to get state</button>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                </ul>
            </div>
        `;
  }
}
