/**
 * created by maning
 */
var db = require('../models');

exports.findUserById = function (_userId, callback) {
    db.User.findOne({
        _id: _userId
    }, callback);
};

exports.findUserByInfo = function (userInfo, callback) {
    db.User.findOne({
        username: userInfo.username,
        password1: userInfo.password1,
        password2: userInfo.password2
    }, callback);
};

exports.findByEmailOrCreate = function (userInfo, callback) {
    db.User.findOne({
        username: userInfo.username,
        password1: userInfo.password1,
        password2: userInfo.password2
    }, function (err, user) {
        if (user) {
            callback(null, user);
        } else {
            user = new db.User;
            user.username = userInfo.username;
            user.password1 = userInfo.password1;
            user.password2 = userInfo.password2;
            user.incomingMont = "";
            user.creaditCard = "";
            user.conment = "";
            user.save(callback);
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