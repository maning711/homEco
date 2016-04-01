/**
 * created by maning
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/homeco');
exports.User = mongoose.model('User', require('./user'));