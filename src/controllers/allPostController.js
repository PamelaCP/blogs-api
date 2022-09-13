const services = require('../services/allPostService');

const allPostController = async (_req, res) => {
    const result = await services.allPostService();
    // console.log(result[0]);
    return res.status(200).json(result);
  };

module.exports = {
    allPostController,

};
