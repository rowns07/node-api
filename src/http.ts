import express from "express";
import './database';
import { routes } from './routes';
import { Server, Socket } from 'socket.io';
import { createServer } from 'http';
import path from 'path';

const app = express();
app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

const http = createServer(app); //criando protocolo http 
const io = new Server(http); //criando protocolo de websocket

io.on('connection', (socket: Socket) => {
  console.log("a user connected", socket.id);
});

// app.get("/pages/client", (request, response) => {
//   return response.render("html/client.html");
// })

app.use(express.json())
app.use(routes);

export {http,io}