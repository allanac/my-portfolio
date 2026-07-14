const Home = () => (
  <section
    id="home"
    className="min-h-screen flex items-center bg-gradient-to-br from-purple-300 via-indigo-400 to-purple-600 text-white px-6 py-24"
  >
    <div className="max-w-6xl mx-auto w-full grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-center">
      
      <div className="text-center md:text-left">
        <p className="text-sm md:text-base uppercase tracking-[0.28em] font-semibold mb-4 text-white/80">
          Applied Mathematics · Data Analysis · Technology
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-5 drop-shadow-sm">
          Allana Coleman
        </h1>

        <p className="text-xl md:text-2xl font-light tracking-wide mb-6">
          Data Analysis · Quantitative Modeling · Forecasting
        </p>

        <p className="max-w-2xl mx-auto md:mx-0 text-base md:text-lg leading-relaxed text-white/90">
          I use data analysis, mathematical modeling, and programming to solve
          real-world problems involving financial risk, pricing, forecasting,
          climate and weather, and business decision-making.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold hover:bg-purple-100 transition"
          >
            Explore My Work
          </a>

          <a
            href="#about"
            className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-700 transition"
          >
            About Me
          </a>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 shadow-xl">
        <p className="text-sm uppercase tracking-[0.2em] font-semibold text-white/75 mb-5">
          Current Focus
        </p>

        <div className="space-y-5">
          <div>
            <h2 className="font-semibold text-lg">Data Analysis</h2>
            <p className="text-sm text-white/80">
              Identifying patterns, interpreting results, and translating data
              into clear, useful insights.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">
              Forecasting & Risk
            </h2>
            <p className="text-sm text-white/80">
              Time series, market behavior, financial uncertainty, and extreme
              weather events.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">
              Mathematical Modeling
            </h2>
            <p className="text-sm text-white/80">
              Python, R, SQL, machine learning, statistical analysis, and
              business-focused problem solving.
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default Home;