import React from "react";

export default function Score({ questionnaire, correctAnswer }) {
  const score = React.useMemo(() => {
    return correctAnswer.filter(Boolean).length;
  }, [correctAnswer]);
  return (
    <div>
      {score}/{questionnaire.length}
    </div>
  );
}
