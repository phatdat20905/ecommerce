'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('otp_tokens', {
            token_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            otp: {
                type: Sequelize.STRING(6), // Lưu mã OTP 6 chữ số
                allowNull: false,
            },
            expires_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('otp_tokens');
    },
};