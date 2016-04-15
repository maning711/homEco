/**
 * created by maning
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TradeRecds = new Schema({
    username: String,
    password2: String,
    moneyNum: String,
    tradeDate: String,
    incomeType: String,
    costType: String,
    payType: String,
    tradeFlg: String,
    content: String,
    updateStamp: String,
    updateUser: String,
    createStamp: String,
    createUser: String
});

module.exports = TradeRecds;