/*
 * @Author: caoyx
 * @Description: 连接到数据库
 * @CreateDate: 2018-01-05 18:55:57
 */

var settings = require('../settings');
var mongoose = require('mongoose');

mongoose.connect(settings.url);
var db = mongoose.connection;
db.on('connected', console.error.bind(console, '连接成功'));
db.on('error', console.error.bind(console, '连接失败'));
db.on('disconnected', console.error.bind(console, '连接断开'));

module.exports = db;