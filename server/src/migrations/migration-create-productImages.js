'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('product_images', {
            image_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            product_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            image_url: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            is_primary: {
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
        await queryInterface.dropTable('product_images');
    },
};