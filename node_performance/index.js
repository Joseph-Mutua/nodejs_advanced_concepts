// process.env.UV_THREADPOOL_SIZE =1
// const cluster = require("cluster");

// if (cluster.isMaster) {
// Cause index.js to be executed again but in child mode
//   cluster.fork(); //Starts one child node //Every child has its own threadpool with 4 threads
//  NB: INCREASING THE NUMBER OF CHILDREN BEYOND THE NUMBER OF PHYSICAL CORES
//      HAS DIMINISHING RETURNS ON THE PERFORMANCE OF THE PROGRAM

//   cluster.fork();
//   cluster.fork();
//   cluster.fork();
//   cluster.fork();
// } else {
//Child, acts like a server and does nothing else
//   const express = require("express");
//   const crypto = require("crypto");
//   const app = express();

//   app.get("/", (req, res) => {
//     crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
//       res.send("Hi There!");
//     });
//   });

//   app.get("/fast", (req, res) => {
//     res.send("This was fast!");
//   });

//   app.listen(3000);
// }

// USING PM2 FOR CLUSTER MANAGEMENT
const express = require("express");
const crypto = require("crypto");
const app = express();

app.get("/", (req, res) => {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    res.send("Hi There!");
  });
});

app.get("/fast", (req, res) => {
  res.send("This was fast!");
});

app.listen(3000);
