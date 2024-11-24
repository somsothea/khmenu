const CourseModel = require('../models/course.js')

async function getStores(req, res){
    const stores = await CourseModel.find()
    return res.json(stores)
}

async function getStoreById(req, res){
    const {id} = req.params;
    const store = await CourseModel.findById(id);
    return res.json(store);
}

module.exports = {
    getStoreById,
    getStores,
  };
  