/*
 * created by maning
 * 2016/04/12
 */
exports.getCurMont = function () {
    var myDate = new Date();
    var myMon = myDate.getMonth()+1;
    var date=myDate.getFullYear()+'/'+(myMon < '10' ? '0' + myMon : myMon);
    return date;
}