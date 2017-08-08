var requestHandler = require('../middleware/requestHandler');
var bodyParser = require('body-parser');
// var multer = require("multer");
// var upload = multer({ dest: "./uploads" });
// var path = require('path');

module.exports = function (app) {
    // parse application/x-www-form-urlencoded 
    app.use(bodyParser.urlencoded({ extended: false }))

    // parse application/json 
    app.use(bodyParser.json());
    
    app.post('/app', function (req, res) {
        requestHandler.postData('appModel', req.body, res);
    });

    app.get('/all', function (req, res) {
        requestHandler.get(req, res, 'appModel');
    });
}
