/**
 * created by maning
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    username: String,
    password1: String,
    password2: String,
    incomingMont: String,
    creaditCard: Boolean,
    conment: String
});

module.exports = User;