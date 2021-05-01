const http = require("http");
const fs = require("fs");

//create a server object:
http
  .createServer(function (req, res) {
    console.log(req.url);
    if (req.method === "GET") {
      if (req.url === "/") {
        try {
          const data = fs.readFileSync("./frontend/index.html", "utf8");
          res.write(data);
        } catch (err) {
          console.error(err);
        }
      } else if (req.url === "/home") {
        try {
          const data = fs.readFileSync("./frontend/home.html", "utf8");
          res.write(data);
        } catch (err) {
          console.error(err);
        }
      } else if (req.url === "/styles.css") {
        res.writeHead(200, { "Content-Type": "text/css" });
        const data = fs.readFileSync("./frontend/styles.css", "utf8");
        res.write(data);
      } else if (req.url === "/myscript.js") {
        const data = fs.readFileSync("./frontend/myscript.js", "utf8");
        res.write(data);
      } else {
        res.writeHead(404);
        res.write("Not found");
      }
    } else {
      res.write("Hello World!");
    }
    res.end(); //end the response
  })
  .listen(80); //the server object listens on port 8080
