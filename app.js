const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors({origin: 'http://localhost:4200'}));

let videoController = require('./controllers/video/videoController');
let signUpController = require('./controllers/login/signUpController');

videoController.getMoviesList(app);
videoController.getMovieByTitleAndDescription(app);
signUpController.registerUser(app);

app.listen(3000);
