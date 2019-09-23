const express = require('express');
const router = express.Router();
const { RecipeRepository } = require('../repositories');
const { RecipeMapper } = require('../mappers');

router.get('/', function (request, response, _) {
    RecipeRepository
        .getRecipes()
        .then(result => {
            response.json(result);
        })
})

router.post('/', function (request, response, _) {
    const recipe = RecipeMapper.mapRequestToModel(request.body);

    RecipeRepository
        .createRecipe(recipe)
        .then(result => {
            response.json(result);
        });
});

module.exports = router;
