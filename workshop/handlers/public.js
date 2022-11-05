const fs = require("fs");
const path = require("path");
const types = { // possible types of file received
  html: "text/html",
  css: "text/css",
  js: "application/javascript",
  jpg: "image/jpeg",
  ico: "image/x-icon"
};

function publicHandler(request, response) {
  
  const filename = request.url.split("/");
  const urlArray = request.url.split("."); // make array of [file path (include filename) , extention] 
    const extension = urlArray[1]; // takes array[1] which is extention
    const type = types[extension]; //choose the type file types list per the extention from the array
    

  const filePath = path.join(__dirname, "..", "public", filename[filename.length-1]); // makes the path universal cross platform , ".." jump one level up in folders
  fs.readFile(filePath, (error, file) => { // this functution takes filepath and aply a new function on it which includes error in case of error and file to apply the if condition on
    if (error) {
      console.log(error);// shown only in debug log 
      response.writeHead(404, { "content-type": "text/html" });
      response.end("<h1>Site Not found</h1>");
    } else {
      response.writeHead(200, { "content-type": type }); // web success, define response type;
      response.end(file); // the file returned to the user
    }
  });
}

module.exports = publicHandler; // exports the function to be available to access 
