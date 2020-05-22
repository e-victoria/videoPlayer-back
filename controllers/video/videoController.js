const dbController = require('../dbConnection');
const bodyParser = require("body-parser");

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

getMovieByID = (app) => {
    app.get('/movie/:id', (req, res) => {
        function getData(result) {
            res.send(JSON.stringify(result[0]));
            res.status(200).end();
        }
        const id = req.originalUrl.split("/").pop();
        dbController.getFromDb(`SELECT * FROM videos WHERE video_id = ${id};`, getData);
    })
};

saveNewVideo = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.post('/new-video/upload', (req, res) => {
        const sendResponse = (response) => {
            res.send(JSON.stringify(response));
            res.status(200).end();
        }

        dbController.saveToDB(`INSERT INTO videos(video_title, video_description, url, video_thumbnail) VALUES('${req.body['video_title']}', '${req.body['video_description']}', '${req.body['url']}', '${req.body['video_thumbnail']}');`, sendResponse);
    })
}

module.exports = {
    getMoviesList: getMoviesList,
    getMovieByTitleAndDescription: getMovieByTitleAndDescription,
    getMovieById: getMovieByID,
    saveNewVideo: saveNewVideo
};
