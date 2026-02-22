import { useState } from "react";
import LeadForm from "../components/leadForm";

const LandingPage = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Boost Your Sales Pipeline</h1>
      <p>Submit your leads and watch them flow into your dashboard automatically.</p>

      {!submitted ? (
        <LeadForm onSuccess={() => setSubmitted(true)} />
      ) : (
        <div style={{ marginTop: "1rem", color: "green" }}>
          Lead submitted successfully!
        </div>
      )}
    </div>
  );
};

export default LandingPage;