/*
 * @Author: caoyx
 * @Description: 操作用户信息的数据库，增删查改
 * @CreateDate: 2018-01-08 10:56:18
 */

var db = require('./db');
var mongoose = require('mongoose');

// 1.创建Schema
var PostSchema = new mongoose.Schema({
    name: {type:String},
    portrait: {type:String},
    title: {type:String},
    post: {type:String},
    time: {type:Date, default:Date.now}
});

// 2.创建模型
var PostModel = db.model("posts", PostSchema);

module.exports = PostModel;