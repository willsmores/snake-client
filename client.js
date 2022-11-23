// establishes a connection with the game server
const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    conn.write("Name: SCW");
  });

  // conn.on("connect", () => {
  //   conn.write("Move: up");
  // });

  return conn;
};

module.exports = { 
  connect
};