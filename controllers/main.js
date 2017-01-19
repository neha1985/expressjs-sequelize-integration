const Users = require('../db').Users;

module.exports = {
    getHomePage: (req, res) => {
        res.status(200);
        res.render("index", { title: "EXPRESS-SEQUELIZE" });
    }
};