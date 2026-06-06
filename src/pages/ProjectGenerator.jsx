import { useState } from "react";
import { askAI } from "../utils/ai";
import ReactMarkdown from "react-markdown";

function ProjectGenerator() {
  const [skills, setSkills] = useState("");
  const [project, setProject] = useState("");
  const [loading, setLoading] = useState(false);

  const generateProject = async () => {
    if (!skills.trim()) return;

    setLoading(true);

    const prompt = `
You are JS Mentor AI.

The user knows:
${skills}

Generate one JavaScript project idea.

Use proper markdown formatting.

Format exactly:

# Project Name

Write the project name clearly.

## Difficulty

Beginner / Intermediate / Advanced

## What You Will Build

Write 3-4 lines with proper spacing.

## Features

- Feature 1
- Feature 2
- Feature 3
- Feature 4

## Concepts Practiced

- Concept 1
- Concept 2
- Concept 3

## Folder Structure

\`\`\`
project-name/
├── index.html
├── style.css
└── script.js
\`\`\`

## Step-by-Step Build Plan

1. Step one
2. Step two
3. Step three
4. Step four

## Bonus Features

- Bonus 1
- Bonus 2
- Bonus 3
`;

    const response = await askAI(prompt);

    setProject(response);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          AI Project Generator
        </h1>

        <p className="text-gray-400 mb-8">
          Enter what you know, and AI will suggest a JavaScript project for you.
        </p>

        <textarea
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          placeholder="Example: variables, loops, arrays, DOM, fetch API..."
          className="w-full h-40 bg-gray-900 border border-white/10 rounded-2xl p-4 outline-none mb-5"
        />

        <button
          onClick={generateProject}
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-semibold"
        >
          Generate Project
        </button>

        <ReactMarkdown
  components={{
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-purple-400 mt-6 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-cyan-400 mt-5 mb-3">
        {children}
      </h2>
    ),
    p: ({ children }) => (
      <p className="text-gray-300 leading-7 mb-4">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 space-y-2 mb-5 text-gray-300">
        {children}
      </ul>
    ),
    li: ({ children }) => (
      <li className="leading-7">
        {children}
      </li>
    ),
    code: ({ children }) => (
      <code className="bg-black/50 px-2 py-1 rounded text-green-400">
        {children}
      </code>
    ),
  }}
>
  {project || "Your generated project will appear here."}
</ReactMarkdown>
      </div>
    </div>
  );
}

export default ProjectGenerator;