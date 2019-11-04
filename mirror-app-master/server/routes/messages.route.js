/**
 * @description: Calls to API
 */


const express = require('express');
const app = express();
const messagesRoutes = express.Router();

let Messages = require('../models/messages');


messagesRoutes.route('/').get(function (req, res) {
    Messages.find(function (err, messagess){
    if(err){
      console.log(err);
    }
    else {
      res.json(messagess);
    }
  });
});
module.exports = messagesRoutes;