import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI);
        // await mongoose.connect('mongodb://localhost:5000/BakeshopDB');
        console.log("Database connected successfully");
    } catch (err) {
        console.error(`Database connection failed: ${err.message}`);
    }
};

export default connectDB;
