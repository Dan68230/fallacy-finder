import { useState, useMemo } from 'react'
import Home from './components/Home.jsx'
import Learn from './components/Learn.jsx'
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
  const [screen, setScreen] = useState('home') // 'home' | 'learn' | 'quiz' | 'results'
  const [round, setRound] = useState(0)
  const [result, setResult] = useState(null)

  const questions = useMemo(() => shuffle(allQuestions).slice(0, 10), [round])

  function handleStart() {
    setRound((r) => r + 1)
    setResult(null)
    setScreen('quiz')
  }

  function handleFinish(res) {
    setResult(res)
    setScreen('results')
  }

  function handlePlayAgain() {
    setResult(null)
    setRound((r) => r + 1)
    setScreen('quiz')
  }

  function handleGoHome() {
    setResult(null)
    setScreen('home')
  }

  return (
    <div className="app">
      <header className="app-header" onClick={handleGoHome} role="button" tabIndex={0}>
        <h1>Fallacy Finder</h1>
        <p className="app-subtitle">Spot the logical fallacy hiding in real-looking posts</p>
      </header>

      {screen === 'home' && <Home onStart={handleStart} onLearn={() => setScreen('learn')} />}
      {screen === 'learn' && <Learn onBack={handleGoHome} />}
      {screen === 'quiz' && <Quiz key={round} questions={questions} onFinish={handleFinish} />}
      {screen === 'results' && result && (
        <Results result={result} onPlayAgain={handlePlayAgain} />
      )}
    </div>
  )
}
