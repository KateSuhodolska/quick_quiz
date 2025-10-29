import { useLocalStorage } from "./hooks/useLocalStorage";
import { QuestionStep } from "./components/QuestionStep";
import { EmailStep } from "./components/EmailStep";
import { ResultStep } from "./components/ResultStep";

const QUESTIONS = [
  {
    question: "What is your favorite color?",
    options: ["Blue", "Green", "Pink", "Black"],
  },
  {
    question: "How often do you take quizzes?",
    options: ["Every week", "Sometimes", "Rarely"],
  },
];

export default function App() {
  const [quizState, setQuizState] = useLocalStorage("quizState", {
    step: 0,
    answers: [] as string[],
    email: "",
  });

  const { step, answers, email } = quizState;

  const handleNextQuestion = (selectedAnswer: string) => {
    setQuizState({
      ...quizState,
      answers: [...quizState.answers, selectedAnswer],
      step: quizState.step + 1,
    });
  };

  const handleEmailSubmit = (enteredEmail: string) => {
    setQuizState({
      ...quizState,
      email: enteredEmail,
      step: quizState.step + 1,
    });
  };

  const handleRestartQuiz = () => {
    setQuizState({ step: 0, answers: [], email: "" });
  };

  const screens = [
    <QuestionStep
      key="question1"
      question={QUESTIONS[0].question}
      options={QUESTIONS[0].options}
      onNext={handleNextQuestion}
    />,
    <QuestionStep
      key="question2"
      question={QUESTIONS[1].question}
      options={QUESTIONS[1].options}
      onNext={handleNextQuestion}
    />,
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
