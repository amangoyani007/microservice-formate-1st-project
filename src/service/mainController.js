const Reg = require('../database/model/model')
const Log = require('../database/model/loginModel')
const jwt = require('jsonwebtoken');


const HomePage = (req, res) => {
    console.log("home page");
    res.status(200).json({ msg: "Home Page" });
};

const Registration = async (req, res) => {
    try {
        const code6 = () => {
            number = (Math.random() + ' ').substring(2, 5) + (Math.random() + ' ').substring(2, 5);
        }
        code6();
        console.log(number);
        const code = number;
        // const reg = await Reg.create(req.body);
        // res.status(200).json({reg, msg: `Your 6 digit code is ${number}`});

        const { email } = req.body;
        const newEmail = new Reg({ email, code });
        await newEmail.save();

        res.status(200).json({ msg: `You are in now and your 6 digite code for login is : ${newEmail.code}` })

    } catch (err) {
        res.status(400).json({ err });
    };
};

const Login = async (req, res) => {
    try {
        const { email, code } = req.body;

        if (!email || !code) {
            res.status(400).json({ msg: "Bad Request" });
        }

        const task = await Reg.findOne({ email });

        if (task) {
            // console.log(task, "finded");

            if (code == task.code) {
                // console.log("Success");
                const code1 = task.code

                const token = jwt.sign({ email, code1 }, process.env.JWT_SECRET);
                // console.log(token);

                res.status(200).json({ msg: `Logged in, and your JWT token is : '${token}'`, })
            }
            else {
                res.status(200).json({ msg: "Incorrect code or email" });
            }



        }

    } catch (err) {
        res.status(400).json({ err });
        console.log(err);
    };
};

const Logout = async (req, res) => {
    try {
        const { email } = req.body;

        const findLogout = await Reg.findOne({ email });

        res.status(200).json({ msg: `You are loged out from this email : '${findLogout.email}'` })
    } catch (err) {
        res.status(400).json({ err })
    }
}

module.exports = { HomePage, Registration, Login, Logout };