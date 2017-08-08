var mongoose = require('mongoose');
var schema = require('./schema.json');

var appSchema = new mongoose.Schema(schema['apps']);
var appModel = mongoose.model('app', appSchema);

module.exports = {
  appModel
}

