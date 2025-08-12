const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const WHATSAPP_LINK = process.env.WHATSAPP_LINK;

async function sendInviteLink({ email, metadata }) {
  try {
    await pool.query('INSERT INTO invites(email, meta, sent_at) VALUES($1,$2,NOW())', [email || null, JSON.stringify(metadata || {})]);
    console.log(`Invite recorded for ${email} -> ${WHATSAPP_LINK}`);
    // In production you'd send email/SMS or return a one-time join link.
    return WHATSAPP_LINK;
  } catch (err) {
    console.error('sendInviteLink error', err);
    throw err;
  }
}

module.exports = { sendInviteLink };
