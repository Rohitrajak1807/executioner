const fs = require('fs')
const path = require('path')

exports.mkDir = (pathSpec) => fs.promises.mkdir(pathSpec)

exports.writeFile = (dir, fileName, content) => fs.promises.writeFile(path.join(dir, fileName), content)

exports.readFile = (pathSpec) => fs.promises.readFile(pathSpec, 'utf-8')

exports.rmDir = (pathSpec) => fs.promises.rm(pathSpec, {recursive: true})

exports.readResults = async (dir, outputFile) => {
    const path = path.join(dir, outputFile)
    return fs.promises.readFile(path, 'utf-8')
}
