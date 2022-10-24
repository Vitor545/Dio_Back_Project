import { NextFunction, Request, Response } from 'express';
import ErrorHandler from '../utils/ErrorHandler';
import UserServices from '../services/UserServices';

export default class UserController {
  private _userServices = new UserServices();

  public async getInfoUser(
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
      const user = await this._userServices.getInfoUser(Number(id), token);

      return res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }

  public async createUser(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<any> {
    try {
      const { name, email, password, cpf, telefone } = req.body;
      if (!email || !password || !name || !cpf || !telefone) {
        throw new ErrorHandler('Preencha todos os campos', 400);
      }
      const user = await this._userServices.create(
        name,
        email,
        password,
        cpf,
        telefone,
      );

      return res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }
}
