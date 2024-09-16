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
      {question.type === "radio" && (
        <Radio
          question={question}
          onAnswerSelect={onAnswerSelect}
          selectedAnswer={selectedAnswer}
        />
      )}
      {question.type === "checkbox" && (
        <Checkbox
          question={question}
          onAnswerSelect={onAnswerSelect}
          selectedAnswer={selectedAnswer}
        />
      )}
      {question.type === "input" && (
        <Input
          onAnswerSelect={onAnswerSelect}
          selectedAnswer={selectedAnswer}
        />
      )}
      <div>
        <button onClick={onClickPrevious} disabled={currentQuestion === 0}>
          Previous
        </button>
        <button onClick={onClickNext}>Next</button>
      </div>
    </div>
  );
}

function Radio({ question, onAnswerSelect, selectedAnswer }) {
  return (
    <div>
      {question.options.map((option, id) => {
        return (
          <div key={option}>
            <input
              type="radio"
              onChange={() => onAnswerSelect(id)}
              checked={selectedAnswer === id}
            />
            <label>{option}</label>
          </div>
        );
      })}
    </div>
  );
}

function Checkbox({ question, onAnswerSelect, selectedAnswer = [] }) {
  return (
    <div>
      {question.options.map((option, id) => {
        let checked = selectedAnswer.includes(id);
        return (
          <div key={option}>
            <input
              type="checkbox"
              onChange={() => {
                if (selectedAnswer.includes(id)) {
                  let newAnswers = [...selectedAnswer];
                  newAnswers.splice(selectedAnswer.indexOf(id), 1);
                  onAnswerSelect(newAnswers);
                } else {
                  let newAnswers = [...selectedAnswer];
                  newAnswers.push(id);
                  onAnswerSelect(newAnswers);
                }
              }}
              checked={checked}
            />
            <label>{option}</label>
          </div>
        );
      })}
    </div>
  );
}

function Input({ question, onAnswerSelect, selectedAnswer = "" }) {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => onAnswerSelect(e.target.value)}
        value={selectedAnswer}
      />
    </div>
  );
}
