import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return(
        <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-xl font-bold text-purple-600"> AllanaCodes</h1>
                {/*Desktop Menu*/}
                <div className="space-x-4 hidden md:flex">
                    <a href="#home" className="hover:text-purple-600">Home</a>
                    <a href="#projects" className="hover:text-purple-600">Projects</a>
                    <a href="#about" className="hover:text-purple-600">About</a>
                    <a href="#contact" className="hover:text-purple-600">Contact</a>
                </div>
                {/* Hamburger Icon */}
                <div className="md:hidden">
                    <button onClick={() => setOpen(!open)} className="text-purple-600 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white px-4 pb-4 space-y-2 shadow-lg">
                    <a href="#home" className="block text-purple-600 hover:underline">Home</a>
                    <a href="#projects" className="block text-purple-600 hover:underline">Projects</a>
                    <a href="#about" className="block text-purple-600 hover:underline">About</a>
                    <a href="#contact" className="block text-purple-600 hover:underline">Contact</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;