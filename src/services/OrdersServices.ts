import OrderModel from '../database/models/OrdersModel';
import ErrorHandler from '../utils/ErrorHandler';
import * as JWT from '../utils/JWT';

export default class ProductService {
  private ordersModel = OrderModel;
  private jwt = JWT;

  async getOrders(id: number) {
    const userModel: any = await this.ordersModel.findAll({
      where: { user_id: id },
      attributes: ['pedidos'],
    });

    if (!userModel) throw new ErrorHandler('Produto não encontrado', 401);

    const final = userModel.map((p: any) => p.pedidos);

    return final;
  }

  async createOrders(
    user_id: number,
    pedidos: string,
    token: string | undefined,
  ) {
    this.jwt.verify(token);
    const userModel: any = await this.ordersModel.create({
      user_id,
      pedidos,
    });

    if (!userModel) throw new ErrorHandler('Erro ao criar', 500);

    return userModel;
  }
}
