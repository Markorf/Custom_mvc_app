import { Router } from "./app/Router";
import { UserController } from "./controllers/UserController";

const userController = new UserController("UserCtrl", 23);

Router.register("", () => {
  userController.index();
});

Router.register("random", () => {
  userController.random();
});

Router.register("favColor/{color}", userController.showFavColor);
