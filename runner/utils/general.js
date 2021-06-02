const exec = require('child_process').exec

exports.jobState = {
    waiting: 'waiting',
    finished: 'finished'
}

exports.run = (command) => {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if(error) {
                reject(error)
            } else {
                const status = {
                    stdout: stdout,
                    stderr: stderr
                }
                resolve(status)
            }
        })
    })
}
