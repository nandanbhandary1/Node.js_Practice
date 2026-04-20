const fs = require("fs");

// fs.writeFileSync("./test.txt", "Hey there"); // SYNC CALL

// fs.writeFile("./test.txt", "Hey there", (err) => {});  // CALL BACK FUNCN IN ASYNC

// const result = fs.readFileSync('./contacts.txt', "utf-8")

// fs.readFile('./contacts.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })

// console.log(result)


fs.appendFileSync('./test.txt', "Meoww")
