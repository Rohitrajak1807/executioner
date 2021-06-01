const fs = require('fs')
const os = require('os')
const path = require('path')
const {langs} = require('server/utils/lang')
const baseDir = os.tmpdir()

exports.mkDir = function (idStr) {
    const pathSpec = path.join(baseDir, idStr)
    return fs.promises.mkdir(pathSpec)
}

exports.rmDir = function (pathSpec) {
    return fs.promises.rmdir(pathSpec, {
        recursive: true
    })
}

exports.writeFile = function (srcDir, src, lang) {
    const extension = langs[lang].extension
    const fileName = path.join(srcDir, `src${extension}`)
    return fs.promises.writeFile(fileName, src)
}
