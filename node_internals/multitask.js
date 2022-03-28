const http = require("https");
const crypto = require("crypto");
const fs = require("fs");

const start = Date.now();

function doRequest() {
  try {
    http
      .request("https://www.google.com", (res) => {
        res.on("data", () => {});
        res.on("end", () => {
          console.log("REQUEST", Date.now() - start);
        });
      })
      .end();
  } catch (error) {
    console.log(error);
  }
}

function doHash() {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log("HASH: ", Date.now() - start);
  });
}

doRequest();

fs.readFile("multitask.js", "utf-8", () => {
  console.log("FS: ", Date.now() - start);
});

doHash();
doHash();
doHash();
doHash();