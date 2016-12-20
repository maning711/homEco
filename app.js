/*
 * created by maning
 * 2016/04/01
 */
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-Parser');
var session = require('express-session');
var path = require('path');
var signedCookieParser = cookieParser('homeco');
var MongoStore = require('connect-mongo')(session);
var sessionStore = new MongoStore({
    url: 'mongodb://localhost/homeco'
});
var Controllers = require('./controllers');
var Commonfiles = require('./commonfiles');
var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(session({
    secret: 'homEco',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 1000
    },
    store: sessionStore
}));

// check whether is a logined user
app.get('/api/validate',function(req, res) {
    var userId = req.session._userId;
    var loginInfo = req.session.loginInfo;
    if (userId && loginInfo) {
        Controllers.User.findUserById(userId, function(err, user) {
            if (err) {
                res.json(401, {
                    msg: err
                });
            } else {
                req.session.loginInfo.logUsers.username = user.username;
                req.session.loginInfo.logUsers.password2 = user.password2;
                res.json(req.session.loginInfo);
            }
        });
    } else {
        res.status(304).json({
            fail: 'NG',
            message: '该用户不存在！'
        });
    }
});

// login the system
app.post('/api/login', function(req, res) {
    var userInfo = req.body.userInfo;
    if (userInfo) {
        var date = Commonfiles.Commons.getCurMont();
        var loginInfo = {
            logUsers : {
                username: '',
                password2: ''
            },
            homeAccts : {
                lastMontLevel: '',
                currentMontLevel: '',
                cashAcct: ''
            }
        };

        // get the total information of homeAccount
        Controllers.HomeAccounts.findHomeAccountByDate(date, function(err, homeAcct) {
            if (err) {
                res.json(500, {
                    msg: err
                });
            } else {
                if (homeAcct != null) {
                    loginInfo.homeAccts.lastMontLevel = homeAcct.lastMontLevel;
                    loginInfo.homeAccts.currentMontLevel = homeAcct.currentMontLevel;
                    loginInfo.homeAccts.cashAcct = homeAcct.cashAcct;

                    // get the login user's tradeinfo in this month
                    var firstDate = Commonfiles.Commons.getFirstAndLastMonthDay().firstDate;
                    var lastDate = Commonfiles.Commons.getFirstAndLastMonthDay().lastDate;
                    userInfo.firstDate = firstDate;
                    userInfo.lastDate = lastDate;
                    Controllers.TradeRecodes.findTradesOfUser(userInfo, function(err, trade) {
                        if (err) {
                            res.json(500, {
                                msg: err
                            });
                        } else {
                            loginInfo.tradesOfUser = trade;
                        }
                    });
                }

                // get the user's information
                Controllers.User.findUserByInfo(userInfo, function(err, user) {
                    if (err) {
                        res.json(500, {
                            msg: err
                        });
                    } else {

                        // return the user and account information to frontend
                        if (user != null) {
                            req.session._userId = user._id;
                            loginInfo.logUsers.username = user.username;
                            loginInfo.logUsers.password2 = user.password2;
                            req.session.loginInfo = loginInfo;
                            res.json(loginInfo);
                        } else {
                            res.json({
                                status: 'NG',
                                message: '用户名密码错误，请确认后再登录！'
                            });
                        }
                    }
                });
            }
        });
    } else {
        res.status(200).json({
            status: 'NG',
            message: '登录失败！【错误代码：0001】'
        });
    }
});

// signup a user
app.post('/api/regist', function(req, res) {
    var userInfo = req.body.userInfo;
    if (userInfo) {
        Controllers.User.findByEmailOrCreate(userInfo, function(err, user) {
            if (err) {
                res.json(401, {
                    msg: err
                });
            } else {
                res.json(user);
            }
        });
    } else {
        res.json(403);
    }
});

// save the inputed income information
app.post('/api/saveTradeInfo', function(req, res) {
    var tradeInfo = req.body.tradeInfo;
    var tradeFlg = tradeInfo.tradeFlg;
    tradeInfo.userInfo = req.session.loginInfo.logUsers;
    var timeStmp = new Date().getTime();
    tradeInfo.timeStmp = timeStmp;
    var payType = '';
    tradeInfo.date = Commonfiles.Commons.getCurMont();
    tradeInfo.cashAcct = '';

    // payType of inconmes
    if (tradeFlg == '1') {
        if (tradeInfo.payType1) {
            payType = '11';
        } else if (tradeInfo.payType2) {
            payType = '12';
        } else if (tradeInfo.payType3) {
            payType = '13';
        }
    } else if (tradeFlg == '2') {

        // payType of cost
        if (tradeInfo.costType1) {
            payType = '21';
        } else if (tradeInfo.costType2) {
            payType = '22';
        } else if (tradeInfo.costType3) {
            payType = '23';
        } else if (tradeInfo.costType4) {
            payType = '24';
        }
    }
    tradeInfo.payType = payType;
    if (tradeInfo) {
        Controllers.TradeRecodes.saveTradeInfo(tradeInfo, function(err) {
            if (err) {
                res.json(401, {
                    msg: err
                });
            } else {

                // count the home accout again
                var type = '';
                var cashNow = 0;
                var oldAcct = req.session.loginInfo.homeAccts.cashAcct;
                var newAcct = tradeInfo.moneyNum;
                if (tradeFlg == '1') {
                    type = '+'
                } else if (tradeFlg == '2') {
                    type = '-';
                }
                cashNow = Commonfiles.Commons.caculateTwoObj(oldAcct, newAcct, type);
                tradeInfo.cashAcct = cashNow;
                req.session.loginInfo.homeAccts.cashAcct = cashNow;
                Controllers.HomeAccounts.updateHomeAccount(tradeInfo, function(err) {
                    if (err) {
                        res.json(500, {
                            msg: err
                        });
                    }
                });
                res.json(tradeInfo);
            }
        });
    } else {
        res.json(403);
    }
});

// search the tradesInfo
app.post('/api/rtnTotal', function(req, res) {
    var loginInfo = req.session.loginInfo;
    var userInfo = loginInfo.logUsers;

    // get the login user's tradeinfo in this month
    var firstDate = Commonfiles.Commons.getFirstAndLastMonthDay().firstDate;
    var lastDate = Commonfiles.Commons.getFirstAndLastMonthDay().lastDate;
    userInfo.lastDate = lastDate;
    userInfo.firstDate = firstDate;
    Controllers.TradeRecodes.findTradesOfUser(userInfo, function(err, trade) {
        if (err) {
            res.json(500, {
                msg: err
            });
        } else {
            loginInfo.tradesOfUser = trade;
            res.json(loginInfo);
        }
    });
});

// logout the system
app.get('/api/logout', function(req, res) {
    req.session._userId = null;
    req.session.loginInfo = null;
    delete req.session._userId;
    delete req.session.loginInfo;
    res.json(200)
});

// set static resouces path
app.use(express.static(path.join(__dirname, '/static')));
app.use(function (req, res) {
    res.sendFile(path.join(__dirname, './static/index.html'));
});

// listen the express server
var server = app.listen(port, function () {
    console.log('express is listening at ：' + port);
});