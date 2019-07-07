const express = require('express');
const router = express.Router();

router.get('/', function(request, response, next) {
    const recipes = require('../__mocks__/recipes');
    response.send(recipes);
});

 module.exports = router;