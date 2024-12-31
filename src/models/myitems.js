const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const ItemSchema = new mongoose.Schema({
    price: { type: Number, required: true },
    title: {
        type: String, required: true
    },
    category: {
        type: String, required: true
    },
    description: {
        type: String,
        required: true
    },
    filename: { type: String },
    userid: { type: mongoose.Types.ObjectId, ref: 'Users' },
    storeid: { type: mongoose.Types.ObjectId, ref: 'Stores' },
    createdDate: { type: Date, required: true, default: new Date() }
    
})
ItemSchema.plugin(mongoosePaginate)

ItemSchema.index(
    {
        price: 'number',
        description: 'text',
        category: 'text',
        title: 'text'
    }
)

const ItemModel = mongoose.model('Items', ItemSchema)

module.exports = ItemModel