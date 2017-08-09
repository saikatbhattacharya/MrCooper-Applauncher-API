var dbLayer = require('../DAL');
var responseHandler = require('./responseHandler');

module.exports = {
    get: function (req,res, model) {
        dbLayer.READ(model, req.params, res);
    },
    getAggregatedValue: function (query, res, model) {
        dbLayer.AGGREGATE(model, query, res);
    },
    postData: function (model, postObj, res) {
        dbLayer.CREATE(model, postObj, res);
    },
    putData: function (model, query, update, options, res) {
        dbLayer.UPDATE(model, query, update, options, res);
    },
    postFile: function (req, res) {
        dbLayer.CREATE_FILE(req,res);
    }
}