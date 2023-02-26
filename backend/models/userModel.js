var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name.']
    },
    email: {
        type: String,
        required: [true, 'Please add an email.'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password.']
    },
    isAdmin: {
        type: Boolean,
        default: false,
        required: true
    }
},
    {
        timestamps: true
    });

module.exports = mongoose.model('User', UserSchema)