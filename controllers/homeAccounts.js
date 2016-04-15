/**
 * created by maning
 */
var db = require('../models');

exports.findHomeAccountByDate = function (_date, callback) {
    db.HomeAccounts.findOne({
        date: _date
    }, callback);
};

exports.updateHomeAccount = function (tradeInfo, callback) {
    db.HomeAccounts.findOneAndUpdate({
        date: tradeInfo.date
    }, {
        moneyNum: tradeInfo.moneyNum
    }, callback);
};