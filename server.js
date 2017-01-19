const express = require('express'),
    path = require('path'),
    exphbs = require('express-handlebars'),
    config = require('./config'),
    Sequelize = require('sequelize'),
    mysql = require('mysql2');

var app = express();

// view engine setup(express-handlebars)
app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');

var sequelize = new Sequelize('mysql://root:root@localhost:3306/testdb1');

var port = process.env.PORT || '3000';
app.set('port', port);

app.sequelize.sync().done(() => {
    http.createServer(app)
        .listen(app.get('port'), () => {
            console.log(`Server - Port ${app.get('port')}`);
        });
});


module.exports = app;