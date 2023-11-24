// frontend/src/components/Questions.js
import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import questionsData from '../data/questions';
import AudioControl from './AudioControl';
import QuestionBadge from './QuestionBadge';
import QuestionContent from './QuestionContent';
import NextPrevButtons from './NextPrevButtons';

const Questions = () => {
  const { id } = useParams();
  const audioFile = 'https://file-examples.com/storage/fe02dbc794655b5e699ae4d/2017/11/file_example_MP3_1MG.mp3';
  const [questions, setQuestions] = useState([]);
  const [currentQuestionId, setCurrentQuestionId] = useState(null);

  useEffect(() => {
    // Simulate fetching questions from an API using Axios
    // axios.get('/api/questions').then((response) => {
    //   setQuestions(response.data);
    // });
    setQuestions(questionsData);
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      const currentId = parseInt(id, 10);
      // Check if the current ID is valid, otherwise default to the first question
      setCurrentQuestionId(isNaN(currentId) || currentId > questions.length || currentId < 1 ? 1 : currentId);
    }
  }, [id, questions]);

  const goToNextQuestion = useCallback(() => {
    setCurrentQuestionId((prevId) => (prevId < questions.length ? prevId + 1 : 1));
  }, [questions.length]);

  const goToPrevQuestion = useCallback(() => {
    setCurrentQuestionId((prevId) => (prevId > 1 ? prevId - 1 : questions.length));
  }, [questions.length]);

  const currentQuestion = questions.find((question) => question.id === currentQuestionId);

  return (
    <div className='playground-area'>
      <div className='questions-container'>
        {currentQuestion && (
          <>
            <QuestionBadge questionId={currentQuestion.id} />
            <QuestionContent text={currentQuestion.text} />
          </>
        )}

        {!currentQuestion && <p>Loading...</p>}
      </div>
      <AudioControl audioFile={audioFile} />
      <NextPrevButtons
        onPrev={goToPrevQuestion}
        onNext={goToNextQuestion}
        disabledPrev={currentQuestion && currentQuestion.id === 1}
        disabledNext={currentQuestion && currentQuestion.id === questions.length}
      />
    </div>
  );
};

export default Questions;
