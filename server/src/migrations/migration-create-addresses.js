'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('addresses', {
            address_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            full_name: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            phone: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            address_line: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            city: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            state: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            country: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            postal_code: {
                type: Sequelize.STRING(20),
            },
            is_default: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
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
        await queryInterface.dropTable('addresses');
    },
};