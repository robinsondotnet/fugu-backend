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
      response.json(recipes.map(function(recipe) {return { id: recipe._id, name: recipe.name}}));
 });
})

router.post('/', function(request, response, next) {
    
    var recipe = new Recipe();
    recipe.name = request.body.name;
    recipe.save(function (err) {    
     response.json({ 
        id: recipe._id, name: recipe.name
        });
    }); 
 })

 router.put('/:_id', function(request, response, next) {
    
    Recipe.findById(request.params._id, function (err, recipe) {
        if (err)
            response.send(err);

        recipe.name = request.body.name;
        
        recipe.save(function (err) {
            if (err)
                response.json(err);
            response.json({
                message: 'Recipe updated',
                data: recipe
            });
        });
    });
 })

 router.delete('/:_id', function(request, response, next) {
    
    Recipe.remove({
        _id: request.params._id
    }, function (err, recipe) {
        if (err)
            response.send(err);
            response.json({
            status: "success",
            message: 'Recipe deleted'
        });
    });
 })

 module.exports = router;