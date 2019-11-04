/**
 * @description: Schema for Health
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Sleep = new Schema({
    date: {
        type: String
    },
    total_hours: {
        type: Number
    },
    rest_hours: {
        type: Number
    },
    wake_hours: {
        type: Number
    }

},{
    collection: 'sleep'
});

module.exports = mongoose.model('Sleep', Sleep);