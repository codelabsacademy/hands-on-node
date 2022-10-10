const path = require("path")

const fileLocation = path.join(__dirname,"abir.js")

console.log(fileLocation)

const ext = path.extname(fileLocation)
console.log(ext)

const dir = path.dirname(fileLocation)
console.log(dir)

const name = path.basename(fileLocation)
console.log(name)