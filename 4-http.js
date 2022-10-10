const http = require("http")
const url = require("url")
const fs = require("fs")

const server = http.createServer((req,res)=>{

    if(req.url==="/"){

        fs.readFile("index.html","utf8",(err, data)=>{
            if(err) throw err
            res.write(data)
            res.end()
        })
    }

    if(req.url==="/about"){
        res.write('About')
        res.end()
    }

    if(req.url==="/user?name=Rayene&age=20"){
        var query = url.parse(req.url,true).query
        
        res.write(`User name ${query.name} with age ${query.age}`)
        res.end()
    }
    
    
})

server.listen("3467",()=>console.log("server running"))