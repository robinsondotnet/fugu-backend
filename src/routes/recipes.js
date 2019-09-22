const express = require('express');
const router = express.Router();
const { RecipeRepository } = require('../repositories');
const RecipeMapper = require('../mappers/recipe.mapper');

router.get('/', function (request, response, _) {
    const driver = request.app.get('dbDriver');

    new RecipeRepository(driver)
        .getRecipes()
        .then(result => {
            response.json(result);
        })
})

router.post('/', function (request, response, _) {
    const driver = request.app.get('dbDriver');

    const recipe = RecipeMapper.mapRequestToModel(request.body);

    new RecipeRepository(driver)
        .createRecipe(recipe)
        .then(result => {
            response.json(result);
        });
});

module.exports = router;
