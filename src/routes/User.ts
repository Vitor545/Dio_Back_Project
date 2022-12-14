import * as express from 'express';
import UserController from '../controllers/UserController';

export default class UserRoute {
  private _route: express.Router;
  private _userController: UserController;

  constructor() {
    this._route = express.Router();
    this._userController = new UserController();
    this.init();
  }

  get route(): express.Router {
    return this._route;
  }

  private init() {
    const controller = this._userController;
    this._route.get('/:id', controller.getInfoUser.bind(controller));
    this._route.post('/', controller.createUser.bind(controller));
  }
}
