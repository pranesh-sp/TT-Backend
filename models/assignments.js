var mongoose = require('mongoose');
var assignment = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    assignment_id: {
        required: true,
        type: Number,
    },
    deadline: {
        type: Date,
        required: true
    },

    description: {
        type: String,
        required: true
    },
    subject: {
        type: string,
        required: true,
        unique: true
    }
});
mongoose.model('assignment', assignment);


module.exports = mongoose.model('assignment');