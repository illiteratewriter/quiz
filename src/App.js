import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Summary from "./Summary";
import Quiz from "./quiz";
import Score from "./Score";

let questionnaire = [
  {
    question: "Question 1?",
    options: ["option1", "option2", "option3", "option4"],
    answer: 1,
  },
  {
    question: "Question 2?",
    options: ["option1", "option2", "option3", "option4"],
    answer: 1,
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  let [answers, setAnswers] = React.useState([]);
  const [quizEnd, setQuizEnd] = React.useState(false);

  function onAnswerSelect(answerId) {
    let newAnswers = [...answers];
    newAnswers[currentQuestion] = answerId;
    setAnswers(newAnswers);
  }

  function onGoToQuestion(questionIndex) {
    setCurrentQuestion(questionIndex);
  }

  function onClickNext() {
    setCurrentQuestion(currentQuestion + 1);
  }

  function onClickPrevious() {
    setCurrentQuestion(currentQuestion - 1);
  }

  if (quizEnd) {
    return <Score questionnaire={questionnaire} answers={answers} />;
  }

  if (currentQuestion >= questionnaire.length) {
    return (
      <Summary
        answers={answers}
        questionnaire={questionnaire}
        onGoToQuestion={onGoToQuestion}
        setQuizEnd={setQuizEnd}
      />
    );
  }

  return (
    <Quiz
      question={questionnaire[currentQuestion]}
      onAnswerSelect={onAnswerSelect}
      onClickNext={onClickNext}
      onClickPrevious={onClickPrevious}
      currentQuestion={currentQuestion}
      selectedAnswer={answers[currentQuestion]}
    />
  );
}

export default App;
