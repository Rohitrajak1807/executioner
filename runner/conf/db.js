const mongoose = require('mongoose')
const {DB_URI} = require('./env')
exports.connectDB = function () {
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then(() => console.log(`connected to DB`)).catch(err => console.log(err))
}
