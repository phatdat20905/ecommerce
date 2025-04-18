'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('orders', {
            order_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            address_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            total: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
            },
            shipping_fee: {
                type: Sequelize.DECIMAL(10, 2),
                defaultValue: 0,
            },
            coupon_id: {
                type: Sequelize.INTEGER, // Thêm từ OrderCoupons
                allowNull: true,
            },
            discount_amount: {
                type: Sequelize.DECIMAL(10, 2), // Thêm từ OrderCoupons
                allowNull: true,
            },
            status: {
                type: Sequelize.ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled'),
                defaultValue: 'pending',
            },
            order_date: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            delivery_date: {
                type: Sequelize.DATE,
            },
            created_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            updated_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('orders');
    },
};