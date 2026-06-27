export default function IMessageCard({ content }) {
  return (
    <div className="imessage-card">
      <div className="imessage-header">{content.groupname}</div>
      <div className="imessage-body">
        {content.messages.map((m, i) => (
          <div key={i} className={`imessage-row ${m.side}`}>
            {m.side === 'left' && <span className="imessage-sender">{m.sender}</span>}
            <div className={`imessage-bubble ${m.side}`}>{m.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
