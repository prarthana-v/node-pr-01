const http = require("http");
const fs = require("fs");
const port = 8080;

http
  .createServer((req, res) => {
    // res.write(`<h1>hello world</h1>`);
    // console.log(req.url);

    let fileName = "";
    switch (req.url) {
      case "/":
        fileName = "./index.html";
        break;

      case "/about":
        fileName = "./about.html";
        break;

      case "/contact":
        fileName = "./contact.html";
        break;

      default:
        fileName = "./404.html";
        break;
    }
    fs.readFile(fileName, (err, data) => {
      if (err) {
        console.log(err);
        return false;
      }
      res.end(data);
    });
  })
  .listen(port);
