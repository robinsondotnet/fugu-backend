module.exports = (app) => {
    app.use('/', require('../routes/home'));
    app.use('/api/recipes', require('../routes/recipes'));
}

