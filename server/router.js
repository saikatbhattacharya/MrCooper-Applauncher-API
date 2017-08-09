var requestHandler = require('../middleware/requestHandler');
var bodyParser = require('body-parser');
var multer = require("multer");
var upload = multer({ dest: "./uploads" });
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

    app.put('/app', function (req, res) {
        var id = req.body._id;
        delete req.body._id;
        console.log(req.body);
        requestHandler.putData('appModel', {_id: id}, req.body, {upsert: true}, res);
    });

     app.post("/fileupload", upload.single("filename"), function (req, res) {
        console.log("***** ", req.files);
        requestHandler.postFile(req, res);
    });
}
