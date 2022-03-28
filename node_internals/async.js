// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const http = require("https");

const start = Date.now();

function doRequest() {
  try {
    http
      .request("https://www.google.com", (res) => {
        res.on("data", () => {});
        res.on("end", () => {
          console.log(Date.now() - start);
        });
      })
      .end();
  } catch (error) {
    console.log(error);
  }
}

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
