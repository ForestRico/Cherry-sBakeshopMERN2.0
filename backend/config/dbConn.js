import mongoose from 'mongoose';

const DATABASE_URI = 'mongodb+srv://bakeshopadmin:bakeshoppassword123@cluster0.qzdcnro.mongodb.net/BakeshopDB?retryWrites=true&w=majority&appName=Cluster0'

const connectDB = async () => {
    try {
        await mongoose.connect(DATABASE_URI);
        // await mongoose.connect('mongodb://localhost:5000/BakeshopDB');
        console.log("Database connected successfully");
    } catch (err) {
        console.error(`Database connection failed: ${err.message}`);
    }
};

export default connectDB;
