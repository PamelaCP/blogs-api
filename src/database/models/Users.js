const Users = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
      id: {
        type: DataTypes.INTERGER,
        allowNull: false,
        primaryKey: true,
      },
      displayName: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      image: {

      },


    });
  
    return Users;
  };
  
  module.exports = Users;