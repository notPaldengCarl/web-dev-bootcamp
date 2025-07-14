//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var AuthorizedUser = false;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended: true}));

function passCheck (req,res,next) {
  const password = req.body["password"];
  if (password === "ILoveProgramming") {
    AuthorizedUser = true;
  }
  next();
}

app.use(passCheck);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if (AuthorizedUser) {
    res.sendFile(__dirname + "/public/secret.html");
    } else {
     res.sendFile(__dirname + "/public/index.html");   
    }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
