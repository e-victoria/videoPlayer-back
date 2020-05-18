const dbController = require('../dbConnection');

getMoviesList = (app) => {
    app.get('/movies', (req, res) => {
        function getData(result) {
            res.send(JSON.stringify(result));
            res.status(200).end();
        }

        dbController.getFromDb(`SELECT * FROM videos;`, getData);
    })
};

getMovieByTitleAndDescription = (app) => {
    app.get('/movies/:searchPhrase', (req, res) => {
        function getData(result) {
            res.send(JSON.stringify(result));
            res.status(200).end();
        }
        const searchPhrase = req.originalUrl.split("/").pop().toLocaleLowerCase();
        dbController.getFromDb(`SELECT * FROM videos WHERE LOWER(video_title) LIKE '%${searchPhrase}%' OR LOWER(video_description) LIKE '%${searchPhrase}%';`, getData);
    })
};

module.exports = {
    getMoviesList: getMoviesList,
    getMovieByTitleAndDescription: getMovieByTitleAndDescription
};
