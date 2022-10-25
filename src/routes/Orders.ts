import * as express from 'express';
import OrdersController from '../controllers/OrdersController';

export default class UserRoute {
  private _route: express.Router;
  private _ordersController: OrdersController;

  constructor() {
    this._route = express.Router();
    this._ordersController = new OrdersController();
    this.init();
  }

  get route(): express.Router {
    return this._route;
  }

  private init() {
    const controller = this._ordersController;
    this._route.get('/:id', controller.getOrders.bind(controller));
    this._route.post('/', controller.createOrders.bind(controller));
  }
}
