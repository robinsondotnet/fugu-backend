const Recipe = require('../models/recipe.model');

module.exports = {
    mapRequestToModel(request) {
        const model = new Recipe();
        model.name = request.name;

        return model;
    }
}
