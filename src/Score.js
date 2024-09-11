import React from "react";

export default function Score({ questionnaire, answers }) {
  const score = React.useMemo(() => {
    let total = 0;
    questionnaire.forEach((question, index) => {
      if (question.answer === answers[index]) {
        total++;
      }
    });
    return total;
  }, [questionnaire, answers]);
  return (
    <div>
      {score}/{questionnaire.length}
    </div>
  );
}
