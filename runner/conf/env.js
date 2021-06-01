require('dotenv').config()
exports.PORT = process.env.PORT || 8001
exports.HOST = process.env.HOST || 'localhost'
exports.NODE_ENV = process.env.NODE_ENV || 'development'
