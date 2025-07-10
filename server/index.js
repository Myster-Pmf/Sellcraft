const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const serverless = require('serverless-http');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

app.post('/newsletter', async (req, res) => {

  const { email } = req.body;
  try {
    const newEmail = await pool.query(
      'INSERT INTO emails (email) VALUES ($1) RETURNING *',
      [email]
    );
    res.json(newEmail.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});


module.exports = serverless(app);
