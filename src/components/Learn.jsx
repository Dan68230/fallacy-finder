import fallacies from '../data/fallacies.js'

export default function Learn({ onBack }) {
  return (
    <div className="learn-screen">
      <button className="back-btn" onClick={onBack}>&larr; Back</button>

      <p className="learn-intro">
        A logical fallacy is a flaw in reasoning that makes an argument invalid or misleading —
        even if it sounds persuasive. Here are the fallacies you'll encounter in the quiz.
      </p>

      <div className="fallacy-list">
        {fallacies.map((f) => (
          <div className="fallacy-item" key={f.name}>
            <h3 className="fallacy-name">{f.name}</h3>
            <p className="fallacy-definition">{f.definition}</p>
          </div>
        ))}
      </div>

      <button className="primary-btn learn-start-btn" onClick={onBack}>
        Back to Home
      </button>
    </div>
  )
}
