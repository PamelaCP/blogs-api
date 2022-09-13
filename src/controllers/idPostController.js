const servicesId = require('../services/idServices');

const idPostPostController = async (req, res) => {
    const { id } = req.params;
    const result = await servicesId.idServices(id);
    return res.status(200).json(result);
  };

  module.exports = { idPostPostController };