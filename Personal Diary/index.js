import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var userIsAuthorised = false;

app.use(express.urlencoded({ extended: true }));

function passwordCheck(req , res , loop){
  const password = req.body["password"];
  if (password === "ILoveProgramming") {
    userIsAuthorised = true;
  }
  loop();
};

app.use(passwordCheck);
app.use(express.static('public'))

app.get("/", (req, res) => {
res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if(userIsAuthorised === true){
    res.sendFile(__dirname +  "/public/secret.html");
    userIsAuthorised = false;
  }else{
    res.sendFile(__dirname +  "/public/index.html");
    //Alternatively res.redirect("/");
  }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });