const dbController = require('../dbConnection');

getMoviesList = (app) => {
    app.get('/movies', (req, res) => {
        function getData(result) {
            res.send(JSON.stringify(result));
            res.status(200).end();
        }

        dbController.getFromDb(`SELECT * FROM videos;`, getData);
    })
}

module.exports = {
    getMoviesList: getMoviesList
};
