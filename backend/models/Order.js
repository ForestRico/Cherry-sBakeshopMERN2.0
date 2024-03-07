import { model, Schema } from 'mongoose';
const AutoIncrement = require('mongoose-sequence')(mongoose)

const orderSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

orderSchema.plugin(AutoIncrement, {
    inc_field: 'ticket',
    id: 'ticketNums',
    start_seq: 500
})

export { orderSchema };

// module.exports = mongoose.model('Note, orderSchema')



