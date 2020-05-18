const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors({origin: 'http://localhost:4200'}));

let videoController = require('./controllers/video/videoController');

videoController.getMoviesList(app);
videoController.getMovieByTitleAndDescription(app);

app.listen(3000);
