const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.post('/', async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: 'message required' });

  try {
    const resp = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini', // replace with the model you have access to
        messages: [{ role: 'user', content: message }],
        max_tokens: 400
      })
    });
    const data = await resp.json();
    res.json(data);
  } catch (err) {
    console.error('chat proxy error', err);
    res.status(500).json({ error: 'chat proxy error' });
  }
});

module.exports = router;
