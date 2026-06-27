import { useState, useMemo } from 'react'
import Quiz from './components/Quiz.jsx'
import Results from './components/Results.jsx'
import allQuestions from './data/questions.js'

function shuffle(arr) {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export default function App() {
  const [round, setRound] = useState(0)
  const [result, setResult] = useState(null)

  const questions = useMemo(() => shuffle(allQuestions).slice(0, 10), [round])

  function handleFinish(res) {
    setResult(res)
  }

  function handlePlayAgain() {
    setResult(null)
    setRound((r) => r + 1)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Fallacy Finder</h1>
        <p className="app-subtitle">Spot the logical fallacy hiding in real-looking posts</p>
      </header>

      {result ? (
        <Results result={result} onPlayAgain={handlePlayAgain} />
      ) : (
        <Quiz key={round} questions={questions} onFinish={handleFinish} />
      )}
    </div>
  )
}
