import * as bcrypt from 'bcryptjs';
import UsersModel from '../database/models/UserModel';
import { passwordStrength } from 'check-password-strength';
import ErrorHandler from '../utils/ErrorHandler';
import { IUser } from '../interfaces/user.interface';
import * as JWT from '../utils/JWT';
import * as EmailValidator from 'email-validator';

export default class UserServices {
  private usersModel = UsersModel;
  private jwt = JWT;

  async getInfoUser(id: number, token: string | undefined) {
    this.jwt.verify(token);
    const userModel: IUser | null = await this.usersModel.findOne({
      where: { id },
    });

    if (!userModel) throw new ErrorHandler('Usuario não encontrado', 401);

    return userModel;
  }

  async create(
    name: string,
    email: string,
    password: string,
    cpf: string,
    telefone: string,
  ) {
    if (!EmailValidator.validate(email)) {
      throw new ErrorHandler('Formato de email incorreto', 401);
    }
    if (passwordStrength(password).value === 'Weak') {
      throw new ErrorHandler('Coloque uma senha mais forte', 401);
    }

    const userVerify: IUser | null = await this.usersModel.findOne({
      where: { email },
    });

    if (userVerify) throw new ErrorHandler('Email já cadastrado', 401);
    password = bcrypt.hashSync(password, 10);

    const userModel: IUser | null = await this.usersModel.create({
      name,
      email,
      password,
      cpf,
      telefone,
    });

    if (!userModel) throw new ErrorHandler('Erro ao criar o usúario', 500);

    const user: IUser = {
      id: userModel.id,
      name: userModel.name,
      email: userModel.email,
      telefone: userModel.telefone,
    };

    const token = this.jwt.create(user);

    return { user, token };
  }
}
