const express = require('express');
const router = express.Router();
const { processPayment } = require('../services/paymentService');
const { sendInviteLink } = require('../services/inviteService');

// Note: adapt payload parsing and signature verification to your payment provider.
router.post('/', async (req, res) => {
  try {
    const payload = req.body;
    // Example fields; change as needed for your provider
    const email = payload.email || (payload.metadata && payload.metadata.email) || null;
    const amount = payload.amount || 2000;
    const status = (payload.status || payload.payment_status || '').toString().toLowerCase();

    console.log('Webhook received', { status, email });

    if (status === 'paid' || status === 'success' || status === 'completed') {
      await processPayment({ email, amount, metadata: payload });
      await sendInviteLink({ email, metadata: payload });
      // reply quickly so provider knows webhook was processed
      return res.json({ ok: true });
    }

    return res.json({ ok: false, reason: 'not-paid' });
  } catch (err) {
    console.error('webhook error', err);
    res.status(500).send('error');
  }
});

module.exports = router;
