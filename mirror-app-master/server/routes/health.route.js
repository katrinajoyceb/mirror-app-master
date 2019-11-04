/**
 * @description: Calls to API
 */


const express = require('express');
const app = express();
const healthRoutes = express.Router();

let Health = require('../models/health');


healthRoutes.route('/').get(function (req, res) {
    Health.find(function (err, healths){
    if(err){
      console.log(err);
    }
    else {
      res.json(healths);
    }
  });
});
module.exports = healthRoutes;