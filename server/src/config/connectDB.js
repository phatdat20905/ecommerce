import { Sequelize } from 'sequelize';
import 'dotenv/config';

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        logging: false,
    }
);

// Kiểm tra kết nối
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to MySQL with Sequelize');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

export default connectDB;