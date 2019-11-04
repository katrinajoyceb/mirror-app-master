/**
 * @description: Schema for Health
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Twitter = new Schema({
    username: {
        type: String
    },
    tweet: {
        type: String
    },
    pfp: {
        type: String
    },
    status: {
        type: String
    }

},{
    collection: 'twitter'
});

module.exports = mongoose.model('Twitter', Twitter);