// const { MongoClient } = require('mongodb')

// let dbConnection;
// const url = 'mongodb://localhost:27017/Professors'

// module.exports = {
//     connectToDb: (cb) => {
//         MongoClient.connect(url)
//             .then((client) => {
//                 dbConnection = client.db()
//                 console.log("hi")
//                 return cb()
//             })
//             .catch(err => {
//                 console.log(err)
//                 return cb(err)
//             })
//     },
//     getDb : () => dbConnection
// }    