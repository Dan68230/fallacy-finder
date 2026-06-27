import TweetCard from './TweetCard.jsx'
import IMessageCard from './IMessageCard.jsx'
import DiscordCard from './DiscordCard.jsx'

export default function QuestionCard({ question }) {
  if (question.format === 'tweet') return <TweetCard content={question.content} />
  if (question.format === 'imessage') return <IMessageCard content={question.content} />
  if (question.format === 'discord') return <DiscordCard content={question.content} />
  return null
}
