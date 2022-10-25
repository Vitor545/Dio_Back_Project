import { DataTypes, Model } from 'sequelize';
import db from '.';

class ProductModel extends Model {
  declare id: number;
  declare title: string;
  declare title_anuncio: string;
  declare preco: number;
  declare descricao: string;
  declare img: string;
  declare user_id: number;
}

ProductModel.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    title_anuncio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tag: {
      type: DataTypes.STRING,
    },
    preco: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING(5000),
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    modelName: 'ProductModel',
    sequelize: db,
    tableName: 'products',
  },
);

export default ProductModel;
