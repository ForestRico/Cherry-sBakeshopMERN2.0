import { model, Schema } from 'mongoose';

// OLD SYNTAX
// export const userSchema = new Schema({
//     username: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
// })

export const userSchema = new Schema({
    username: String,
    password: String,
});
