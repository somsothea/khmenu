const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const courseSchema = new mongoose.Schema({
    storename: { type: String, required: true },
    storeaddress: { type: String, required: true },
    storelogo: { type: String, required: true },
    storebanner: { type: String, required: true },
    storeurl: { type: String, required: true },
    category: { type: String, required: true },
    user: { type: mongoose.Types.ObjectId, ref: 'Users' },
    createdDate: { type: Date, required: true, default: new Date() },
})

courseSchema.plugin(mongoosePaginate)

const CourseModel = mongoose.model('Stores', courseSchema)

module.exports = CourseModel