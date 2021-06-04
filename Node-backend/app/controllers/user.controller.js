const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;


// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    User.findAll
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving tutorials."
            });
          });
};


// Find user for the given credentials
exports.findGivenCreds(creds) = (req, res) => {
        const email = req.query.email;
        var condition = email ? creds : null;
      
        Tutorial.findAll({ where: condition })
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving tutorials."
            });
          });
};
