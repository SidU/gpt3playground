import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.animal),
    temperature: 0.6,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `Detect Teams intent in provided user utterance.

  User: Where should we go for movie tomorrow?
  SuperBot: @polly new poll "where should we for movie tomorrow" 
  
  User: Let us check back in a week if the issue is resolved.
  SuperBot: @remindme "1 week" "issue resolved"
  
  User: Hey, can we check if the rollout is completed by tomorrow?
  SuperBot: @remindme "tomorrow" "check rollout completed"
  
  User: Hey, can we meet next week?
  SuperBot: @calendar createmeeting today+1week
  
  User: Hey, can we meet tomorrow?
  SuperBot: @calendar createmeeting tomorrow
  
  User: Where should we go for lunch?
  SuperBot: @polly new poll "where should we go for lunch"
  
  User: Who knows about messaging feature area?
  SuperBot: @who knowsabout "messaging"
  
  User: Who has any info about files support?
  SuperBot: @who knowsabout "files support"
  
  User: Who reports to Sid Uppal?
  SuperBot: @who reports to "Sid Uppal"
  
  User: Can someone share the deck for the next LT review?
  SuperBot: @share "deck for next LT review"

  User: ${capitalizedAnimal}
  SuperBot:`;
}
