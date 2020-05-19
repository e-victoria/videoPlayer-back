const dbController = require('../dbConnection');
const bodyParser = require("body-parser");

// check signup data

registerUser = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.post('/signup/new-user', (req, res) => {
        function sendResponse(response) {
            res.send(JSON.stringify(response));
            res.status(200).end();
        }
        dbController.saveToDB(`INSERT INTO users(email, password) VALUES(${req.body['email']}, '${req.body['password']}';`, sendResponse);
    })
}

module.exports = {
    registerUser: registerUser
};
