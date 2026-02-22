import pool from "../db.js";

export const getDashboardStats = async (req, res) => {
  try {
    const totalLeadsResult = await pool.query(`SELECT COUNT(*) FROM leads`);
    const wonDealsResult = await pool.query(`SELECT COUNT(*) FROM leads WHERE status='won'`);
    const totalRevenueResult = await pool.query(`SELECT COALESCE(SUM(closed_value),0) FROM leads WHERE status='won'`);

    const totalLeads = parseInt(totalLeadsResult.rows[0].count, 10);
    const wonDeals = parseInt(wonDealsResult.rows[0].count, 10);
    const totalRevenue = parseFloat(totalRevenueResult.rows[0].coalesce);
    const conversionRate = totalLeads ? (wonDeals / totalLeads) * 100 : 0;

    res.status(200).json({
      totalLeads,
      wonDeals,
      totalRevenue,
      conversionRate: conversionRate.toFixed(2)
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};