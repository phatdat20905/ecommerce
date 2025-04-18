import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import connectDB from './config/connectDB.js';
dotenv.config();

connectDB();
const app = express();

// Middleware
app.use(helmet()); // Thêm header bảo mật
app.use(cors());
app.use(morgan('dev')); // Ghi log yêu cầu HTTP
app.use(express.json()); // Parse JSON body
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded body

// Route cơ bản
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to E-commerce Backend' });
});

// Routes
// app.use('/api', apiRoutes);

// Khởi động server
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});