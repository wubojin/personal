const { createServer } = require("node:http");
const os = require("os");

// Get the hostname of the server dynamically
const hostname = os.hostname();
const port = 8080;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
