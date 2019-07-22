var mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    name:{
        type: String,
        require: true
    }
});

var Recipe = module.exports = mongoose.model('recipes', recipeSchema);
module.exports.get = function (callback, limit) {
    Recipe.find(callback).limit(limit);
}
