const Reg = require('../model/model')

class RegistrationWithEmail {
    async RegUser({ email }) {
        let number=0;
        try {
            const code6 = () => {
                // console.log("This is in code6");
                number = (Math.random() + ' ').substring(2, 5) + (Math.random() + ' ').substring(2, 5);
            }
            code6();
            // console.log(number);
            const code = number;
            const user = new Reg({
                email, code
            });
            const userAdded = await user.save();
            // console.log(userAdded);
            return userAdded;
        } catch (err) {
            console.log(err);
        };
    };
};

module.exports = { RegistrationWithEmail };