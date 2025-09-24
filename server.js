const http = require('http'); // Import the built-in HTTP module

const hostname = '127.0.0.1'; // Localhost IP address
const port = 443; // Port the server will listen on

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header
  res.statusCode = 200; // OK status
  res.setHeader('Content-Type', 'text/plain'); // Plain text content

  // Send the response body
  res.end('Hello World from your Node.js server!\n');
});

// Start the server and listen for incoming requests
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
