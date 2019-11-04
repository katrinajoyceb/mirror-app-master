/**
 * @description: Calls to API
 */


const express = require('express');
const app = express();
const newsRoutes = express.Router();

let News = require('../models/news');


newsRoutes.route('/').get(function (req, res) {
    News.find(function (err, newss){
    if(err){
      console.log(err);
    }
    else {
      res.json(newss);
    }
  });
});
module.exports = newsRoutes;