const mongoose = require('mongoose')
const ObjectID = mongoose.Schema.Types.ObjectId

const cartSchema = new mongoose.Schema(
    {
        owner: {
            type: ObjectID,
            required: true,
            ref: 'User'
        },
        items: [{
            itemId: {
                type: ObjectID,
                required: true,
                ref: 'Item'
            },
            name:String,
            quantity: {
                type: Number,
                required: true,
                min: 1,
                default: 1
            },
            price:Number,
            weight: {
                type: Number,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }],
        bill:{
            type:Number,
            default:0
        }
    },
    {
        timestamps: true
    })

const Cart = mongoose.model('Cart', cartSchema)
module.exports = Cart