module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      id: {
        type: Sequelize.VARCHAR
      },
      username: {
        type: Sequelize.VARCHAR
      },
      name: {
        type: Sequelize.STRING
      },
      auth_key: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },

      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return User;
  };