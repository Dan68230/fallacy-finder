import { useRef, useState } from 'react'
import html2canvas from 'html2canvas'

export default function Results({ result, onPlayAgain }) {
  const cardRef = useRef(null)
  const [saving, setSaving] = useState(false)
  const { score, total, missed } = result
  const accuracy = Math.round((score / total) * 100)

  async function handleSaveImage() {
    if (!cardRef.current) return
    setSaving(true)
    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: '#000000',
        scale: 2,
      })
      const link = document.createElement('a')
      link.download = 'fallacy-finder-score.png'
      link.href = canvas.toDataURL('image/png')
      link.click()
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="results-screen">
      <div className="score-card" ref={cardRef}>
        <p className="score-card-brand">FALLACY FINDER</p>
        <p className="score-card-score">{score}/{total}</p>
        <p className="score-card-accuracy">{accuracy}% accuracy</p>

        {missed.length > 0 && (
          <div className="score-card-missed">
            <p className="score-card-missed-title">Fallacies missed</p>
            <ul>
              {missed.map((m, i) => (
                <li key={i}>{m.question.answer}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="results-actions">
        <button className="save-btn" onClick={handleSaveImage} disabled={saving}>
          {saving ? 'Saving…' : 'Save Image'}
        </button>
        <button className="play-again-btn" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
    </div>
  )
}
