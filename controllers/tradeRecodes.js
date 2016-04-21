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
            tradeRecds.moneyNum = tradeInfo.moneyNum;
            tradeRecds.tradeDate = tradeInfo.tradeDate;
            tradeRecds.incomeType = tradeInfo.incomeType;
            tradeRecds.costType = tradeInfo.costType;
            tradeRecds.payType = tradeInfo.payType;
            tradeRecds.tradeFlg = tradeInfo.tradeFlg;
            tradeRecds.content = tradeInfo.content;
            tradeRecds.updateStamp = tradeInfo.timeStmp;
            tradeRecds.updateUser = tradeInfo.userInfo.username;
            tradeRecds.createStamp = tradeInfo.timeStmp;
            tradeRecds.createUser = tradeInfo.userInfo.username;
            tradeRecds.save(callback);
        }
    });
};

exports.findTradesOfUser = function (userInfo, callback) {
    db.TradeRecds.find({
        username: userInfo.username,
        tradeDate: { "$gt": userInfo.firstDate },
        tradeDate: { "$lt": userInfo.lastDate }
    }, callback);
};