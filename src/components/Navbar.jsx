import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return(
        <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-xl font-bold text-purple-600"> AllanaCodes</h1>
                <div className="space-x-4 hidden md:flex">
                    <a href="#home" className="hover:text-purple-600">Home</a>
                    <a href="#projects" className="hover:text-purple-600">Projects</a>
                    <a href="#about" className="hover:text-purple-600">About</a>
                    <a href="#contact" className="hover:text-purple-600">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;