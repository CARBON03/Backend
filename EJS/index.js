import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;


app.get("/", (req, res) => {

    const today = new Date();
    const day = today.getDay()

    let type = "A weekday";
    let adv = "Work Hard!";

    if(day === 0 || day ===6){
        type = "A weekend";
    }

    res.render( "index.ejs" , {
        dayType: type , 
        advice: adv
      });
    });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });