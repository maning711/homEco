/**
 * created by maning
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TradeRecds = new Schema({
    username: String,
    password2: String,
    tradeDate: String,
    incomeType: String,
    costType: String,
    payType: String,
    tradeFlg: String,
    content: String
});

module.exports = TradeRecds;