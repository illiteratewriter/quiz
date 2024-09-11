export default function Summary({
  questionnaire,
  answers,
  onGoToQuestion,
  setQuizEnd,
}) {
  return (
    <div>
      {questionnaire.map((question, index) => (
        <div key={question.question}>
          {question.question} : {question.options[answers[index]]}{" "}
          <button onClick={() => onGoToQuestion(index)}>Go to question</button>
        </div>
      ))}
      <button onClick={() => setQuizEnd(true)}>End Quiz</button>
    </div>
  );
}
