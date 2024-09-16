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
    answer: [1, 2],
    type: "checkbox",
  },
  {
    question: "Question 2?",
    options: ["option1", "option2", "option3", "option4"],
    answer: 1,
    type: "radio",
  },
  {
    question: "Question 2?",
    answer: "hello",
    type: "input",
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  let [answers, setAnswers] = React.useState([]);
  let [correctAnswer, setCorrectAnswer] = React.useState([]);
  const [quizEnd, setQuizEnd] = React.useState(false);

  function onAnswerSelect(answerId) {
    let newAnswers = [...answers];
    newAnswers[currentQuestion] = answerId;
    setAnswers(newAnswers);

    if (questionnaire[currentQuestion].type === "checkbox") {
      let answerArray = [...questionnaire[currentQuestion].answer].sort(
        (a, b) => a - b
      );
      let givenAnswer = [...answerId].sort((a, b) => a - b);
      if (JSON.stringify(answerArray) === JSON.stringify(givenAnswer)) {
        let newCorrectAnswer = [...correctAnswer];
        newCorrectAnswer[currentQuestion] = true;
        setCorrectAnswer(newCorrectAnswer);
      } else {
        let newCorrectAnswer = [...correctAnswer];
        newCorrectAnswer[currentQuestion] = false;
        setCorrectAnswer(newCorrectAnswer);
      }
      return;
    }

    if (questionnaire[currentQuestion].answer === answerId) {
      let newCorrectAnswer = [...correctAnswer];
      newCorrectAnswer[currentQuestion] = true;
      setCorrectAnswer(newCorrectAnswer);
    } else {
      let newCorrectAnswer = [...correctAnswer];
      newCorrectAnswer[currentQuestion] = false;
      setCorrectAnswer(newCorrectAnswer);
    }
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
    return (
      <Score questionnaire={questionnaire} correctAnswer={correctAnswer} />
    );
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
      setCorrectAnswer={setCorrectAnswer}
      selectedAnswer={answers[currentQuestion]}
    />
  );
}

export default App;
