import app from "./src/app.js";
import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
    console.log("connected")

    socket.on("message",(data)=>{
        console.log(data)
        io.emit("abc",data)
    })
});

httpServer.listen(3000, () => {
    console.log("Server running at port 3000")
})