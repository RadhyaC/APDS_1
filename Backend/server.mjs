import https from "https";
import http from "http";
import fs from "fs";
import posts from "./routes/post.mjs";
import users from "./routes/user.mjs";
import express from "express"
import cors from "cors"
//import app from "./app.mjs";

const PORT = 3001;
const app = express();

const options = {
    key: fs.readFileSync('Keys/privatekey.pem'),
    cert: fs.readFileSync('Keys/certificate.pem')
}

app.use(cors());
app.use(express.json());

app.use((reg, res, next) =>
{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    next();
})

app.use("/fruit", fruits); 
app.route("/fruit", fruits);
app.use("/user", users);
app.route("/user", users);

let server = https.createServer(options, app)
console.log(PORT)
server.listen(PORT);