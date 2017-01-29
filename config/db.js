const Sequelize = require("sequelize");

var sequelize = new Sequelize('testdb1', 'root', 'root', {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

sequelize
    .authenticate()
    .then(function(err) {
        console.log('Connection has been established successfully.' + sequelize.getDialect.name);
    }, function(err) {
        console.log('Unable to connect to the database:', err);
    });


module.exports = sequelize;