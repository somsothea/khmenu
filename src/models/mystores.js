const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const StoreSchema = new mongoose.Schema({
    storename: { type: String, required: true },
    storeaddress: { type: String, required: true },
    storelogo: { type: String, required: true },
    storebanner: { type: String, required: true },
    storeurl: { type: String, required: true, unique: true},
    storedescription: { type: String, required: true},
    storecontact:  { type: String, required: true},
    storetelegram: { type: String, required: false},
    category: { type: String, required: true },
    userid: { type: mongoose.Types.ObjectId, ref: 'Users' },
    createdDate: { type: Date, required: true, default: new Date() },
})

StoreSchema.plugin(mongoosePaginate)

const StoreModel = mongoose.model('Stores', StoreSchema)

module.exports = StoreModel