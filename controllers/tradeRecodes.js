/**
 * created by maning
 */
var db = require('../models');

// exports.findUserById = function (_userId, callback) {
//     db.TradeRecds.findOne({
//         _id: _userId
//     }, callback);
// };

exports.saveTradeInfo = function (tradeInfo, callback) {
    db.TradeRecds.findOne({
        username: tradeInfo.username,
        password2: tradeInfo.password2,
        tradeDate: tradeInfo.tradeDate
    }, function (err, tradeInfo) {
        if (tradeInfo) {
            callback(null, tradeInfo);
        } else {
            tradeRecds = new db.TradeRecds;
            tradeRecds.username = tradeInfo.username;
            tradeRecds.password1 = tradeInfo.password1;
            tradeRecds.password2 = tradeInfo.password2;
            tradeRecds.incomingMont = "";
            tradeRecds.creaditCard = "";
            tradeRecds.conment = "";
            tradeRecds.save(callback);
        }
    });
};

// exports.online = function (_userId, callback) {
//     db.User.findOneAndUpdate({
//       _id: _userId
//     }, {
//       $set: {
//         online: true
//       }
//     }, callback)
// };

// exports.offline = function (_userId, callback) {
//     db.User.findOneAndUpdate({
//         _id: _userId
//     },{
//         $set: {
//             online: false
//         }
//     },callback)
// }

// exports.getOnlineUsers = function (callback) {
//     db.User.find({
//         online:true
//     },callback)
// }