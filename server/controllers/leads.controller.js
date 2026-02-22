import pool from "../db.js";

// Create a new lead
export const createLead = async (req, res) => {
  try {
    const { name, email, company, estimated_value } = req.body;
    const result = await pool.query(
      `INSERT INTO leads (name, email, company, estimated_value) 
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [name, email, company, estimated_value]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// Get all leads
export const getAllLeads = async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM leads ORDER BY id DESC`);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// Update lead status
export const updateLeadStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, closed_value } = req.body;

    const result = await pool.query(
      `UPDATE leads 
       SET status = $1, closed_value = COALESCE($2, closed_value) 
       WHERE id = $3 
       RETURNING *`,
      [status, closed_value, id]
    );

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};