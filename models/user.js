const Sequelize = require("sequelize");
const sequelize = require("../config/db");

let user = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING,
    address: Sequelize.STRING,
    email: Sequelize.STRING,
    phone: Sequelize.INTEGER,
}, {
    freezeTableName: true,
    timestamps: false // Model tableName will be the same as the model name
});

module.exports = user;