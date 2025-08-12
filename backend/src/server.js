require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const webhookRouter = require('./routes/webhook');
const chatRouter = require('./routes/chat');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/health', (req, res) => res.json({ ok: true, env: process.env.NODE_ENV }));

app.use('/webhook', webhookRouter);
app.use('/api/chat', chatRouter);

// simple courses endpoint
app.get('/courses', (req, res) => {
  res.json([
    { id: 'devops', title: 'DevOps Mastery', price: 2000 },
    { id: 'cloud', title: 'Cloud Computing', price: 2000 },
    { id: 'cyber', title: 'Cybersecurity', price: 2000 }
  ]);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Backend listening on ${port}`));
