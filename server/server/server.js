
const express = require('express');
const WebSocket = require('ws');
const app = express();
const wss = new WebSocket.Server({ port: 3000 });
console.log("✅ WebSocket running on ws://localhost:3000");
app.listen(3001,()=>console.log("✅ Leaderboard API on http://localhost:3001"));
