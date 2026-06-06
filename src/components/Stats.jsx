const stats = [
  {
    number: "5+",
    label: "AI Learning Tools",
  },
  {
    number: "24/7",
    label: "AI Mentor Support",
  },
  {
    number: "100+",
    label: "Practice Ideas",
  },
];

function Stats() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg"
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {item.number}
            </h2>

            <p className="text-gray-400 mt-3">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;