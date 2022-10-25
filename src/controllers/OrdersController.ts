import { NextFunction, Request, Response } from 'express';
import ErrorHandler from '../utils/ErrorHandler';
import OrdersServices from '../services/OrdersServices';

export default class OrdersController {
  private _ordersServices = new OrdersServices();

  public async getOrders(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<any> {
    try {
      const { id } = req.params;
      const token = req.headers.authorization;
      if (!id) {
        throw new ErrorHandler('Nenhum usuario foi pasando', 400);
      }
      const user = await this._ordersServices.getOrders(Number(id));

      return res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }

  public async createOrders(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<any> {
    try {
      const { user_id, pedidos } = req.body;
      const token = req.headers.authorization;
      if (!user_id || !pedidos) {
        throw new ErrorHandler('Nenhum usuario foi pasando', 400);
      }
      const user = await this._ordersServices.createOrders(
        Number(user_id),
        pedidos,
        token,
      );

      return res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }
}
