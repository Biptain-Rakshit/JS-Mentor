import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);

    setOpen(false);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          onClick={scrollTop}
          className="text-2xl font-bold text-white hover:text-purple-400 transition duration-300"
        >
          JS Mentor AI
        </Link>

        <div className="hidden md:flex gap-8 text-gray-300">
          <Link to="/" onClick={scrollTop} className="hover:text-purple-400 transition duration-300">
            Home
          </Link>

          <Link to="/tutor" className="hover:text-purple-400 transition duration-300">
            Tutor
          </Link>

          <Link to="/playground" className="hover:text-purple-400 transition duration-300">
            Playground
          </Link>

          <Link to="/roadmap" className="hover:text-purple-400 transition duration-300">
            Roadmap
          </Link>

          <Link to="/challenge" className="hover:text-purple-400 transition duration-300">
            Challenge
          </Link>

          <Link to="/project-generator" className="hover:text-purple-400 transition duration-300">
            Projects
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-5 flex flex-col gap-5 text-gray-300">
          <Link to="/" onClick={scrollTop} className="hover:text-purple-400 transition">
            Home
          </Link>

          <Link to="/tutor" onClick={closeMenu} className="hover:text-purple-400 transition">
            Tutor
          </Link>

          <Link to="/playground" onClick={closeMenu} className="hover:text-purple-400 transition">
            Playground
          </Link>

          <Link to="/roadmap" onClick={closeMenu} className="hover:text-purple-400 transition">
            Roadmap
          </Link>

          <Link to="/challenge" onClick={closeMenu} className="hover:text-purple-400 transition">
            Challenge
          </Link>

          <Link to="/project-generator" onClick={closeMenu} className="hover:text-purple-400 transition">
            Projects
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;