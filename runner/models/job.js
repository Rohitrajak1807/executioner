const mongoose = require('mongoose')
const JobSchema = new mongoose.Schema({
    src: {type: String, required: true},
    stdin: {type: String, required: false},
    lang: {type: String, required: true},
    id: {type: String, required:true, unique: true},
    state: {type: String, required: true}
}, {
    collection: 'jobs',
})

exports.Job = mongoose.model('JobSchema', JobSchema)
