const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors({origin: 'http://localhost:4200'}));

let videoController = require('./controllers/video/videoController');
let signUpController = require('./controllers/login/signUpController');
let signInController = require('./controllers/login/signInController');

videoController.getMoviesList(app);
videoController.getMovieByTitleAndDescription(app);
videoController.getMovieById(app);
signUpController.registerUser(app);
signInController.checkUser(app);

app.listen(3000);
