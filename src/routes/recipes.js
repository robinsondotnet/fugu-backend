const express = require('express');
const router = express.Router();
const { RecipeRepository } = require('../repositories');

router.get('/', function(request, response, next) {
    const session = request.app.get('dbDriver').session();
    const recipes = RecipeRepository.getRecipes();

    const resultPromise = session.writeTransaction(tx =>
        tx.run(
            'CREATE (a:Greeting) SET a.message = $message RETURN a.message + ", from node " + id(a)',
            { message: 'hello, world 123' }
        )
    )

    resultPromise.then(result => {
        session.close()

        const singleRecord = result.records[0]
        const greeting = singleRecord.get(0)

        console.log(greeting)
        response.json(recipes);
    })

})

 module.exports = router;
