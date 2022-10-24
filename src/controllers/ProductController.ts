import { NextFunction, Request, Response } from 'express';
import ErrorHandler from '../utils/ErrorHandler';
import ProductService from '../services/ProductService';

export default class ProductController {
  private _productServices = new ProductService();

  public async getInfoProduct(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<any> {
    try {
      const { id } = req.params;
      const products = await this._productServices.getInfoProduct(Number(id));

      return res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  }

  public async getAllProduct(
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<any> {
    try {
      const products = await this._productServices.getAllProduct();

      return res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  }

  public async createProduct(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<any> {
    try {
      const token = req.headers.authorization;
      const { title, title_anuncio, preco, img, descricao } = req.body;
      if (!title || !title_anuncio || !preco || !img || !descricao) {
        throw new ErrorHandler('Preencha todos os campos', 400);
      }

      const products = await this._productServices.createProduct(
        title,
        title_anuncio,
        preco,
        img,
        descricao,
        token,
      );

      return res.status(201).json(products);
    } catch (err) {
      next(err);
    }
  }

  public async updateProduct(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<any> {
    try {
      const token = req.headers.authorization;
      const { id } = req.params;
      const { title, title_anuncio, preco, img, descricao } = req.body;
      if (!title || !title_anuncio || !preco || !img || !descricao) {
        throw new ErrorHandler('Preencha todos os campos', 400);
      }
      const products = await this._productServices.updateProduct(
        Number(id),
        title,
        title_anuncio,
        preco,
        img,
        descricao,
        token,
      );

      return res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  }

  public async deleteProduct(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<any> {
    try {
      const token = req.headers.authorization;
      const { id } = req.params;
      const products = await this._productServices.deleteProduct(
        Number(id),
        token,
      );

      return res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  }
}
