var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },

    roll_no : {
        type: String,
        required : true
    },
    email: {
        type: email,
        required: true,
        unique: true
    }
});
mongoose.model('User', UserSchema);


module.exports = mongoose.model('User');
