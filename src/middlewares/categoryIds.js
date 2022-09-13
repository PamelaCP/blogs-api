const { Category } = require('../database/models');

const validCatIdsArr = async (arr) => {
    await Promise.all(arr.map(async (id) => {
        const getId = await Category.findOne({ where: { id } });
        if (!getId) throw new Error('400|"categoryIds" not found');
    }));
};

module.exports = validCatIdsArr;

// validação do array