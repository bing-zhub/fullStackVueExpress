// const qiniu = require('qiniu')

// qiniu.conf.ACCESS_KEY = 'Access_Key'
// qiniu.conf.SECRET_KEY = 'Secret_Key'

// bucket = 'Bucket_Name'
// key = ''

// filePath = './ruby-logo.png'

// function uploadToken(bucket, key) {
//   var putPolicy = new qiniu.rs.PutPolicy(bucket+":"+key)
//   return putPolicy.token()
// }

// module.exports = {
//   uploadFile(key, localFile) {
//     var extra = new qiniu.io.PutExtra()
//     token = uploadToken(bucket, key)
//     qiniu.io.putFile(token, key, localFile, extra, function(err, ret) {
//       if(!err) {
//         console.log(ret.hash, ret.key, ret.persistentId);      
//       } else {
//         console.log(err)
//       }
//     })
//   }
// }

// uploadFile(token, key, filePath);