/*
 * @Author: caoyx
 * @Description: 上传的multer中间件
 * @CreateDate: 2018-01-11 18:55:57
 */
var multer  = require('multer');

var storage = multer.diskStorage({
    //设置上传后文件路径
    destination: function (req, file, cb) {
        cb(null, './public/images/active')
    },
    //给上传文件重命名，获取添加后缀名
    filename: function (req, file, cb) {
        var fileformat = (file.originalname).split('.');
        cb(null, file.fieldname+'-'+Date.now()+'.'+fileformat[fileformat.length-1]);
    }
})

var upload = multer({storage: storage});

module.exports = upload;