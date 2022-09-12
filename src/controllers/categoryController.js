const service = require('../services/categoryService');

const categoryControllers = {

  addCategory: async (req, res) => {
    const { name } = req.body;
    console.log(name);
    const result = await service.addCategory({ name });
    return res.status(201).json({ id: result.insertId, name });
  },

  getAllCategory: async (_req, res) => {
    const result = await service.getAllCategory();
    return res.status(200).json(result);
  },
};

module.exports = categoryControllers;