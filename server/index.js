const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} New req received \n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/home":
        res.end("Home page");
        break;
      case "/about":
        res.end("I am Nandan");
        break;
      default:
        res.end("404 not found");
    }
  });
});

server.listen(8000, () => console.log("Server started"));
