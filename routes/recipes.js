const express = require('express');
const router = express.Router();

router.get('/111', function(request, response, next) {

    const recipes = require('../__mocks__/recipes');
    const foundRecipe = recipes.filter(recipe => recipe.name.includes(request.param('name')));
    response.send(foundRecipe);
 
 });

 router.get('/123', function(request, response, next) {

    const tests = require('../__mocks__/test');
    const foundTest = tests.filter(test => test.name.includes(request.param('name')));
    response.send(tests);
 
 });

 router.get('/321', function(request, response, next) {

    const recipes = require('../__mocks__/recipes');
    const foundRecipe = recipes.find(recipe => recipe.name.includes(request.param('name')));
    response.send(foundRecipe.id);
 
 });

 module.exports = router;