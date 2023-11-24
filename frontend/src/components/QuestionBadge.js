// frontend/src/components/QuestionBadge.js
import React from 'react';

const QuestionBadge = ({ questionId }) => {
  return (
    <div className='question-badge'>
      Q{questionId}
    </div>
  );
};

export default React.memo(QuestionBadge);
