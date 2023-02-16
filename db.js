const path = require('path');
const { Sequelize, Model } = require('sequelize');
const sequelize = new Sequelize ({
    dilect: "sqlite",
    storage: path.join(__dirname, "db.sqlite") 
})
// TODO - create the new sequelize connection

module.exports = {
    sequelize,
    Sequelize
};
