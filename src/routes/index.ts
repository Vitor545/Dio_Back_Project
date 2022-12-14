import * as express from 'express';
import UserRoute from './User';
import LoginRoute from './LoginRoute';
import ProductRoute from './Product';
import OrdersRoute from './Orders';

export default class {
  private _router: express.Router;
  private _userRouter: UserRoute;
  private _loginRouter: LoginRoute;
  private _productRouter: ProductRoute;
  private _ordersRouter: OrdersRoute;

  constructor() {
    this._router = express.Router();
    this._userRouter = new UserRoute();
    this._loginRouter = new LoginRoute();
    this._productRouter = new ProductRoute();
    this._ordersRouter = new OrdersRoute();
    this.init();
  }

  get router(): express.Router {
    return this._router;
  }

  private init() {
    this._router.use('/user', this._userRouter.route);
    this._router.use('/login', this._loginRouter.route);
    this._router.use('/product', this._productRouter.route);
    this._router.use('/orders', this._ordersRouter.route);
  }
}
