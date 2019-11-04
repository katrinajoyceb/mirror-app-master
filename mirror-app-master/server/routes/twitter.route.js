/**
 * @description: Calls to API
 */


const express = require('express');
const app = express();
const twitterRoutes = express.Router();

let Twitter = require('../models/twitter');


twitterRoutes.route('/').get(function (req, res) {
    Twitter.find(function (err, twitters){
    if(err){
      console.log(err);
    }
    else {
      res.json(twitters);
    }
  });
});
module.exports = twitterRoutes;