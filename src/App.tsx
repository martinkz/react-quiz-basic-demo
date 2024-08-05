import { Quiz, type QuizData } from "react-quiz-maker";
import scoredQuizData from "./scoredQuiz.json";
import "./quiz.css";

const config = {
	autoResume: true,
	autoResumeDelay: 1200,
	revealAnswer: false,
	explainerEnabled: false,
	explainerNewPage: false,
	animation: "mixed",
} as const;

function App() {
	return <Quiz config={config} data={scoredQuizData as QuizData} />;
}

export default App;
