/*
 * created by maning
 * 2016/04/12
 */

/*
 * get the current date (yyyy/mm)
 * no input
 * return date
 */ 
exports.getCurMont = function () {
    var myDate = new Date();
    var myMon = myDate.getMonth()+1;
    var date=myDate.getFullYear()+'/'+(myMon < '10' ? '0' + myMon : myMon);
    return date;
};

/*
 * get the current date (yyyy/mm)
 * no input
 * return date
 */ 
exports.caculateTwoObj = function (objA, objB, type) {
    var numA = Number(objA);
    var numB = Number(objB);
    var total = 0;
    if (numA != undefined && numB != undefined
        && numA != NaN && numB != NaN 
        && numA != null && numB != null) {
        if (type == '+') {
            debugger;
            total = numA + numB;
        } else if (type == '-') {
            total = numA - numB;
        } else if (type == '*') {
            total = numA * numB;
        } else if (type == '/') {
            total = numA / numB;
        } else if (type == '%') {
            total = numA % numB;
        } else {
            console.log('the input type is not a defined one!');
        }
    }
    return total.toString();
};