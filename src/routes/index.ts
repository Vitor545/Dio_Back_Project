import * as express from 'express';
import UserRoute from './User';
import LoginRoute from './LoginRoute';

export default class {
  private _router: express.Router;
  private _userRouter: UserRoute;
  private _loginRouter: LoginRoute;

  constructor() {
    this._router = express.Router();
    this._userRouter = new UserRoute();
    this._loginRouter = new LoginRoute();
    this.init();
  }

  get router(): express.Router {
    return this._router;
  }

  private init() {
    this._router.use('/user', this._userRouter.route);
    this._router.use('/login', this._loginRouter.route);
  }
}
