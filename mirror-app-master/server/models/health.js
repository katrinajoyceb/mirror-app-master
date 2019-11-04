/**
 * @description: Schema for Health
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Health = new Schema({
    type: {
        type: String
    },
    weight: {
        type: Number
    },
    date: {
        type: String
    }

},{
    collection: 'health'
});

module.exports = mongoose.model('Health', Health);