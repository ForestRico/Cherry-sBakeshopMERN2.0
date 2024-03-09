import mongoose from 'mongoose';

const formSchema = new mongoose.Schema({
    userID: String,
    email: String,
    occasion: String,
    first_name: String,
    last_name: String,
    message: String,
    pickup_date: String,
    pickup_time: String,
    phone_number: String,
});

const Forms = mongoose.model('Forms', formSchema);

export default Forms;