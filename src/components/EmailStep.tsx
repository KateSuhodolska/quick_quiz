import { useState } from "react";

type EmailStepProps = {
  onSubmit: (email: string) => void;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const EmailStep = ({ onSubmit }: EmailStepProps) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!EMAIL_REGEX) {
      setError("Please enter a valid email address");
      return;
    }
    onSubmit(email);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-80">
      <h2 className="text-lg font-semibold mb-6 text-center">Almost done 💌</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setError("");
        }}
        placeholder="Enter your email"
        className="border border-gray-300 rounded-md px-4 py-2 w-full mb-3
             focus:outline-none focus:ring-1 focus:ring-violet-400 focus:border-violet-400 transition"
      />
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <button
        onClick={handleSubmit}
        className="w-full bg-violet-500 text-white rounded-md py-2 hover:bg-violet-600 transition cursor-pointer"
      >
        Submit
      </button>
    </div>
  );
};
