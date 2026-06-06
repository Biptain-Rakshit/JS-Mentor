import ReactMarkdown from "react-markdown";

function MarkdownRenderer({ children }) {
  return (
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
        h3: ({ children }) => (
          <h3 className="text-xl font-bold text-white mt-4 mb-2">
            {children}
          </h3>
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
        ol: ({ children }) => (
          <ol className="list-decimal pl-6 space-y-2 mb-5 text-gray-300">
            {children}
          </ol>
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
        pre: ({ children }) => (
          <pre className="bg-black/60 border border-white/10 p-4 rounded-xl overflow-x-auto mb-5">
            {children}
          </pre>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}

export default MarkdownRenderer;