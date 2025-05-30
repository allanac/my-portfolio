import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import About from "./components/About";
import Contact from "./components/Contact";


function App() {
  const [visits, setVisits] = useState(null);

  useEffect(() => {
    fetch('https://api.countapi.xyz/hit/allanac.my-portfolio/visits')
      .then(res => res.json())
      .then(data => setVisits(data.value));
  }, []);

  return (
    <>
    <Navbar />
    <main className="pt-20 space-y-16">
      <Home />
      <Projects />
      <About />
      <Contact />
    </main>
    <footer className="py-10 text-center text-sm text-gray-500">
      &copy; {new Date().getFullYear()} AllanaCodes · Built with React + Tailwind · 
      <a href="mailto:allanacodes@gmail.com" className="underline ml-1">Contact Me</a>
      {visits !== null && (
      <p className="mt-2 text-xs text-gray-400">Visitor Count: {visits}</p>
    )}
    </footer>
  </>
  );
};

export default App;