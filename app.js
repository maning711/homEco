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
var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(session({
    secret: 'homeco',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 1000 * 60
    },
    store: sessionStore
}));

// set static resouces path
app.use(express.static(path.join(__dirname, '/static')));
app.use(function (req, res) {
    res.sendFile(path.join(__dirname, './static/index.html'));
});

app.use('/api/validate',function(req, res) {
    var userId = req.session._userId;
    if (userId) {
        Controllers.User.findUserById(userId, function(err, user) {
            if (err) {
                res.json(401, {
                    msg: err
                });
            } else {
                res.json(user);
            }
        });
    } else {
        res.status(401).json(null);
    }
});

app.post('/api/login', function(req, res) {
    var userInfo = req.session.userInfo;
    if (userInfo) {
        Controllers.User.findUserByInfo(userInfo, function(err, user) {
            if (err) {
                res.json(500, {
                    msg: err
                });
            } else {
                req.session._userId = user._id;
                res.json(user);
            }
        });
    } else {
        res.json(403);
    }
});

app.post('/api/regist', function(req, res) {
    var userInfo = req.session.userInfo;
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

app.get('/api/logout', function(req, res) {
    delete req.session._userId
});

// listen the express server
var server = app.listen(port, function () {
    console.log('系统开始监听端口：' + port);
});