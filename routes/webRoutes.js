const express = require('express');
let router = express.Router();

router.use("/users", require('../controllers/user.controller'));

module.exports = router;