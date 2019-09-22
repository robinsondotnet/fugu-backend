module.exports = class {
    constructor(driver) {
        this.driver = driver;
    }

    getRecipes() {
        const session = this.driver.session();
        return session
            .writeTransaction(tx => tx.run('MATCH (r:Recipe) RETURN r'))
            .then(result => {
                session.close()
                const records = result.records[0]
                return records;
            })
    }

    createRecipe(recipe) {
        const session = this.driver.session();
        return session
        .writeTransaction(tx =>
            tx.run(
                'CREATE (r:Recipe) SET r.name = $name RETURN r',
                recipe
            )
        )
            .then(result => {
                session.close()
                const singleRecord = result.records[0]
                const recipe = singleRecord.get(0)
                console.log(recipe)
                return recipe;
            });
    }
}
