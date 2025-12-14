const questionAnswerPrompt = (
  role,
  experience,
  topicsToFocus,
  numberOfQuestions
) => `
You are an API that returns ONLY valid JSON.

Generate interview questions and answers using the following details:
- Role: ${role}
- Experience: ${experience} years
- Topics: ${topicsToFocus}
- Number of questions: ${numberOfQuestions}

STRICT RULES (MUST FOLLOW):
- Return ONLY valid JSON
- Do NOT include markdown
- Do NOT include code fences (no backticks)
- Do NOT include bullet points or headings
- Do NOT include explanations outside JSON
- If a code example is required, include it as plain text inside the answer string

JSON FORMAT (MUST MATCH EXACTLY):
{
  "questions": [
    {
      "question": "string",
      "answer": "string"
    }
  ]
}
`;

const conceptExplainPrompt = (question) => `
You are an API that returns ONLY valid JSON.

Explain the following interview question clearly for a beginner:
"${question}"

STRICT RULES (MUST FOLLOW):
- Return ONLY valid JSON
- Do NOT include markdown
- Do NOT include code fences or backticks
- Do NOT include HTML
- Keep explanation as plain text with normal sentences
- If a code example is required, include it as plain text using \\n for new lines

JSON FORMAT (MUST MATCH EXACTLY):
{
  "title": "string",
  "explanation": "string"
}
`;

module.exports = {
  questionAnswerPrompt,
  conceptExplainPrompt,
};
