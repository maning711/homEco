/**
 * created by maning
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PerAccount = new Schema({
    cashAcct: String,
    salaryForMon: String,
    conment: String
});

module.exports = PerAccount;