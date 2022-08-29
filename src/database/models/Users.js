const Users = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
      id: {

      },
      displayName: {

      },

      email: {

      },

      password: {

      },
      image: {
        
      }


    });
  
    return Users;
  };
  
  module.exports = Users;