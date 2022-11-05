const fs = require("fs");

fs.readFile("workshop/test.txt", "utf-8", (error, file) => {
  if (error) {
    console.log(error);
  } else {
    console.log(file);
  }
});
