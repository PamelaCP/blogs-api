const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define("PostCategory", {
    postId: { 
      type: DataTypes.INTEGER,
      foreignKey: true, 
      primaryKey: true 
    },
    categoryId: {
      type: DataTypes.INTEGER,
      foreignKey: true, 
      primaryKey: true 
    }
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'blogposts',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'categories',
      // por qual tabela eu faço associação
      through: PostCategory, 
      // id tabela fonte
      foreignKey: 'categoryId',
      // id tabela alvo
      otherKey: 'postId',
    });
  };

  return PostCategory;
};

module.exports = PostCategory;