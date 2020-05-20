const dbController = require('../dbConnection');
const bodyParser = require("body-parser");

registerUser = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.post('/signup/new-user', (req, res) => {
        const sendResponse = (response) => {
            res.send(JSON.stringify(response));
            res.status(200).end();
        }

        const checkEmail = (response) => {
            if(!response[0]) {
                dbController.saveToDB(`INSERT INTO users(email, password) VALUES('${req.body['email']}', '${req.body['password']}');`, sendResponse);
            } else {
                res.send(JSON.stringify('Email already exists'));
                res.status(200).end();
            }
        }

        dbController.getFromDb(`SELECT email FROM users WHERE email = '${req.body['email']}';`, checkEmail);
    })
}

module.exports = {
    registerUser: registerUser
};
