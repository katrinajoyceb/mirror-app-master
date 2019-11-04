/**
 * @description: Calls to API
 */


const express = require('express');
const app = express();
const activityRoutes = express.Router();

let Activity = require('../models/activity');


activityRoutes.route('/').get(function (req, res) {
    Activity.find(function (err, activitys){
    if(err){
      console.log(err);
    }
    else {
      res.json(activitys);
    }
  });
});
module.exports = activityRoutes;