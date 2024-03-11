import React, { useState } from 'react';

export default function App() {
  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
    },
  ];

  const [currentQuestions, setCurrentQuestions] = useState(0);
  const [showScore, setShowScore] = useState(false)
  const [scoreCount, setScoreCount] = useState(0)

  const handleAnswerButton = (isCorrect) => {

    if (currentQuestions + 1 < questions.length) {
      setCurrentQuestions((prev) => prev + 1)
    } else {
      setShowScore(true)
    }
    if (isCorrect === true) {
      setScoreCount(scoreCount + 1)
    }

  }
  const restartQuizHandler = () => {
    setCurrentQuestions(0)
    setShowScore(false)
    setScoreCount(0)

  }

  return (
    <div className='main w-full h-screen flex justify-center items-center bg-cyan-950'>
      <div className='w-[450px] p-6 rounded-md bg-white flex justify-evenly gap-10'>
        {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
        {showScore ? (
          <div className='flex flex-col gap-10'>
            <div className='score-section'>You scored {scoreCount} out of {questions.length}</div>
            <button
              onClick={restartQuizHandler}
              className='px-3 py-2 rounded bg-cyan-950 text-white'>Restart Quiz</button>
          </div>
        ) : (
          <>
            <div className='question-section'>
              <div className='question-count mb-2'>
                <span>Question {currentQuestions + 1}</span>/{questions.length}
              </div>
              <hr className='mb-6' />
              <div className='question-text font-medium text-cyan-950'>{questions[currentQuestions].questionText}</div>
            </div>
            <div className='answer-section gap-4'>
              {questions[currentQuestions].answerOptions.map((items, i) => <button key={i} onClick={() => handleAnswerButton(items.isCorrect)}>{items.answerText}</button>)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}