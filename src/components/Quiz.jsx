import { useState } from 'react'
import QuestionCard from './QuestionCard.jsx'

export default function Quiz({ questions, onFinish }) {
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [missed, setMissed] = useState([])

  const question = questions[index]
  const isAnswered = selected !== null
  const isCorrect = selected === question.answer

  function handleSelect(option) {
    if (isAnswered) return
    setSelected(option)
    if (option === question.answer) {
      setScore((s) => s + 1)
    } else {
      setMissed((m) => [...m, { question, picked: option }])
    }
  }

  function handleNext() {
    if (index + 1 < questions.length) {
      setIndex((i) => i + 1)
      setSelected(null)
    } else {
      onFinish({ score, total: questions.length, missed })
    }
  }

  return (
    <div className="quiz-screen">
      <div className="quiz-progress">
        Question {index + 1} / {questions.length} &nbsp;·&nbsp; Score: {score}
      </div>

      <QuestionCard question={question} />

      <div className="options-grid">
        {question.options.map((option) => {
          let cls = 'option-btn'
          if (isAnswered) {
            if (option === question.answer) cls += ' correct'
            else if (option === selected) cls += ' incorrect'
          }
          return (
            <button
              key={option}
              className={cls}
              onClick={() => handleSelect(option)}
              disabled={isAnswered}
            >
              {option}
            </button>
          )
        })}
      </div>

      {isAnswered && (
        <div className={`feedback ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`}>
          <p className="feedback-title">{isCorrect ? 'Correct!' : `Not quite — it's ${question.answer}`}</p>
          <p className="feedback-explanation">{question.explanation}</p>
          <button className="next-btn" onClick={handleNext}>
            {index + 1 < questions.length ? 'Next' : 'See Results'}
          </button>
        </div>
      )}
    </div>
  )
}
