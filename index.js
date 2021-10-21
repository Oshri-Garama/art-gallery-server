require("dotenv").config();
const express = require("express");
const { isEmpty } = require("lodash");

const app = express();
const http = require("http");
/**
 * Socket IO deals with many of CORS issues, but there are still more to solve
 */
const cors = require("cors");
const { Server } = require("socket.io");

app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.IO_SOCKET_CLIENT_ORIGIN,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  const user_id = socket.id;
  console.log(`Socket connection established with: ${user_id}`);

  socket.on("join_chat", ({ artId }) => {
    if (!isEmpty(artId)) {
      socket.join(artId);
      console.log(`User with id: ${user_id} joined room: ${artId}`);
    }
  });

  socket.on("send_message", (data) => {
    if (!isEmpty(data)) {
      const { roomId, userName, message, time } = data;
      console.log(
        `User with id: ${user_id} sent this data: ${JSON.stringify(data)}`
      );
    }
  });

  socket.on("disconnect", () => {
    console.log(`Socket connection was closed by ${user_id}`);
  });
});

server.listen(process.env.SERVER_PORT, () => {
  console.log("Server is running...");
});
