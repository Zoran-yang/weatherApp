// Import necessary modules
import path from "path";
import express from "express";

// Set the port to the environment variable or a default value
const port = process.env.PORT || 8080;

// Initialize Express
const app = express();

// Uncomment below line if you have a favicon in the specified directory
// app.use(favicon(__dirname + '/build/favicon.ico'));

// Serve static files from the current directory
app.use(express.static(__dirname));

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, "dist")));

// Handle a GET request to '/ping' and return 'pong'
app.get("/ping", function (req, res) {
  return res.send("pong");
});

// Handle all other GET requests and return the 'index.html' file in the 'dist' directory
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start the Express server
app.listen(port);
