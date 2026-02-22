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
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="flex flex-wrap gap-4 mb-6">
        <StatsCard title="Total Leads" value={stats.totalLeads} />
        <StatsCard title="Won Deals" value={stats.wonDeals} />
        <StatsCard title="Total Revenue" value={`$${stats.totalRevenue}`} />
        <StatsCard title="Conversion Rate" value={`${stats.conversionRate}%`} />
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6">
        <LeadTable leads={leads} onStatusChange={handleStatusChange} />
      </div>
    </div>
  );
};

export default Dashboard;