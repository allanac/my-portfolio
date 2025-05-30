const Home = () => (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-300 via-indigo-400 to-purple-600 text-white text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-sm">Allana Coleman</h1>
        <p className="text-xl md:text-2xl mb-4 font-light tracking-wide">Quantitative Analyst • Fullstack Developer • Applied Mathematician</p>
        <p className="max-w-2xl md:text-lg font-light">
          I design intelligent models, simulate financial risk, and build beautiful interfaces.
          This portfolio features my projects in forecasting, data science, and systems thinking.
        </p>
        <a 
      href="#projects"
      className="mt-2 bg-white text-purple-700 px-6 py-2 rounded-full font-semibold hover:bg-purple-100 transition"
    >
      Explore My Work
    </a>
    </section>
);

export default Home;