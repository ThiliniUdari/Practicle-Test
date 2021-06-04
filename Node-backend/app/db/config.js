module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",//"123456",
    DB: "testdb",
    dialect: "mysql",
    //pool is  used for Sequelize connection pool configuration:
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };