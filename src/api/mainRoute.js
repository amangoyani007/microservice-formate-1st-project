const express = require('express');

const router = express.Router();

const {HomePage, Registration, Login, Logout} = require('../service/mainController.js');

router.route('/').get(HomePage).post(Registration);
router.route('/login').post(Login);
router.route('/logout').post(Logout);

module.exports = router;