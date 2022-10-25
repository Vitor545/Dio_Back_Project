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

  async getInfoProductTag(tag: string) {
    let userModel: any;
    if (tag === 'todos os departamentos') {
      userModel = await this.productModel.findAll();
    } else {
      userModel = await this.productModel.findAll({ where: { tag } });
    }
    const obj: any = {
      brinquedos: 'https://i.ibb.co/pWfL3Lh/Group-153.png',
      televisões: 'https://i.ibb.co/SfYbNpf/Group-152.png',
      eletrodomésticos: 'https://i.ibb.co/HHhYdfX/Group-73.png',
      'celulares e smartphones': 'https://i.ibb.co/HPr8pxr/search-Recomd.png',
      'video games': 'https://i.ibb.co/tDx93yB/Group-70.png',
      'todos os departamentos': 'https://i.ibb.co/tmNHG4P/Group-152.png',
    };

    if (!userModel) throw new ErrorHandler('Produto não encontrado', 401);

    return { userModel, imgBg: obj[tag] };
  }

  async cadastrado(id: number) {
    const userModel = await this.productModel.findAll({
      where: { user_id: id },
    });

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
    user_id: number,
  ) {
    this.jwt.verify(token);
    const userModel: any = await this.productModel.create({
      title,
      title_anuncio,
      preco,
      img,
      descricao,
      user_id,
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
