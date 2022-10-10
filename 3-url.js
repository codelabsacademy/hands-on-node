const address = "http://localhost:3000/test.html?year=2022&month=July"

const url = require("url")

const parsedUrl = url.parse(address,false)
console.log(parsedUrl)