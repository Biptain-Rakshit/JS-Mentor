import {
  Bot,
  Code2,
  Trophy,
  Map,
  Rocket
} from "lucide-react";

const features = [
  {
    icon: <Bot size={32} />,
    title: "AI Tutor",
    desc: "Ask JavaScript questions anytime and get instant AI-powered explanations."
  },
  {
    icon: <Code2 size={32} />,
    title: "Code Playground",
    desc: "Write, run, debug and optimize JavaScript code directly in your browser."
  },
  {
    icon: <Map size={32} />,
    title: "Learning Roadmap",
    desc: "Generate a personalized JavaScript roadmap based on your level."
  },
  {
    icon: <Trophy size={32} />,
    title: "Challenges",
    desc: "Solve AI-generated coding challenges and get instant feedback."
  },
  {
    icon: <Rocket size={32} />,
    title: "Project Generator",
    desc: "Generate real-world JavaScript project ideas with step-by-step guidance."
  }
];

const Features = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-white mb-4">
          Everything You Need
        </h2>

        <p className="text-center text-gray-400 mb-14 max-w-2xl mx-auto">
          Learn JavaScript faster with AI-powered tools designed for students and developers.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:scale-105 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="text-purple-400 mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Features;