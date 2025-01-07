import express from"express";
import bodyparser from "body-parser";

import  routes from "./routes/user.js";


const app = express();
const port = 5000;

app.use(bodyparser.json());

app.use("users"/routes);

app.listen(port,() => console.log("server is running"));