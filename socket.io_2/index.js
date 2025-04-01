import express from 'express';
import http from 'http';
import { fileURLToPath } from 'url';
import { dirname,join } from 'path';
import {Server} from "socket.io"

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// 3. Serve HTML file

