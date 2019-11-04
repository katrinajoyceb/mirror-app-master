/**
 * @description: Schema for Health
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let News = new Schema({
    headline: {
        type: String
    },
    photo: {
        type: String
    },
    

},{
    collection: 'news'
});

module.exports = mongoose.model('News', News);