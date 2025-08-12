const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function processPayment({ email, amount, metadata }) {
  try {
    await pool.query(
      `INSERT INTO enrollments(email, amount, metadata, paid_at)
       VALUES($1,$2,$3,NOW())
       ON CONFLICT (email) DO UPDATE SET amount = $2, metadata = $3, paid_at = NOW()`,
      [email || null, amount || 2000, JSON.stringify(metadata || {})]
    );
    console.log('payment recorded', email);
    return true;
  } catch (err) {
    console.error('processPayment error', err);
    throw err;
  }
}

module.exports = { processPayment };
