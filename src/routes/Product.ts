import * as express from 'express';
import ProductController from '../controllers/ProductController';

export default class UserRoute {
  private _route: express.Router;
  private _productController: ProductController;

  constructor() {
    this._route = express.Router();
    this._productController = new ProductController();
    this.init();
  }

  get route(): express.Router {
    return this._route;
  }

  private init() {
    const controller = this._productController;
    this._route.get('/:id', controller.getInfoProduct.bind(controller));
    this._route.get('/tag/:tag', controller.getInfoProductTag.bind(controller));
    this._route.get('/', controller.getAllProduct.bind(controller));
    this._route.post('/', controller.createProduct.bind(controller));
    this._route.put('/:id', controller.updateProduct.bind(controller));
    this._route.delete('/:id', controller.deleteProduct.bind(controller));
    this._route.get('/cadastrado/:id', controller.cadastrado.bind(controller));
  }
}
