const fs = require("fs");
const path = require("path");

function homeHandler(request, response) {
  // public directory is one level above this, so we need the ".."
  const filePath = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(404, { "content-type": "text/html" });
      response.end("<h1>Not found</h1>");
    } else {
      response.writeHead(200, { "content-type": "text/html" });
      response.end(file);
    }
  });
}
module.exports = homeHandler;
