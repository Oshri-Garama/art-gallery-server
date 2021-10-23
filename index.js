require("dotenv").config();
const routes = require("./routes");

const express = require("express");
const isEmpty = require("lodash/isEmpty");

const app = express();
const http = require("http");
/**
 * Socket IO deals with many of CORS issues, but there are still more to solve
 */
const cors = require("cors");
const { Server } = require("socket.io");
const compression = require("compression");

app.use(compression());
app.use(cors());

app.use("/gallery", routes.gallery);

const server = http.createServer(app);

const conditionalLog = (message) => {
  if (process.env.DEBUG_MODE) {
    console.log(message);
  }
};

const io = new Server(server, {
  cors: {
    origin: process.env.IO_SOCKET_CLIENT_ORIGIN,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  const user_id = socket.id;
  console.log(`Socket connection established with: "${user_id}"`);

  socket.on("join_chat", (data) => {
    const { artId, nickname } = data;
    if (!isEmpty(artId) && !isEmpty(nickname)) {
      socket.join(artId);
      console.log(`The User "${user_id}"(${nickname}) joined room: "${artId}"`);
      // Send message imply that the user joined the conversation
      const welcome_message = {
        ...data,
        message: `${nickname} just entered the room`,
        chatInformation: true,
      };
      socket.to(artId).emit("receive_message", welcome_message);
    }
  });

  socket.on("leave_chat", (data) => {
    const { artId, nickname } = data;
    if (!isEmpty(artId) && !isEmpty(nickname)) {
      const goodbye_message = {
        ...data,
        message: `${nickname} just left the room`,
        chatInformation: true,
      };
      socket.to(artId).emit("receive_message", goodbye_message);

      socket.leave(artId);
      console.log(`The User "${user_id}"(${nickname}) left room: "${artId}"`);
    }
  });

  socket.on("send_message", (data) => {
    if (!isEmpty(data)) {
      const { artId, nickname } = data;
      conditionalLog(
        `The User "${user_id}"(${nickname}) sent this data: ${JSON.stringify(
          data
        )}`
      );

      socket.to(artId).emit("receive_message", data);
      conditionalLog(`The data sent successfully to the client`);
    }
  });

  socket.on("disconnect", () => {
    console.log(`Socket connection was closed by ${user_id}`);
  });
});

server.listen(process.env.SERVER_PORT, () => {
  console.log("Server is running...");
});
