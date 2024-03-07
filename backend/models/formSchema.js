// formSchema.js
import mongoose from 'mongoose';

const formSchema = new mongoose.Schema({
    id: String,
    email: String,
    first_name: String,
    last_name: String,
    pickUp_date: String,
    pickUp_time: String,
    phone_number: String,
});

const Form = mongoose.model('Form', formSchema);

export default Form;
