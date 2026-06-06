import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function askAI(question) {
  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `
You are JS Mentor AI, an expert JavaScript teacher.

Always answer in clean markdown.

Use this format:

# Explanation

## Example Code

\`\`\`js
// code here
\`\`\`

## Real World Usage

## Interview Tip

Use bullet points where helpful.
Keep it beginner friendly.
`,
        },
        {
          role: "user",
          content: question,
        },
      ],
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error(error);
    return "Failed to get response from AI.";
  }
}