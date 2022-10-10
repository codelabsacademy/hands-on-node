const fs = require("fs")

fs.readFile("message.txt","utf8",(err,data)=>{
    if(err) throw err
    console.log(data)
})

fs.writeFileSync("message.txt","Nez content",{},(err)=>{
    if (err) throw err
    console.log("content written")
})

fs.appendFileSync("message.txt","\n test",(err)=>{
    if (err) throw err
    console.log("content appended")
})