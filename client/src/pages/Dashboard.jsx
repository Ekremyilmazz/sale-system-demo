import React, { useEffect, useState } from "react";
import StatsCard from "../components/StatsCard.jsx";
import LeadTable from "../components/LeadTable.jsx";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalLeads: 0,
    wonDeals: 0,
    totalRevenue: 0,
    conversionRate: 0
  });
  const [leads, setLeads] = useState([]);

  const fetchLeads = async () => {
    const res = await fetch("http://localhost:5000/api/leads");
    const data = await res.json();
    setLeads(data);
  };

  const fetchStats = async () => {
    const res = await fetch("http://localhost:5000/api/dashboard");
    const data = await res.json();
    setStats(data);
  };

  useEffect(() => {
    fetchLeads();
    fetchStats();
  }, []);

  const handleStatusChange = async (id, status) => {
    await fetch(`http://localhost:5000/api/leads/${id}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status })
    });
    fetchLeads();
    fetchStats();
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Admin Dashboard</h1>

      <div style={{ display: "flex", marginBottom: "1rem" }}>
        <StatsCard title="Total Leads" value={stats.totalLeads} />
        <StatsCard title="Won Deals" value={stats.wonDeals} />
        <StatsCard title="Total Revenue" value={`$${stats.totalRevenue}`} />
        <StatsCard title="Conversion Rate" value={`${stats.conversionRate}%`} />
      </div>

      <LeadTable leads={leads} onStatusChange={handleStatusChange} />
    </div>
  );
};

export default Dashboard;