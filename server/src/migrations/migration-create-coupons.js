'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('coupons', {
            coupon_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            code: {
                type: Sequelize.STRING(50),
                allowNull: false,
                unique: true,
            },
            discount_type: {
                type: Sequelize.ENUM('percentage', 'fixed'),
                allowNull: false,
            },
            discount_value: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
            },
            min_order_value: {
                type: Sequelize.DECIMAL(10, 2),
            },
            max_discount: {
                type: Sequelize.DECIMAL(10, 2),
            },
            start_date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            end_date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            usage_limit: {
                type: Sequelize.INTEGER,
            },
            usage_count: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
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
        await queryInterface.dropTable('coupons');
    },
};