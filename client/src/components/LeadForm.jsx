import React, { useState } from "react";

const LeadForm = ({ onSuccess }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    estimated_value: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setForm({ name: "", email: "", company: "", estimated_value: "" });
        onSuccess();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      />
      <input
        type="text"
        name="company"
        placeholder="Company"
        value={form.company}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      />
      <input
        type="number"
        name="estimated_value"
        placeholder="Estimated Value"
        value={form.estimated_value}
        onChange={handleChange}
        required
        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white rounded-lg py-2 font-medium hover:bg-gray-800 transition disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit Lead"}
      </button>
    </form>
  );
};

export default LeadForm;