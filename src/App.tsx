import { useLocalStorage } from "./hooks/useLocalStorage";
import { QuestionStep } from "./components/QuestionStep";
import { EmailStep } from "./components/EmailStep";
import { ResultStep } from "./components/ResultStep";

const QUESTIONS = [
  {
    question: "Which version of React does your project use?",
    options: ["v19.0", "v18.0", "v17.0", "🦕🦕🦕"],
  },
  {
    question: "Which AI is best for coding?",
    options: [
      "Copilot",
      "Cursor",
      "ChatGPT",
      "Doesn't matter who you fix after",
    ],
  },
];
const INITIAL_STATE = {
  step: 0,
  answers: [] as string[],
  email: "",
};
const EXTRA_STEPS = 2;

export default function App() {
  const [quizState, setQuizState] = useLocalStorage("quizState", INITIAL_STATE);
  const { step, answers, email } = quizState;

  const totalSteps = QUESTIONS.length + EXTRA_STEPS;
  const hasInvalidState =
    step >= totalSteps || answers.length > QUESTIONS.length;

  if (hasInvalidState) {
    setQuizState(INITIAL_STATE);
    return null;
  }

  const nextStep = (updates: Partial<typeof quizState>) =>
    setQuizState({ ...quizState, ...updates, step: step + 1 });

  const handleNextQuestion = (selectedAnswer: string) =>
    nextStep({ answers: [...answers, selectedAnswer] });

  const handleEmailSubmit = (enteredEmail: string) =>
    nextStep({ email: enteredEmail });

  const handleRestartQuiz = () => setQuizState(INITIAL_STATE);

  const screens = [
    ...QUESTIONS.map((q, i) => (
      <QuestionStep
        key={i}
        question={q.question}
        options={q.options}
        onNext={handleNextQuestion}
      />
    )),
    <EmailStep key="email" onSubmit={handleEmailSubmit} />,
    <ResultStep
      key="result"
      answers={answers}
      email={email}
      onRestart={handleRestartQuiz}
    />,
  ];

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url(images/questions.webp)" }}
      />
      <div className="relative z-10">{screens[step] ?? screens[0]}</div>
    </main>
  );
}
