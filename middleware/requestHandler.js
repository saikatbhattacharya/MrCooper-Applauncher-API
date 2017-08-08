var http = require('http-as-promised');
var config = require('../config');
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
        console.log('****** postData: ', postObj);
        dbLayer.CREATE(model, postObj, res);
    }
}