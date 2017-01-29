const express = require("express");
let router = express.Router();

let users = [];
let user = require("../models/user");

router.get("/", (req, res) => {
    user.findAll({}).then((d) => {
        console.log(d);
        res.render("userList", { Title: "User List", data: d });
    }).catch((err) => {
        res.render("index");
    });
});

module.exports = router;