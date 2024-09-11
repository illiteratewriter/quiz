export default function Quiz({
  question,
  onAnswerSelect,
  onClickNext,
  onClickPrevious,
  currentQuestion,
  selectedAnswer,
}) {
  return (
    <div>
      <p>{question.question}</p>
      <div>
        {question.options.map((option, id) => (
          <button key={option} onClick={() => onAnswerSelect(id)}>
            {option} {selectedAnswer === id ? "{}" : ""}
          </button>
        ))}
      </div>
      <div>
        <button onClick={onClickPrevious} disabled={currentQuestion === 0}>
          Previous
        </button>
        <button onClick={onClickNext}>Next</button>
      </div>
    </div>
  );
}
