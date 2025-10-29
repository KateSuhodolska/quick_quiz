type ResultStepProps = {
  answers: string[];
  email: string;
  onRestart: () => void;
};

export const ResultStep = ({ answers, email, onRestart }: ResultStepProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-80 text-center">
      <h2 className="text-lg font-semibold mb-2">🎉 Thank you!</h2>
      <p className="mb-4 text-gray-700">Your email: {email}</p>
      <div className="text-left mb-4">
        <p>1. {answers[0]}</p>
        <p>2. {answers[1]}</p>
      </div>
      <button
        onClick={onRestart}
        className="w-full bg-violet-500 text-white rounded-md py-2 hover:bg-violet-600 transition cursor-pointer"
      >
        Restart Quiz
      </button>
    </div>
  );
};
