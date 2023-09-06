const express = require('express');
const { HomePage } = require('../service/mainController');


module.exports = (app) => {
    const service = new HomePage();


    app.get("/get", async (req, res, next) => {
        const data = new HomePage();
        try {
            // console.log("hii");

            console.log(data);
            await data.Hello();

            res.status(200).json({ msg: "heloo" });
        } catch (err) {
            next(err);
        }
    });

    app.post("/register", async (req, res, next) => {
        try {

            const { email } = req.body;
            // console.log(email);
            const data = await service.SignIn({ email });
            // console.log(data, "this is data");
            return res.json(data);

            // const email = req.body;
            // console.log(email);
            // const { data } = await service.SignIn({ email });
            // return res.json(data);
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