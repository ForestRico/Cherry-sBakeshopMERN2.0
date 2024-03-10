import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    quantity: String,
});


export default productSchema;