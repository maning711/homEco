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
        cashAcct: tradeInfo.cashAcct,
        updateStamp: tradeInfo.timeStmp,
        updateUser: tradeInfo.userInfo.username
    }, null, callback);
};

// 增加默认家庭记录
exports.findByDateOrCreate = function (date, username, callback) {
    var promise = db.HomeAccounts.findOne({
        date: date
    }).then(function (err, homeAccount) {
        if (homeAccount) {
            callback(null, homeAccount);
        } else {
            homeAccount = new db.HomeAccounts;
            homeAccount.date = date;
            homeAccount.cashAcct = '0';
            homeAccount.noCashAcct = '0';
            homeAccount.loanHouse = '0';
            homeAccount.lastMontLevel = 'B';
            homeAccount.currentMontLevel = 'B';
            homeAccount.conment = '';
            homeAccount.createStamp = date;
            homeAccount.createUser = username;
            homeAccount.save(callback);
        }
    });
};