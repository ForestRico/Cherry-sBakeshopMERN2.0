import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://bakeshopadmin:bakeshoppassword123@cluster0.qzdcnro.mongodb.net/BakeshopDB?retryWrites=true&w=majority&appName=Cluster0');
        // await mongoose.connect('mongodb://localhost:5000/BakeshopDB');
        console.log("Database connected successfully");
    } catch (err) {
        console.error(`Database connection failed: ${err.message}`);
    }
};

export default connectDB;
