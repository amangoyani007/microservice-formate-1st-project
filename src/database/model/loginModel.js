const mongoose = require('mongoose');

const Login = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    code: {
        type: Number,
        required: [true, 'Code is required'],
        min: 100000,
        max: 999999,
      },
});

module.exports = mongoose.model('Log', Login);