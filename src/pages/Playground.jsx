import { useState } from "react";
import Editor from "@monaco-editor/react";
import { askAI } from "../utils/ai";
import ReactMarkdown from "react-markdown";

function Playground() {
  const [code, setCode] = useState(`function greet(name) {
  return "Hello " + name;
}

console.log(greet("Biptain"));
`);

  const [output, setOutput] = useState("");
  const [explanation, setExplanation] = useState("");
  const [testCases, setTestCases] = useState("");
  const [loading, setLoading] = useState(false);

  const runCode = () => {
    try {
      let logs = [];
      const originalLog = console.log;

      console.log = (...args) => {
        logs.push(args.join(" "));
      };

      eval(code);

      console.log = originalLog;
      setOutput(logs.join("\n"));
    } catch (error) {
      setOutput(error.message);
    }
  };

  const explainCode = async () => {
    setLoading(true);

    const prompt = `
Explain the following JavaScript code.

Code:
${code}

Answer in this format:

# Explanation

# How It Works

# Output

# Interview Tip
`;

    const response = await askAI(prompt);
    setExplanation(response);
    setLoading(false);
  };

  const findBugs = async () => {
    setLoading(true);

    const prompt = `
Find bugs in this JavaScript code:

${code}

Format:

# Bugs Found

# Why It Happens

# Fixed Code
`;

    const response = await askAI(prompt);
    setExplanation(response);
    setLoading(false);
  };

  const optimizeCode = async () => {
    setLoading(true);

    const prompt = `
Optimize this JavaScript code:

${code}

Format:

# Optimized Code

# What Improved

# Time Complexity

# Explanation
`;

    const response = await askAI(prompt);
    setExplanation(response);
    setLoading(false);
  };

  const generateTestCases = async () => {
    setLoading(true);

    const prompt = `
Generate 5 useful test cases for this JavaScript code:

${code}

Format:

# Test Case 1

Input:
...

Expected Output:
...

# Test Case 2

Input:
...

Expected Output:
...

Continue until Test Case 5.
`;

    const response = await askAI(prompt);
    setTestCases(response);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 pt-24">
      <h1 className="text-4xl font-bold mb-6">
        JavaScript Playground
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Editor
            height="500px"
            defaultLanguage="javascript"
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value || "")}
          />

          <div className="flex flex-wrap gap-4 mt-4">
            <button
              onClick={runCode}
              className="bg-cyan-500 px-5 py-2 rounded-lg font-semibold"
            >
              Run Code
            </button>

            <button
              onClick={explainCode}
              className="bg-purple-500 px-5 py-2 rounded-lg font-semibold"
            >
              Explain Code
            </button>

            <button
              onClick={findBugs}
              className="bg-red-500 px-5 py-2 rounded-lg font-semibold"
            >
              Find Bugs
            </button>

            <button
              onClick={optimizeCode}
              className="bg-green-500 px-5 py-2 rounded-lg font-semibold"
            >
              Optimize Code
            </button>

            <button
              onClick={generateTestCases}
              className="bg-orange-500 px-5 py-2 rounded-lg font-semibold"
            >
              Generate Test Cases
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-900 border border-white/10 p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-3">
              Output
            </h2>

            <pre className="whitespace-pre-wrap">
              {output || "Run your code to see output"}
            </pre>
          </div>

          <div className="bg-gray-900 border border-white/10 p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-3">
              AI Explanation
            </h2>

            {loading ? (
              <p className="animate-pulse text-purple-400">
                AI is thinking...
              </p>
            ) : (
              <ReactMarkdown>
                {explanation || "Click Explain Code / Find Bugs / Optimize Code"}
              </ReactMarkdown>
            )}
          </div>

          <div className="bg-gray-900 border border-white/10 p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-3">
              Test Cases
            </h2>

            <ReactMarkdown>
              {testCases || "Click Generate Test Cases"}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playground;