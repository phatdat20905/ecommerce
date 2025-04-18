'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('payments', {
            payment_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            order_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            amount: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
            },
            method: {
                type: Sequelize.ENUM('cod', 'card', 'bank_transfer'),
                allowNull: false,
            },
            status: {
                type: Sequelize.ENUM('pending', 'completed', 'failed'),
                defaultValue: 'pending',
            },
            payment_date: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            transaction_id: {
                type: Sequelize.STRING(100),
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
        await queryInterface.dropTable('payments');
    },
};