/**
 * @description: Calls to API
 */


const express = require('express');
const app = express();
const sleepRoutes = express.Router();

let Sleep = require('../models/sleep');


sleepRoutes.route('/').get(function (req, res) {
    Sleep.find(function (err, sleeps){
    if(err){
      console.log(err);
    }
    else {
      res.json(sleeps);
    }
  });
});
module.exports = sleepRoutes;