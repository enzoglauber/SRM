var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Action = new Schema({
  title: {
    type: String
  }
}, {
    collection: 'actions'
  });

module.exports = mongoose.model('Action', Action);