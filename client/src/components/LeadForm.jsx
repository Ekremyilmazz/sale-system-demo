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
    <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="company"
        placeholder="Company"
        value={form.company}
        onChange={handleChange}
      />
      <input
        type="number"
        name="estimated_value"
        placeholder="Estimated Value"
        value={form.estimated_value}
        onChange={handleChange}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit Lead"}
      </button>
    </form>
  );
};

export default LeadForm;