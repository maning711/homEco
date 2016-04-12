/**
 * created by maning
 */
var db = require('../models');

exports.saveTradeInfo = function (tradeInfo, callback) {
    db.TradeRecds.findOne({
        username: tradeInfo.userInfo.username,
        password2: tradeInfo.userInfo.password2,
        tradeDate: tradeInfo.timeStmp
    }, function (err, tradeInfos) {
        if (tradeInfos) {
            callback(null, tradeInfos);
        } else {
            tradeRecds = new db.TradeRecds;
            tradeRecds.username = tradeInfo.userInfo.username;
            tradeRecds.password2 = tradeInfo.userInfo.password2;
            tradeRecds.tradeDate = tradeInfo.tradeDate;
            tradeRecds.incomeType = tradeInfo.incomeType;
            tradeRecds.costType = tradeInfo.costType;
            tradeRecds.payType = tradeInfo.payType;
            tradeRecds.tradeFlg = tradeInfo.tradeFlg;
            tradeRecds.updateStamp = tradeInfo.timeStmp;
            tradeRecds.updateUser = tradeInfo.userInfo.username;
            tradeRecds.createStamp = tradeInfo.timeStmp;
            tradeRecds.createUser = tradeInfo.userInfo.username;
            tradeRecds.save(callback);
        }
    });
};