// frontend/src/components/QuestionContent.js
import React from 'react';

const QuestionContent = ({ text }) => {
  return (
    <div className='questions-content'>
      <p>{text}</p>
    </div>
  );
};

export default React.memo(QuestionContent);
