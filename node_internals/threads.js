const crypto = require("crypto");

// Check how long the function takes to run in ms
const start = Date.now();

// First Run
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("1: ", Date.now() - start);
});

// Second Run
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("2: ", Date.now() - start);
});

// Third Run
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("3: ", Date.now() - start);
});

// Fourth Run
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("4: ", Date.now() - start);
});

// Fifth Run
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("5: ", Date.now() - start);
});