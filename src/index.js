/*const bedrock = require("minecraft-bedrock-server");

const onStart = (data) => console.log("Server started!", data);

bedrock.startServer("1.18.0", onStart, {
  "server-port": 19132,
  "online-mode": true,
  //path: "./bds",
});*/

const { join } = require("path");

const path = join(__dirname, "/bds");

console.log({ path });
