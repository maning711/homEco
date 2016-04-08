/**
 * created by maning
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/homeco');
exports.User = mongoose.model('User', require('./user'));
exports.HomeAccount = mongoose.model('HomeAccount', require('./homeAccount'));
exports.PerAccount = mongoose.model('PerAccount', require('./personAccount'));
exports.TradeRecds = mongoose.model('TradeRecds', require('./tradeRecodes'));