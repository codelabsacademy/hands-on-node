const fs = require("fs");
var generator = require("generate-password");

const storePassword = (path, password, key) => {
  var storedPassword = `${key},${password}\n`;
  fs.appendFileSync(path, storedPassword, (err) => {
    if (err) throw err;
    console.log("Password stored successfully");
  });
};

const retrievePassword = (path, key) => {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
    const lines = data.split("\n");
    const line = lines.find((line) => line.split(",")[0] === key);
    console.log(
      `the corresponding password for key ${key} is`,
      line.split(",")[1]
    );
  });
};

// const students = ["Rayene","Chakib", "Dania", "Lilia"]

// students.map((student)=>{
//     var password = generator.generate({
//         length: 10,
//         numbers: true
//     });

//     storePassword("password.txt",password,student)
// })

retrievePassword("password.txt", "Abir");
