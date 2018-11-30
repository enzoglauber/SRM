var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Navbar = new Schema({
  title: {
    type: String
  },
  icon: {
    type: String
  }
}, {
  collection: 'navbars'
});

module.exports = mongoose.model('Navbar', Navbar);