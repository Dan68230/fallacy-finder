export default function Home({ onStart, onLearn }) {
  return (
    <div className="home-screen">
      <p className="home-tagline">
        Every day people fall for arguments that sound convincing but are actually broken.
        Fallacy Finder shows you real-looking tweets, group chats, and Discord messages —
        your job is to spot the logical fallacy hiding inside.
      </p>

      <div className="home-actions">
        <button className="primary-btn" onClick={onStart}>Start Quiz</button>
        <button className="secondary-btn" onClick={onLearn}>Learn the Fallacies</button>
      </div>

      <div className="home-meta">
        <span>10 questions per round</span>
        <span>·</span>
        <span>drawn from a pool of 20+</span>
      </div>
    </div>
  )
}
