const dbController = require('../dbConnection');
const bodyParser = require("body-parser");

checkUser = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.post('/signin', (req, res) => {
        function sendResponse(response) {
            res.send(JSON.stringify(response[0]));
            res.status(200).end();
        }
        dbController.getFromDb(`SELECT user_id FROM users WHERE email = '${req.body['email']}' AND password = '${req.body['password']}';`, sendResponse);
    })
}

module.exports = {
    checkUser: checkUser
};
