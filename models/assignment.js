var mongoose = require('mongoose');
var assignment = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    assignment_id: {
        required: true,
        type: Number,
        unique:true
    },
    deadline: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true,
        
    }
});


mongoose.model('assignment',assignment);


module.exports = mongoose.model('assignment');