/**
 * @description: Calls to API
 */


const express = require('express');
const app = express();
const scheduleRoutes = express.Router();

let Schedule = require('../models/schedule');


scheduleRoutes.route('/').get(function (req, res) {
    Schedule.find(function (err, schedules){
    if(err){
      console.log(err);
    }
    else {
      res.json(schedules);
    }
  });
});
module.exports = scheduleRoutes;