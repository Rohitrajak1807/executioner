const fs = require('fs')
const os = require('os')
const path = require('path')

const BASE_DIR = os.tmpdir()

exports.mkdir = function (id) {
    const pathSpec = path.join(BASE_DIR, id)
    return fs.promises.mkdir(pathSpec)
}
