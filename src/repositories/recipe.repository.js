const { create, getByNodeType } = require('../database');

module.exports = {
    getRecipes() {
        return getByNodeType('Recipe')
            .then(result => {
                const records = result.records[0]
                return records;
            });
    },
    createRecipe(recipe) {
        return create(recipe)
            .then(result => {
                const singleRecord = result.records[0]
                const recipe = singleRecord.get(0)
                console.log(recipe)
                return recipe;
            });
    }
}
