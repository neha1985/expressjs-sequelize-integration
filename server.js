const express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    exphbs = require('express-handlebars'),
    http = require('http');

var app = express();

//application/json
app.use(bodyParser.json());
//x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', require('./routes/webRoutes'));
app.use(express.static(path.join(__dirname, './node_modules')));

// view engine setup(express-handlebars)
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: ".hbs", layoutsDir: "./views/layout" }));
app.set('view engine', '.hbs');
app.set('views', './views');

var port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;