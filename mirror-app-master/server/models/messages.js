/**
 * @description: Schema for Health
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Messages = new Schema({
    sender: {
        type: String
    },
    message: {
        type: String
    },
    priority: {
        type: Number
    },
    status: {
        type: String
    }

},{
    collection: 'messages'
});

module.exports = mongoose.model('Messages', Messages);