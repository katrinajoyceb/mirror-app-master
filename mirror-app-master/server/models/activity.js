/**
 * @description: Schema for Health
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Activity = new Schema({
    date: {
        type: String
    },
    steps: {
        type: Number
    },
    active_hours: {
        type: Number
    },
    flights: {
        type: Number
    }

},{
    collection: 'activity'
});

module.exports = mongoose.model('Activity', Activity);