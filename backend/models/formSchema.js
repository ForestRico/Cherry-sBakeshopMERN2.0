import mongoose from 'mongoose';

const formSchema = new mongoose.Schema({
    email: String,
    occassion: String,
    first_name: String,
    last_name: String,
    message: String,
    pickup_date: String,
    pickup_time: String,
    phone_number: String,
});

const Form = mongoose.model('Form', formSchema);

export default Form;
