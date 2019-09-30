var mongoose = require('mongoose');
var timetable = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique:true
    },

    mon_first: {
        type: String,
        required: true
    },
    mon_second: {
        type: String,
        required: true
    },
    mon_third: {
        type: String,
        required: true
    },
    mon_fourth: {
        type: String,
        required: true
    },
    mon_fifth: {
        type: String,
        required: true
    },
    tue_first: {
        type: String,
        required: true
    },
    tue_second: {
        type: String,
        required: true
    },
    tue_third: {
        type: String,
        required: true
    },
    tue_fourth: {
        type: String,
        required: true
    },
    tue_fifth: {
        type: String,
        required: true
    },
    wed_first: {
        type: String,
        required: true
    },
    wed_second: {
        type: String,
        required: true
    },
    wed_third: {
        type: String,
        required: true
    },
    wed_fourth: {
        type: String,
        required: true
    },
    wed_fifth: {
        type: String,
        required: true
    },
    thurs_first: {
        type: String,
        required: true
    },
    thurs_second: {
        type: String,
        required: true
    },
    thurs_third: {
        type: String,
        required: true
    },
    thurs_fourth: {
        type: String,
        required: true
    },
    thurs_fifth: {
        type: String,
        required: true
    },
    fri_first: {
        type: String,
        required: true
    },
    fri_second: {
        type: String,
        required: true
    },
    fri_third: {
        type: String,
        required: true
    },
    fri_fourth: {
        type: String,
        required: true
    },
    fri_fifth: {
        type: String,
        required: true
    }





});
mongoose.model('timetable', timetable);


module.exports = mongoose.model('timetable');