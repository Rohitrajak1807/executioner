const uuid4 = require('uuid4')

exports.newRandomUid = () => {
    return uuid4() + new Date().getTime()
}

exports.errorResponse = (code, message) => {
    return {
        status: 'error',
        data: null,
        error: {
            code: code,
            message: message
        }
    }
}

exports.successResponse = (data) => {
    return {
        status: 'ok',
        data: data
    }
}

exports.jobState = {
    waiting: 'waiting',
    finished: 'finished'
}
