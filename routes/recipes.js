const express = require('express');
const router = express.Router();


 router.get('/', function(request, response, next) {

    const recipes = require('../__mocks__/recipes');
    const foundRecipe = recipes.find(recipe => recipe.name.includes(request.param('name')));
    response.send(foundRecipe.id);
 
 });

 module.exports = router;