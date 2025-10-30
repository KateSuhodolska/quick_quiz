type QuestionStepProps = {
  question: string;
  options: string[];
  onNext: (answer: string) => void;
};

export const QuestionStep = ({
  question,
  options,
  onNext,
}: QuestionStepProps) => {
  return (
    <div className="card">
      <h2 className="text-lg font-semibold mb-4 text-center">{question}</h2>
      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onNext(option)}
            className="border border-gray-300 rounded-md px-4 py-2 hover:bg-violet-50 cursor-pointer transition"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
