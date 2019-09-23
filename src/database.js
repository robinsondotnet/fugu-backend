const neo4j = require('neo4j-driver').v1;
const {getClassName, splitJoin} = require('./utils/object.utils');

module.exports = {
    initDatabase(app) {
        this.driver = neo4j.driver("bolt://100.26.253.13:33991", neo4j.auth.basic("neo4j", "drives-residues-rushes"));
        app.on('exit', () => {
            driver.close();
        })
    },
    getDriver() {
        return this.driver;
    },
    create(model) {
        const session = this.driver.session();
        const nodePreffix = "r";
        const nodeType = getClassName(model);
        const setValuesRawSentence = splitJoin(model, nodePreffix);
        return session.writeTransaction(tx => {
            tx.run(
                `CREATE (${nodePreffix}:${nodeType}) SET ${setValuesRawSentence} RETURN ${nodePreffix}`,
                model
            )
        }).then((result) => { session.close(); return result });
    },
    getByNodeType(nodeType) {
        const session = this.driver.session();
        return session.writeTransaction(tx => {
            tx.run(
                `MATCH (x:${nodeType} RETURN x)`
            )
        }).then((result) => { session.close(); return result });
    }
}
