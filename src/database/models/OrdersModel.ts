import { DataTypes, Model } from 'sequelize';
import db from '.';

class OrdersModel extends Model {
  declare id: number;
  declare user_id: number;
  declare pedidos: string;
}

OrdersModel.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    pedidos: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    modelName: 'OrdersModel',
    sequelize: db,
    tableName: 'orders',
  },
);

export default OrdersModel;
