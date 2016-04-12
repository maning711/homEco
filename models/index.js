/**
 * created by maning
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/homeco');
exports.User = mongoose.model('User', require('./user'));
exports.HomeAccounts = mongoose.model('HomeAccounts', require('./homeAccounts'));
exports.TradeRecds = mongoose.model('TradeRecds', require('./tradeRecodes'));