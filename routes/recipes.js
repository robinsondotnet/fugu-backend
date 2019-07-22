const express = require('express');
const router = express.Router();
const Recipe = require("../models/recipeModel");

router.get('/', function(request, response, next) {
    
   Recipe.get(function (err, recipes) {
      if (err) {
          response.json({
              status: "error",
              message: err,
          });
      }
      response.json(recipes);
 });
})

 module.exports = router;