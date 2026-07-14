import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <a
          href="#home"
          className="text-xl font-bold text-purple-600 hover:text-purple-700"
          onClick={closeMenu}
        >
          AllanaCodes
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#home"
            className="text-gray-800 hover:text-purple-600 transition"
          >
            Home
          </a>

          <a
            href="#projects"
            className="text-gray-800 hover:text-purple-600 transition"
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-gray-800 hover:text-purple-600 transition"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-gray-800 hover:text-purple-600 transition"
          >
            Contact
          </a>
        </div>

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="md:hidden flex items-center justify-center p-2 text-purple-600 bg-transparent hover:text-purple-700"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                open
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 shadow-lg">
          <div className="flex flex-col gap-3">
            <a
              href="#home"
              onClick={closeMenu}
              className="block text-gray-800 font-semibold hover:text-purple-600"
            >
              Home
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="block text-gray-800 font-semibold hover:text-purple-600"
            >
              Projects
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="block text-gray-800 font-semibold hover:text-purple-600"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="block text-gray-800 font-semibold hover:text-purple-600"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;