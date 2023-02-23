const bedrock = require("minecraft-bedrock-server");

const onStart = () => console.log("Server started!");

bedrock.startServer("1.18.0", onStart, {
  "server-port": 19132,
  "online-mode": true,
  path: "./bds",
});
