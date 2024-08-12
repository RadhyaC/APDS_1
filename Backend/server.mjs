import https from "https";
import fs from "fs";
//import app from "./app.mjs";

const PORT = 3000;

const server = https.createServer({
    key: fs.readFileSync('Keys/privatekey.pem'),
    cert: fs.readFileSync('Keys/certificate.pem')
})
server.listen(PORT);