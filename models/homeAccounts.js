/**
 * created by maning
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HomeAccount = new Schema({
    date: String,
    cashAcct: String,
    noCashAcct: String,
    loanHouse: String,
    lastMontLevel: String,
    currentMontLevel: String,
    conment: String,
    updateStamp: String,
    updateUser: String,
    createStamp: String,
    createUser: String
});

module.exports = HomeAccount;