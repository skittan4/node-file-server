const fs = require("fs");
const path = require("path");
console.log("try out the fs module here");

const types = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
  };

//fs.readFile("workshop/not-real.txt", { encoding: "utf-8" }, (error, file) => {console.log(file)});

fs.readFile(path.join(__dirname, "test.txt"), { encoding: "utf-8" }, (error, file) => {
    if (error) {console.log(error);}
     else {console.log(file);}
  });

  function router(request, response) {
    const urlArray = request.url.split("."); // e.g. "/style.css" -> ["/style", "css"]
    const extension = urlArray[1]; // e.g. "css"
    const type = types[extension]; // e.g. "text/css"
    response.writeHead(200, { "content-type": type });
    // ...
  }