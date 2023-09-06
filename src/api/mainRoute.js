const express = require('express');


module.exports = (app) => {

    app.get("/get", async (req, res, next) => {
        try {
            console.log("hii");
            res.status(200).json({msg: "heloo"});
        } catch (err) {
            next(err);
        }
    });
}


// const router = express.Router();

// const {HomePage, Registration, Login, Logout} = require('../service/mainController.js');

// router.route('/').get(HomePage).post(Registration);
// router.route('/login').post(Login);
// router.route('/logout').post(Logout);

// module.exports = router;