import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import About from "./components/About";
import Contact from "./components/Contact";


function App() {
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
    &copy; {new Date().getFullYear()} Allana Coleman · Built with React + Tailwind · 
    <a href="mailto:allanacodes@gmail.com" className="underline ml-1">Contact Me</a>
    </footer>
  </>
  );
};

export default App;