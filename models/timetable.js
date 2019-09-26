var mongoose = require('mongoose');
var timetable = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    monday: {
        first: {
            type: String,
            required: true
        },
        second: {
            type: String,
            required: true
        },
        third: {
            type: String,
            required: true
        },
        fourth: {
            type: String,
            required: true
        },
        fifth: {
            type: String,
            required: true
        }


    }


});
mongoose.model('timetable', timetable);


module.exports = mongoose.model('timetable');