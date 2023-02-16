const {Sequelize, sequelize} = require('./db');
const {DataTypes} = require("sequelize");

// TODO - define the Band model
let Band = Sequelize.define()

module.exports = {
    Band
};