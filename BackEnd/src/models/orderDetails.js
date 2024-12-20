'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class OrderDetail extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            OrderDetail.belongsTo(models.Order, {
                foreignKey: 'orderId',
                as: 'order'
            });

            OrderDetail.belongsTo(models.Product, {
                foreignKey: 'productId',
                as: 'product'
            });
        }
    }
    OrderDetail.init({
        orderId: DataTypes.INTEGER,
        productId: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
        price: DataTypes.DECIMAL,
    }, {
        sequelize,
        modelName: 'OrderDetail',
    });
    return OrderDetail;
};