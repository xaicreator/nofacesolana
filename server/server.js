
const express = require('express');const app = express();
app.get("/", (req, res) => {
  res.send("✅ NoFace Chess backend is running!");
});
app.listen(3001, () => console.log("✅ Leaderboard API on http://localhost:3001"));
const WebSocket = require('ws');
const app = express();
const wss = new WebSocket.Server({ port: 3000 });
console.log("✅ WebSocket running on ws://localhost:3000");
app.listen(3001,()=>console.log("✅ Leaderboard API on http://localhost:3001"));
