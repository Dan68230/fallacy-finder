export default function DiscordCard({ content }) {
  return (
    <div className="discord-card">
      <div className="discord-topbar">
        <span className="discord-server"># {content.server}</span>
        <span className="discord-channel">{content.channel}</span>
      </div>
      <div className="discord-message">
        <div className="discord-avatar">{content.avatar}</div>
        <div className="discord-msg-body">
          <span className="discord-username">{content.username}</span>
          <p className="discord-text">{content.text}</p>
        </div>
      </div>
    </div>
  )
}
