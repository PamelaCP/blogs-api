const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define("BlogPost", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    userId: {
    type: DataTypes.INTEGER,
    foreignKey: true,
    },
    published: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    createdAt: 'published',
    updatedAt: 'updated',
    tableName: 'BlogPosts',
  },
  
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' });
  };

  return BlogPost;
};

module.exports = BlogPost;