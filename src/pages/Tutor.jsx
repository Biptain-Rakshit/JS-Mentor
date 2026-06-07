import { useState } from "react";
import { askAI } from "../utils/ai";
import ReactMarkdown from "react-markdown";
import MarkdownRenderer from "../components/MarkdownRenderer";

function Tutor() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "👋 Hello! I am your JavaScript AI Tutor. Ask me anything about JavaScript.",
    },
  ]);

  const handleSend = async () => {
  if (!message.trim()) return;

  const userMessage = message;

  setMessages((prev) => [
    ...prev,
    {
      role: "user",
      text: userMessage,
    },
  ]);

  setMessage("");

  const aiReply = await askAI(userMessage);

  setMessages((prev) => [
    ...prev,
    {
      role: "ai",
      text: aiReply,
    },
  ]);
};
// console.log(import.meta.env.VITE_GEMINI_API_KEY);

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold">
            AI JavaScript Tutor
          </h1>

          <p className="text-gray-400 mt-3">
            Ask anything about JavaScript
          </p>
        </div>

        {/* Chat Area */}
        <div className="bg-white/5 border border-white/10 rounded-2xl h-[500px] p-6 overflow-y-auto">

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-4 flex ${
                msg.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] p-4 rounded-xl ${
                  msg.role === "user"
                    ? "bg-purple-600"
                    : "bg-white/10"
                }`}
              >
                <MarkdownRenderer>
                    {msg.text}
                  </MarkdownRenderer>
              </div>
            </div>
          ))}

        </div>

        {/* Input */}
        <div className="mt-6 flex gap-3">

          <input
            type="text"
            placeholder="Ask about JavaScript..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none"
          />

          <button
            onClick={handleSend}
            className="bg-purple-600 px-6 rounded-xl hover:bg-purple-700 transition"
          >
            Send
          </button>

        </div>

      </div>
    </div>
  );
}

export default Tutor;