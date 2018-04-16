const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define('user', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
      instanceMethods: {
        generateHash: (password) => {
          return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
        },
        validPassword: (password) => {
          return bcrypt.compareSync(password, this.password);
        },
      }
    });

  User.hook('beforeCreate', (user, options) => {
    user.password = user.generateHash(user.password);
  });

  return User;
};