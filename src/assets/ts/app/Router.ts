import {
  getConvertedParam,
  getParam,
  getConvertedRoute
} from "../shared/helpers";

interface IRoute {
  path: string;
  action: (arg?: any) => any;
}

export class Router {
  private static _routes: IRoute[] = [];

  public static register(path: string, action: (arg?: any) => any) {
    const currentHash = getConvertedRoute(path);
    const foundRoute = this._routes.find(route => route.path === currentHash);
    if (foundRoute) {
      throw new Error("Path " + currentHash + " alreadsy exists!");
    }
    this._routes.push({ path: currentHash, action });
  }

  private static _runAction() {
    const hash = location.hash.substr(1, location.hash.length);
    const currentParam = getParam(hash);
    const currentHash = getConvertedParam(hash);

    const selectedRoute = this._routes.find(
      route => route.path === currentHash
    );
    if (!selectedRoute) {
      throw new Error("Route " + hash + " not found");
    }
    selectedRoute.action(currentParam);
  }

  public static init() {
    setTimeout(() => {
      this._runAction();
    }, 0);
    window.onhashchange = () => {
      this._runAction();
    };
  }
}

Router.init();
