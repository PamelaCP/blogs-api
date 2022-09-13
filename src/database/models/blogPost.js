const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define("BlogPost", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
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
        allowNull: false,
        foreingKey: true, 
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'userId',
        references: {
          model: 'Users',
          key: 'id'},
    },
      published: {
        type: DataTypes.DATE,
      },
      updated: {
        type: DataTypes.DATE,
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
