require('dotenv').config()

exports.HOST = process.env.HOST || 'localhost'
exports.PORT = process.env.PORT || 8000
exports.NODE_ENV = process.env.NODE_ENV || 'development'
exports.RUNNER_PORT=process.env.RUNNER_PORT || 8001
exports.RUNNER_HOST=process.env.RUNNER_HOST || 'localhost'
