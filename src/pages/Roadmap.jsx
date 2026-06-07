import { useState } from "react";
import { askAI } from "../utils/ai";
import ReactMarkdown from "react-markdown";
import MarkdownRenderer from "../components/MarkdownRenderer";

function Roadmap() {
  const [level, setLevel] = useState("Beginner");
  const [roadmap, setRoadmap] = useState("");
  const [loading, setLoading] = useState(false);

  const generateRoadmap = async () => {
    setLoading(true);

    const prompt = `
Create a JavaScript learning roadmap.

Level: ${level}

Use clean markdown formatting.

Format exactly:

# JavaScript Roadmap for ${level}

## Week Wise Plan

### Week 1

- Topic
- Practice task
- Mini goal

### Week 2

- Topic
- Practice task
- Mini goal

### Week 3

- Topic
- Practice task
- Mini goal

## Topics To Learn

- Topic 1
- Topic 2
- Topic 3

## Mini Projects

- Project 1
- Project 2
- Project 3

## Practice Problems

- Problem 1
- Problem 2
- Problem 3

## Final Goal

Write a clear final learning outcome.
`;

    const response = await askAI(prompt);
    setRoadmap(response);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Your JavaScript Roadmap
        </h1>

        <p className="text-gray-400 mb-8">
          Generate a personalized JavaScript learning path using AI.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="bg-gray-900 border border-white/10 p-3 rounded-xl"
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>

          <button
            onClick={generateRoadmap}
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-semibold"
          >
            Generate Roadmap
          </button>
        </div>

       <div className="bg-gray-900 border border-white/10 p-6 rounded-2xl min-h-[500px]">
  {loading ? (
    "Generating roadmap..."
  ) : (
    <MarkdownRenderer>
  {roadmap || "Select your level and generate a roadmap."}
</MarkdownRenderer>
  )}
</div>
      </div>
    </div>
  );
}

export default Roadmap;