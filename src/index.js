const bedrock = require("minecraft-bedrock-server");

const onStart = (data) => console.log("Server started!", data);

bedrock.startServer("1.18.0", onStart, {
  "server-port": 19132,
  "online-mode": true,
  path: "./bds",
});

/*
const { readdirSync } = require("fs");

const path = ".";
const files = readdirSync(path);

console.log({ files });
*/
