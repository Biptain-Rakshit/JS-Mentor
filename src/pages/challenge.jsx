import { useState } from "react";
import Editor from "@monaco-editor/react";
import { askAI } from "../utils/ai";
import ReactMarkdown from "react-markdown";

function Challenges() {
  const [difficulty, setDifficulty] = useState("Easy");
  const [challenge, setChallenge] = useState("");
  const [hint, setHint] = useState("");
  const [solution, setSolution] = useState(`function solve(input) {
  // write your logic here
  
}`);
  const [evaluation, setEvaluation] = useState("");
  const [loading, setLoading] = useState(false);

  const generateChallenge = async () => {
    setLoading(true);
    setEvaluation("");
    setHint("");

    const prompt = `
Generate ONE LeetCode-style JavaScript challenge.

Difficulty: ${difficulty}

Important:
The user should only write the function logic.
Do not ask the user to take input manually.

Format exactly like this:

# Problem

# Function Signature

\`\`\`js
function solve(input) {

}
\`\`\`

# Example

Input:
...

Output:
...

# Test Cases

1. Input: ...
   Expected Output: ...

2. Input: ...
   Expected Output: ...

# Concepts Tested
`;

    const response = await askAI(prompt);
    setChallenge(response);

    setSolution(`function solve(input) {
  // write your logic here
  
}`);

    setLoading(false);
  };

  const getHint = async () => {
    if (!challenge) {
      setHint("Generate a challenge first.");
      return;
    }

    setHint("Generating hint...");

    const prompt = `
Challenge:
${challenge}

Give ONLY one hint.

Do NOT reveal the solution.
Do NOT provide code.

Give a short helpful hint.
`;

    const response = await askAI(prompt);
    setHint(response);
  };

  const evaluateSolution = async () => {
    if (!challenge) {
      setEvaluation("Please generate a challenge first.");
      return;
    }

    setEvaluation("Evaluating your solution...");

    const prompt = `
You are an AI code judge like LeetCode.

Problem:
${challenge}

User Solution:
${solution}

Evaluate the solution based on the problem and test cases.

Respond in this format:

# Verdict
Correct / Partially Correct / Incorrect

# Passed Test Cases
X / total

# Score
X/10

# Explanation

# Issues

# Improved Solution
`;

    const response = await askAI(prompt);
    setEvaluation(response);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          JavaScript Coding Arena
        </h1>

        <p className="text-gray-400 mb-8">
          Solve AI-generated JavaScript challenges like LeetCode.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="bg-gray-900 border border-white/10 p-3 rounded-xl"
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>

          <button
            onClick={generateChallenge}
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold"
          >
            Generate Challenge
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-white/10 p-6 rounded-2xl min-h-[520px]">
            <h2 className="text-2xl font-bold mb-4">
              Problem
            </h2>

            <ReactMarkdown>
              {loading
                ? "Generating challenge..."
                : challenge || "Click Generate Challenge to start."}
            </ReactMarkdown>
          </div>

          <div>
            {hint && (
              <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-xl mb-4">
                💡 <ReactMarkdown>{hint}</ReactMarkdown>
              </div>
            )}

            <div className="bg-gray-900 border border-white/10 rounded-2xl overflow-hidden">
              <div className="px-4 py-3 border-b border-white/10 flex justify-between items-center">
                <h2 className="text-xl font-bold">
                  Your Code
                </h2>

                <span className="text-sm text-gray-400">
                  JavaScript
                </span>
              </div>

              <Editor
                height="430px"
                defaultLanguage="javascript"
                theme="vs-dark"
                value={solution}
                onChange={(value) => setSolution(value || "")}
              />
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <button
                onClick={evaluateSolution}
                className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold"
              >
                Submit Solution
              </button>

              <button
                onClick={getHint}
                className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-xl font-semibold"
              >
                Get Hint
              </button>
            </div>

            <div className="bg-gray-900 border border-white/10 p-6 rounded-2xl mt-6">
              <h2 className="text-2xl font-bold mb-4">
                AI Judge Result
              </h2>

              <ReactMarkdown>
                {evaluation || "Submit your solution to get AI feedback."}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Challenges;