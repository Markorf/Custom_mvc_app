import { cloneDeep } from "lodash";

const INITIAL_STATE = {
  username: "Marko",
  age: 25,
  isMale: true,
  favColors: ["orange", "blue", "green"]
};

const _currentState = cloneDeep(INITIAL_STATE);

const getState = (action?: { type: string; payload?: any }) => {
  if (!action) {
    return cloneDeep(_currentState);
  }
  switch (action.type) {
    case "GET_USERNAME":
      return _currentState.username;
    case "GET_FAV_COLORS":
      return _currentState.favColors;
    case "GET_FAV_COLOR":
      return _currentState.favColors[action.payload];
    default:
      throw new Error("Action type " + action.type + " not registered");
  }
};

const setState = (action: { type: string; payload?: any }) => {
  switch (action.type) {
    case "SET_USERNAME":
      _currentState.username = action.payload;
      break;
    case "ADD_FAV_COLOR":
      _currentState.favColors.push(action.payload);
      break;
    default:
      throw new Error("Action type " + action.type + " not registered");
  }
};

export { getState, setState };
