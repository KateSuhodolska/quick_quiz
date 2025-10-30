type ResultStepProps = {
  answers: string[];
  email: string;
  onRestart: () => void;
};

export const ResultStep = ({ answers, email, onRestart }: ResultStepProps) => {
  return (
    <div className="card text-center">
      <h2 className="text-lg font-semibold mb-2">🎉 Thank you!</h2>
      <p className="mb-4 text-gray-700">Your email: {email}</p>
      <div className="text-left mb-4 space-y-1">
        {answers.map((answer, index) => (
          <p key={index}>
            {index + 1}. {answer}
          </p>
        ))}
      </div>
      <button className="submit-btn" onClick={onRestart}>
        Restart Quiz
      </button>
    </div>
  );
};
