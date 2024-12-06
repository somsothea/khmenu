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

async function getStoreByUserId(req, res){
    const { userId } = req.query; // Extract userId from query parameters
    try {
      const store = await CourseModel.find({ userId }); // Filter stores by userId
      res.json(store);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch stores" });
    }
}
  
module.exports = {
    getStoreById,
    getStores,
    getStoreByUserId
  };
  