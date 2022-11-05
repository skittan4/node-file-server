const http = require("http");
const router = require("./router");

const server = http.createServer(router);

server.listen(3000, () => console.log(`Listening at http://localhost:3000`));
