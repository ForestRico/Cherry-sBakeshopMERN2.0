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
//     roles: [{
//         type: String,
//         default: "Employee"
//     }],
//     active: {
//         type: Boolean,
//         default: true
//     },
// })

// module.exports = mongoose.model('User', userSchema)

const userSchema = new Schema({
    username: String,
    password: String,
    roles: [{
        type: String,
        default: "Employee"
    }],
    active: {
        type: Boolean,
        default: true
    },
});

export { userSchema };
