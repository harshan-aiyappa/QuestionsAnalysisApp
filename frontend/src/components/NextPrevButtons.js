// frontend/src/components/NextPrevButtons.js
import React from 'react';

const NextPrevButtons = ({ onPrev, onNext, disabledPrev, disabledNext }) => {
  return (
    <div className='next-prev-container'>
      <button className="next-prev-button" onClick={onPrev} disabled={disabledPrev}>
        Previous
      </button>
      <button className="next-prev-button" onClick={onNext} disabled={disabledNext}>
        Next
      </button>
    </div>
  );
};

export default React.memo(NextPrevButtons);
