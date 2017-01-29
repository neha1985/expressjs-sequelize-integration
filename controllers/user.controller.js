const express = require("express");
let router = express.Router();

let users = [];
let user = require("../models/user");

router.get("/", (req, res) => {
    user.findAll({}).then((d) => {
        res.render("userList", { Title: "User List", data: d });
    }).catch((err) => {
        res.render("index");
    });
});
/*
router.get("/:id", (req, res) => {
    let id = req.params.id;
    user.findById(id).then((d) => {
        res.send(d);
    }).catch((err) => {
        res.send("not found");
    });
});
*/
router.get("/create", (req, res) => {
    res.render("createUser", { Title: "Create User" });
}).post("/create", (req, res) => {
    let body = req.body;
    if (body != undefined) {
        let obj = user.build({
            name: body.name,
            address: body.address,
            email: body.email,
            phone: body.phone
        });

        obj.save().then((d) => {
            res.redirect("/users");
        }).catch((err) => {
            res.render("createUser", { Title: "Create User", Error: "Some error occured." });
        });
    } else {
        res.render("createUser", { Title: "Create User" });
    }
});


module.exports = router;