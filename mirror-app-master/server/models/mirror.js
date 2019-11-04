/**
 * @description: Schema for Mirror
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Mirror = new Schema({
    type: {
        type: String
    },
    weight: {
        type: Number
    },
    metric: {
         type: String
    },
    date: {
        type: Date
    },
    user: {
        type: Number
    }

},{
    collection: 'mirror'
});

module.exports = mongoose.model('Mirror', Mirror);