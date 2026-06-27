export default function TweetCard({ content }) {
  return (
    <div className="tweet-card">
      <div className="tweet-header">
        <div className="tweet-avatar">{content.avatar}</div>
        <div className="tweet-names">
          <span className="tweet-username">{content.username}</span>
          <span className="tweet-handle">{content.handle}</span>
        </div>
      </div>
      <p className="tweet-text">{content.text}</p>
      <div className="tweet-stats">
        <span>💬 {Math.floor(Math.random() * 200) + 10}</span>
        <span>🔁 {content.retweets}</span>
        <span>❤️ {content.likes}</span>
      </div>
    </div>
  )
}
