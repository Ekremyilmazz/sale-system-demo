import { useState } from "react";
import LeadForm from "../components/leadForm";

const LandingPage = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="p-8 font-sans min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-2">
        Boost Your Sales Pipeline
      </h1>

      <p className="text-gray-600 mb-6">
        Submit your leads and watch them flow into your dashboard automatically.
      </p>

      {!submitted ? (
        <LeadForm onSuccess={() => setSubmitted(true)} />
      ) : (
        <div className="mt-4 text-green-600 font-medium">
          Lead submitted successfully!
        </div>
      )}
    </div>
  );
};

export default LandingPage;