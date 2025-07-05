import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../frontend/build')));

// In-memory user and timeline storage
const users = {};
const timelines = {};

app.post('/api/register', (req, res) => {
  const id = crypto.randomUUID();
  users[id] = { id, ...req.body };
  timelines[id] = [];
  res.json({ id });
});

app.post('/api/:uid/friend', (req, res) => {
  timelines[req.params.uid].push({ id: crypto.randomUUID(), ...req.body });
  res.json({ ok: true });
});

app.get('/api/:uid/timeline', (req, res) => {
  res.json(timelines[req.params.uid] || []);
});

// Fallback to index.html for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
