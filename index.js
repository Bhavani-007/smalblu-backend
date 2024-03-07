/*import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import Route from './Routes/Route.js';
import cookieParser from 'cookie-parser';
import WebSocket from 'ws'; // Import WebSocket library
import http from 'http'; // Import HTTP module

dotenv.config({ path: "./configuration.env" });

const app = express();
const server = http.createServer(app); // Create HTTP server

const { PORT, MONGO_URL } = process.env;

app.use(
    cors({
      origin: ['http://localhost:3000','https://smalblu-frontend.onrender.com', 'http://smalblu-frontend.onrender.com'],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
);

app.use(cookieParser());
  
app.use(express.json());

app.use('/', Route);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("App connected to database");
    server.listen(PORT, '127.0.0.1', () => { // Start HTTP server
      console.log(`Listening to PORT:${PORT}`);
    });

    const wss = new WebSocket.Server({ server }); // Attach WebSocket server to HTTP server

    wss.on('connection', (ws) => { // WebSocket connection handler
      console.log('Client connected to WebSocket server');

      ws.on('message', (message) => { // WebSocket message handler
        console.log(`Received message: ${message}`);
        // Handle incoming messages
      });

      ws.on('close', () => { // WebSocket close handlers
        console.log('Client disconnected from WebSocket server');
      });
    });
  })
  .catch((error) => {
    console.log("Error connecting to database: " + error);
  });*/


import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import Route from './Routes/Route.js';
import cookieParser from 'cookie-parser';

dotenv.config({ path: "./configuration.env" });

const app = express();

const {PORT, MONGO_URL } = process.env;



app.use(
    cors({
      origin: ['http://localhost:3000','https://smalblu-frontend.onrender.com', 'http://smalblu-frontend.onrender.com'],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );

app.use(cookieParser());
  
app.use(express.json());

app.use('/',Route);



mongoose
.connect(MONGO_URL)
.then(()=>{
  console.log("App connected to database");
    app.listen(PORT, '127.0.0.1', ()=>{
        console.log(`Listening to PORT:${PORT}`);
        
    })
    
})
.catch((error)=>{
    console.log("error connecting to database: "+error);
})