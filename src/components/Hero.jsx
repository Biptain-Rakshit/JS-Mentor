import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[150px] rounded-full"></div>

      <div className="relative z-10 text-center max-w-6xl">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 mb-8"
        >
          🚀 AI-Powered JavaScript Learning Platform
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
        >
          Learn JavaScript
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            With AI
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto"
        >
          Master JavaScript through AI tutoring, interactive coding,
          real-world projects and coding challenges.
        </motion.p>

        <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
  className="mt-10 flex flex-col sm:flex-row gap-5 justify-center"
>
  <Link
    to="/tutor"
    className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-medium hover:scale-105 transition text-center shadow-lg shadow-purple-500/25"
  >
    Start Learning
  </Link>

  <Link
    to="/playground"
    className="px-8 py-4 rounded-xl border border-white/20 text-white text-lg hover:bg-white/10 transition text-center"
  >
    Try Playground
  </Link>
</motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 grid grid-cols-3 gap-10 max-w-2xl mx-auto"
        >
          <div>
            <h2 className="text-4xl font-bold text-white">100+</h2>
            <p className="text-gray-400">Lessons</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-white">AI</h2>
            <p className="text-gray-400">Tutor</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-white">24/7</h2>
            <p className="text-gray-400">Learning</p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="mt-20 animate-bounce text-gray-500 text-3xl">
          ↓
        </div>
      </div>
    </section>
  );
};

export default Hero;