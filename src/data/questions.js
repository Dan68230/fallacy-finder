const questions = [
  {
    "format": "tweet",
    "content": {
      "username": "PoliticalPaul",
      "handle": "@paul_speaks",
      "avatar": "PP",
      "text": "My opponent wants to reduce the defense budget. So I guess he just wants America to be completely defenseless. No military at all. Just roll out the welcome mat for our enemies.",
      "likes": "4.2K",
      "retweets": "891"
    },
    "answer": "Straw Man",
    "options": ["Straw Man", "Ad Hominem", "False Dichotomy", "Slippery Slope"],
    "explanation": "Straw man — the argument exaggerates the opponent's position from 'reduce the budget' to 'zero military.' That's a distorted version of what was actually said."
  },
  {
    "format": "discord",
    "content": {
      "server": "Science Corner",
      "channel": "#general",
      "username": "DebateLord99",
      "avatar": "DL",
      "text": "Why would anyone listen to Dr. Kim's research on vaccine safety? I heard she got a DUI in college. Her whole career is a joke lmao"
    },
    "answer": "Ad Hominem",
    "options": ["Ad Hominem", "Appeal to Authority", "Red Herring", "Hasty Generalization"],
    "explanation": "Ad hominem — instead of addressing Dr. Kim's actual research, the argument attacks her personal history. Her past has nothing to do with the validity of her science."
  },
  {
    "format": "imessage",
    "content": {
      "groupname": "Family Chat",
      "messages": [
        { "sender": "Dad", "text": "They're talking about legalizing marijuana in our state.", "side": "left" },
        { "sender": "Uncle Ron", "text": "Great. So next they'll legalize heroin, then meth, then anything goes. Society is done.", "side": "left" }
      ]
    },
    "answer": "Slippery Slope",
    "options": ["Slippery Slope", "False Dichotomy", "Straw Man", "Appeal to Emotion"],
    "explanation": "Slippery slope — Uncle Ron jumps from one policy change to a chain of extreme outcomes with no evidence that one step leads to the next."
  },
  {
    "format": "tweet",
    "content": {
      "username": "TruthTalker",
      "handle": "@real_truthtalk",
      "avatar": "TT",
      "text": "You either support stricter gun control or you don't care about children dying. There is no middle ground here. Pick a side.",
      "likes": "12.7K",
      "retweets": "3.1K"
    },
    "answer": "False Dichotomy",
    "options": ["False Dichotomy", "Appeal to Emotion", "Straw Man", "Bandwagon"],
    "explanation": "False dichotomy — this forces only two options when many positions exist in between, like supporting some regulations but not others."
  },
  {
    "format": "discord",
    "content": {
      "server": "Fitness & Health",
      "channel": "#nutrition",
      "username": "GymRat_Kyle",
      "avatar": "GK",
      "text": "I got the flu shot last fall and still got sick for two weeks straight. Vaccines literally do nothing. Stop pushing this stuff on people."
    },
    "answer": "Hasty Generalization",
    "options": ["Hasty Generalization", "Post Hoc", "Anecdotal", "Appeal to Nature"],
    "explanation": "Hasty generalization — drawing a broad conclusion from a single personal experience while ignoring the population-level data showing vaccines work."
  },
  {
    "format": "imessage",
    "content": {
      "groupname": "College Roommates",
      "messages": [
        { "sender": "Mia", "text": "I started drinking celery juice every morning last month", "side": "left" },
        { "sender": "Mia", "text": "my back pain completely went away. Celery juice HEALED me", "side": "left" },
        { "sender": "Jake", "text": "so you're saying everyone with back pain should drink celery juice?", "side": "right" },
        { "sender": "Mia", "text": "obviously!! it works, I'm proof", "side": "left" }
      ]
    },
    "answer": "Post Hoc",
    "options": ["Post Hoc", "Hasty Generalization", "Appeal to Nature", "Circular Reasoning"],
    "explanation": "Post hoc (post hoc ergo propter hoc) — just because the back pain went away after starting celery juice doesn't mean the juice caused it. Correlation isn't causation."
  },
  {
    "format": "tweet",
    "content": {
      "username": "WellnessVibes",
      "handle": "@wellnessvibes_",
      "avatar": "WV",
      "text": "Over 50 million people worldwide use this herbal supplement daily. Clearly it works — you don't get numbers like that from something that does nothing. Do your research.",
      "likes": "6.8K",
      "retweets": "2.2K"
    },
    "answer": "Appeal to Popularity",
    "options": ["Appeal to Popularity", "Appeal to Authority", "False Dichotomy", "Bandwagon"],
    "explanation": "Appeal to popularity (ad populum) — the number of people using something says nothing about whether it actually works. Lots of people have believed wrong things."
  },
  {
    "format": "discord",
    "content": {
      "server": "Health & Wellness",
      "channel": "#diets",
      "username": "CleanEater",
      "avatar": "CE",
      "text": "I only eat fully natural, unprocessed foods. Nothing artificial ever touches my body. It's basically impossible for this diet to be bad for you — it's literally how nature intended us to eat."
    },
    "answer": "Appeal to Nature",
    "options": ["Appeal to Nature", "Post Hoc", "Circular Reasoning", "Straw Man"],
    "explanation": "Appeal to nature — 'natural' doesn't automatically mean safe or healthy. Arsenic is natural. Many synthetic medicines are lifesaving. The source doesn't determine safety."
  },
  {
    "format": "imessage",
    "content": {
      "groupname": "Work Slack → iMessage",
      "messages": [
        { "sender": "Priya", "text": "I think the company's parental leave policy is way too short", "side": "right" },
        { "sender": "Manager Tom", "text": "You don't even have kids yet. Come back to me when you do", "side": "left" }
      ]
    },
    "answer": "Ad Hominem",
    "options": ["Ad Hominem", "Red Herring", "Appeal to Authority", "False Equivalence"],
    "explanation": "Ad hominem — Tom dismisses Priya's argument by attacking her personal situation rather than addressing whether the leave policy is actually fair."
  },
  {
    "format": "tweet",
    "content": {
      "username": "BookClub Beth",
      "handle": "@beth_reads",
      "avatar": "BB",
      "text": "The Bible is 100% historically accurate. It says so right there in 2 Timothy 3:16 — 'All scripture is God-breathed and true.' That's all the proof I need.",
      "likes": "934",
      "retweets": "217"
    },
    "answer": "Circular Reasoning",
    "options": ["Circular Reasoning", "Appeal to Authority", "Begging the Question", "Red Herring"],
    "explanation": "Circular reasoning — the argument uses the Bible to prove the Bible is true. The conclusion is hidden inside the premise. It goes in a loop without outside evidence."
  },
  {
    "format": "discord",
    "content": {
      "server": "Political Debate",
      "channel": "#hot-takes",
      "username": "NewsNerd",
      "avatar": "NN",
      "text": "The senator is pushing for stricter emissions rules but he flew private to a climate conference last year. Absolute hypocrite. His whole argument about carbon emissions is invalid."
    },
    "answer": "Tu Quoque",
    "options": ["Tu Quoque", "Ad Hominem", "Red Herring", "Straw Man"],
    "explanation": "Tu quoque (appeal to hypocrisy) — pointing out the senator's behavior doesn't actually address whether stricter emissions rules are a good idea. His hypocrisy is separate from the argument's validity."
  },
  {
    "format": "imessage",
    "content": {
      "groupname": "Friend Group",
      "messages": [
        { "sender": "Carlos", "text": "I've been really stressed so I started seeing a therapist", "side": "left" },
        { "sender": "Derek", "text": "bro why would you do that", "side": "right" },
        { "sender": "Derek", "text": "my cousin went to therapy and he said it made things worse. therapy doesn't work", "side": "right" }
      ]
    },
    "answer": "Hasty Generalization",
    "options": ["Hasty Generalization", "Anecdotal", "Post Hoc", "Appeal to Emotion"],
    "explanation": "Hasty generalization — concluding therapy doesn't work based on one person's experience ignores the extensive research showing it helps millions of people."
  },
  {
    "format": "tweet",
    "content": {
      "username": "CryptoKing",
      "handle": "@cryptoking_eth",
      "avatar": "CK",
      "text": "Every serious investor I know has moved their portfolio into crypto. If you're still in stocks and bonds you're basically asleep at the wheel. Wake up.",
      "likes": "18.3K",
      "retweets": "5.6K"
    },
    "answer": "Bandwagon",
    "options": ["Bandwagon", "Appeal to Authority", "False Dichotomy", "Appeal to Popularity"],
    "explanation": "Bandwagon — 'everyone is doing it' isn't a reason to do it. The argument pressures you to follow the crowd without providing any actual evidence crypto is the right investment."
  },
  {
    "format": "discord",
    "content": {
      "server": "Climate Discussion",
      "channel": "#debate",
      "username": "SkepticalSam",
      "avatar": "SS",
      "text": "My geology professor says climate change is overhyped. He's been studying rocks for 30 years so he knows more than any of these climate scientists pushing their agenda."
    },
    "answer": "Appeal to Authority",
    "options": ["Appeal to Authority", "Ad Hominem", "Red Herring", "False Equivalence"],
    "explanation": "Appeal to authority — a geology professor's expertise doesn't automatically extend to climate science. What matters is the scientific consensus from experts in that specific field."
  },
  {
    "format": "imessage",
    "content": {
      "groupname": "Debate Class Group",
      "messages": [
        { "sender": "Aisha", "text": "Eating meat and going vegan have pretty similar carbon footprints when you account for land use", "side": "left" },
        { "sender": "Tyler", "text": "that's literally insane to compare, you cannot say those are equivalent", "side": "right" },
        { "sender": "Aisha", "text": "I'm not saying they're equal, I'm saying the gap is smaller than people think when all factors are considered", "side": "left" },
        { "sender": "Tyler", "text": "so you're saying factory farming is the same as eating salad. got it", "side": "right" }
      ]
    },
    "answer": "Straw Man",
    "options": ["Straw Man", "False Equivalence", "Red Herring", "Hasty Generalization"],
    "explanation": "Straw man — Tyler distorts Aisha's nuanced argument into an extreme claim she never made, making it easier to dismiss."
  },
  {
    "format": "tweet",
    "content": {
      "username": "FitnessFred",
      "handle": "@fred_lifts",
      "avatar": "FF",
      "text": "Think about your family. Think about your kids watching you give up on yourself. If you don't start working out TODAY you are choosing to leave them early. Is that what you want?",
      "likes": "29.1K",
      "retweets": "7.8K"
    },
    "answer": "Appeal to Emotion",
    "options": ["Appeal to Emotion", "False Dichotomy", "Slippery Slope", "Bandwagon"],
    "explanation": "Appeal to emotion — instead of giving reasons to work out, the argument guilt-trips you with fear and emotional pressure about your family, bypassing rational evidence."
  },
  {
    "format": "discord",
    "content": {
      "server": "Philosophy Nerds",
      "channel": "#logic",
      "username": "DeepThinker",
      "avatar": "DT",
      "text": "Freedom of speech is important because people should be free to say what they think. And the reason people should be free to say what they think is because speech should be free."
    },
    "answer": "Circular Reasoning",
    "options": ["Circular Reasoning", "Begging the Question", "Appeal to Authority", "Red Herring"],
    "explanation": "Circular reasoning — the argument just restates itself. 'Free speech is important because speech should be free' doesn't actually explain why — it goes in a loop."
  },
  {
    "format": "imessage",
    "content": {
      "groupname": "Neighborhood Watch",
      "messages": [
        { "sender": "Linda", "text": "Three packages got stolen on our street last week", "side": "left" },
        { "sender": "Bob", "text": "It's those new apartments they built. Ever since they opened crime has gone up", "side": "left" },
        { "sender": "Linda", "text": "do you have any data on that?", "side": "right" },
        { "sender": "Bob", "text": "I don't need data, the timing speaks for itself", "side": "left" }
      ]
    },
    "answer": "Post Hoc",
    "options": ["Post Hoc", "Hasty Generalization", "False Equivalence", "Circular Reasoning"],
    "explanation": "Post hoc — Bob assumes the apartments caused the crime just because they came first. But timing alone doesn't establish cause and effect."
  },
  {
    "format": "tweet",
    "content": {
      "username": "NaturalMomma",
      "handle": "@naturalmomma_",
      "avatar": "NM",
      "text": "Refusing to vaccinate your child is basically the same as a doctor performing unnecessary surgery on them. Both are medical interventions without true informed consent. Wake up parents.",
      "likes": "3.4K",
      "retweets": "1.1K"
    },
    "answer": "False Equivalence",
    "options": ["False Equivalence", "Appeal to Nature", "Straw Man", "Appeal to Emotion"],
    "explanation": "False equivalence — skipping a vaccine and performing unnecessary surgery are not comparable situations. Treating them as equal ignores massive differences in risk, evidence, and medical context."
  },
  {
    "format": "discord",
    "content": {
      "server": "Study Hall",
      "channel": "#off-topic",
      "username": "ProcrastinatingPete",
      "avatar": "PP",
      "text": "You're telling me I should study more? Lmao you literally failed your driving test twice. Maybe sort yourself out before giving me life advice."
    },
    "answer": "Tu Quoque",
    "options": ["Tu Quoque", "Ad Hominem", "Red Herring", "Straw Man"],
    "explanation": "Tu quoque — pointing out Pete's past failures doesn't address whether the advice to study more is actually good advice. The advice stands on its own regardless of who gives it."
  }
]

export default questions
