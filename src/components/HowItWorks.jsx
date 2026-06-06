const steps = [
  {
    step: "01",
    title: "Ask AI Tutor",
    desc: "Get instant JavaScript explanations with examples."
  },
  {
    step: "02",
    title: "Practice Code",
    desc: "Use the playground to write and test JavaScript."
  },
  {
    step: "03",
    title: "Solve Challenges",
    desc: "Improve your skills with AI-generated problems."
  },
  {
    step: "04",
    title: "Build Projects",
    desc: "Generate real-world project ideas and roadmaps."
  }
];

function HowItWorks() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-14">
          How It Works
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {steps.map((item) => (
            <div
              key={item.step}
              className="p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="text-4xl font-bold text-purple-400 mb-4">
                {item.step}
              </div>

              <h3 className="text-xl font-semibold mb-3">
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
}

export default HowItWorks;