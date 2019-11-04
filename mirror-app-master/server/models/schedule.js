/**
 * @description: Schema for Health
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Schedule = new Schema({
    event: {
        type: String
    },
    time: {
        type: String
    },
   

},{
    collection: 'schedule'
});

module.exports = mongoose.model('Schedule', Schedule);