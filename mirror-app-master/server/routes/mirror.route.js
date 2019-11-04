/**
 * @description: Calls to API
 */


const express = require('express');
const app = express();
const mirrorRoutes = express.Router();

let Mirror = require('../models/mirror');


mirrorRoutes.route('/').get(function (req, res) {
    Mirror.find(function (err, mirrors){
    if(err){
      console.log(err);
    }
    else {
      res.json(mirrors);
    }
  });
});
module.exports = mirrorRoutes;