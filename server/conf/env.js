require('dotenv').config()

exports.HOST = process.env.HOST || 'localhost'
exports.PORT = process.env.PORT || 8000
exports.NODE_ENV = 'development'
