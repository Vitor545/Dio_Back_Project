import ProductModel from '../database/models/ProductModel';
import ErrorHandler from '../utils/ErrorHandler';
import * as JWT from '../utils/JWT';

export default class ProductService {
  private productModel = ProductModel;
  private jwt = JWT;

  async getInfoProduct(id: number) {
    const userModel: any = await this.productModel.findByPk(id);

    if (!userModel) throw new ErrorHandler('Produto não encontrado', 401);

    return userModel;
  }

  async getAllProduct() {
    const userModel: any = await this.productModel.findAll();

    if (!userModel) throw new ErrorHandler('Produto não encontrado', 401);

    return userModel;
  }

  async deleteProduct(id: number, token: string | undefined) {
    this.jwt.verify(token);
    const userModel: any = await this.productModel.destroy({ where: { id } });

    if (!userModel) throw new ErrorHandler('Produto não encontrado', 401);

    return userModel;
  }

  async createProduct(
    title: string,
    title_anuncio: string,
    preco: number,
    img: string,
    descricao: string,
    token: string | undefined,
  ) {
    this.jwt.verify(token);
    const userModel: any = await this.productModel.create({
      title,
      title_anuncio,
      preco,
      img,
      descricao,
    });

    if (!userModel) throw new ErrorHandler('Erro ao criar', 500);

    return userModel;
  }

  async updateProduct(
    id: number,
    title: string,
    title_anuncio: string,
    preco: number,
    img: string,
    descricao: string,
    token: string | undefined,
  ) {
    this.jwt.verify(token);
    const userModel: any = await this.productModel.update(
      {
        title,
        title_anuncio,
        preco,
        img,
        descricao,
      },
      { where: { id: id } },
    );

    if (!userModel) throw new ErrorHandler('Erro ao atualizar', 500);

    return userModel;
  }
}
