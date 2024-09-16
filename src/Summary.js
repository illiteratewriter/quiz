import React from "react";

export default function Summary({
  questionnaire,
  answers,
  onGoToQuestion,
  setQuizEnd,
}) {
  return (
    <div>
      {questionnaire.map((question, index) => (
        <React.Fragment key={index}>
          {question.type === "radio" && (
            <Radio
              question={question}
              onGoToQuestion={onGoToQuestion}
              answers={answers}
              index={index}
            />
          )}
          {question.type === "checkbox" && (
            <Checkbox
              question={question}
              onGoToQuestion={onGoToQuestion}
              answers={answers}
              index={index}
            />
          )}
          {question.type === "input" && (
            <Input
              question={question}
              onGoToQuestion={onGoToQuestion}
              answers={answers}
              index={index}
            />
          )}
        </React.Fragment>
      ))}
      <button onClick={() => setQuizEnd(true)}>End Quiz</button>
    </div>
  );
}

function Radio({ question, answers, onGoToQuestion, index }) {
  return (
    <div key={question.question}>
      {question.question} : {question.options[answers[index]]}{" "}
      <button onClick={() => onGoToQuestion(index)}>Go to question</button>
    </div>
  );
}

function Checkbox({ question, answers, onGoToQuestion, index }) {
  return (
    <div key={question.question}>
      {question.question} :{" "}
      <span>
        {answers?.[index]?.map((answer) => {
          return <span key={answer}>{`${question.options[answer]}, `}</span>;
        })}
      </span>{" "}
      <button onClick={() => onGoToQuestion(index)}>Go to question</button>
    </div>
  );
}

function Input({ question, answers, onGoToQuestion, index }) {
  return (
    <div key={question.question}>
      {question.question} : {answers[index]}{" "}
      <button onClick={() => onGoToQuestion(index)}>Go to question</button>
    </div>
  );
}
