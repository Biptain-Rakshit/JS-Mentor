const Footer = () => {
  return (
    <footer className="py-10 border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-2xl font-bold text-white mb-2">
          JS Mentor AI
        </h2>

        <p className="text-gray-400 mb-4">
          Learn JavaScript smarter with AI-powered tools.
        </p>

        <div className="flex justify-center gap-6 text-sm text-gray-500 mb-4">
          <span>🤖 AI Tutor</span>
          <span>💻 Playground</span>
          <span>🏆 Challenges</span>
          <span>🚀 Projects</span>
        </div>

        <p className="text-gray-500 text-sm">
          Built by Biptain Rakshit • Powered by Groq AI • Hackathon 2026
        </p>

      </div>
    </footer>
  );
};

export default Footer;