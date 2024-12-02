const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const bookSchema = new mongoose.Schema({
    price: { type: Number, required: true },
    title: {
        type: String, required: true
    },
    category: {
        type: String, required: true
    },
    page: { type: Number, required: true },
    description: {
        type: String,
        required: true
    },
    covers: [{ type: mongoose.Types.ObjectId, ref: 'Files' }],
    userid: { type: mongoose.Types.ObjectId, ref: 'Users' },
    storeid: { type: mongoose.Types.ObjectId, ref: 'Courses' },
    createdDate: { type: Date, required: true, default: new Date() }
    
})
bookSchema.plugin(mongoosePaginate)

bookSchema.index(
    {
        price: 'number',
        description: 'text',
        category: 'text',
        title: 'text'
    }
)

const BookModel = mongoose.model('Items', bookSchema)

module.exports = BookModel