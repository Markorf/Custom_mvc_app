import { FirstComponent } from "../components/FirstComponent";
import { SecondComponent } from "../components/SecondComponent";
import { ThirdComponent } from "../components/ThirdComponent";
import { getState, setState } from "../store/state";

export class UserController {
  constructor(public controllerName: string, public randNum: number) {}

  public index() {
    const firstElem = new FirstComponent();

    new SecondComponent(firstElem, {});

    const thirdElem = new ThirdComponent(firstElem, {
      text: "Hey there " + this.randNum + " times!"
    });

    setTimeout(() => {
      setState({ type: "SET_USERNAME", payload: "MAX" });
      new ThirdComponent(firstElem, {
        text: getState({ type: "GET_USERNAME" })
      });
    }, 2000);
  }

  public random() {
    const el = new FirstComponent();
    const x = new ThirdComponent(el, { text: "Bar bax" });
    console.log(x);
  }
}
