const generate = require('nanoid/generate');

module.exports = (sequelize, DataTypes) => {
  let Url = sequelize.define('url', {
    hash: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
      instanceMethods: {
        generateHash: function (models) {
          return generate('abcdefghijkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVQXYZ1234567890', 6)
        }
      }
    });
  return Url;
};