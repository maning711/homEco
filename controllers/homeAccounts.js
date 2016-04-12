/**
 * created by maning
 */
var db = require('../models');

exports.findHomeAccountByDate = function (_date, callback) {
    db.HomeAccounts.findOne({
        date: _date
    }, callback);
};