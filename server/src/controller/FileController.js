// const qiniu = require('qiniu')

// var accessKey = 'fR9TmaFR-UET6_m-50asLKYpXBwkY8EhFax56AP4';
// var secretKey = '0NlWL4kwtvYOtjaOTOELCNQwjsz_xzQu0-HXiDUc';
// var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

// var putPolicy = new qiniu.rs.PutPolicy({
//   scope: 'fullstackvueexpress'
// });
// var uploadToken=putPolicy.uploadToken(mac);

// var config = new qiniu.conf.Config();
// config.zone = qiniu.zone.Zone_z0;

// var localFile = "/Users/bing/Desktop/2018讲义.pdf";
// var filetype = 'pdf';
// var formUploader = new qiniu.form_up.FormUploader(config);
// var putExtra = new qiniu.form_up.PutExtra();
// var key='2018讲义_'+ (new Date().toDateString()) +"_"+ Math.floor(Math.random() * 10000) + '.' + filetype;
// // 文件上传
// formUploader.putFile(uploadToken, key, localFile, putExtra, (respErr, respBody, respInfo) => {
//   if (respErr) {
//     throw respErr;
//   }
//   if (respInfo.statusCode == 200) {
//     console.log(respBody);
//   } else {
//     console.log(respInfo.statusCode);
//     console.log(respBody);
//   }
// });

// // module.exports = {
// //   upload(req, res) {
    
// //   },
// // }