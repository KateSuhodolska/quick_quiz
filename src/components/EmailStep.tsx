import { useState } from "react";

type EmailStepProps = {
  onSubmit: (email: string) => void;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const EmailStep = ({ onSubmit }: EmailStepProps) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    const isInvalid = Boolean(value) && !EMAIL_REGEX.test(value);

    setEmail(value);
    setError(isInvalid ? "Please enter a valid email address" : "");
  };

  const handleSubmit = () => !error && email && onSubmit(email);
  const isDisabled = !email || Boolean(error);

  return (
    <div className="card">
      <h2 className="text-lg font-semibold mb-6 text-center">Almost done :)</h2>
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="Enter your email"
        className={`email-input ${error && "error"}`}
      />
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <button
        onClick={handleSubmit}
        disabled={isDisabled}
        className={`submit-btn ${
          isDisabled && "opacity-50 cursor-not-allowed"
        }`}
      >
        Submit
      </button>
    </div>
  );
};
