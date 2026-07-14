import { FaGithub, FaFilePdf } from "react-icons/fa";

const Projects = () => (
  <section id="projects" className="py-20 px-6">
    <div className="w-full max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-400 mb-3">
          Selected Work
        </p>

        <h2 className="text-4xl font-bold text-white mb-4">
          Featured Projects
        </h2>

        <p className="max-w-2xl mx-auto text-gray-300 leading-relaxed">
          Analytical projects exploring forecasting, risk, classification,
          and data-driven decision-making.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <article className="bg-white text-gray-900 rounded-2xl shadow-xl p-7 flex flex-col h-full border border-gray-200 hover:-translate-y-1 hover:shadow-2xl transition duration-300">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-600 mb-3">
            Financial Analytics
          </p>

          <h3 className="text-2xl font-bold mb-6">
            Crash Date Forecasting
          </h3>

          <div className="space-y-5">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Business Problem
              </h4>

              <p className="text-sm text-gray-600 leading-relaxed">
                Can financial market indicators help identify potential
                downturns before they occur?
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Data & Tools
              </h4>

              <p className="text-sm text-gray-600 leading-relaxed">
                Python · Yahoo Finance API · Logistic Regression · Rolling
                Forecasts
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Business Impact
              </h4>

              <p className="text-sm text-gray-600 leading-relaxed">
                Demonstrated how predictive analysis can support risk-aware
                investment decisions and the evaluation of market warning
                signals.
              </p>
            </div>
          </div>

          <div className="mt-auto pt-8 flex gap-3">
            <a
              href="https://github.com/allanac/my-portfolio/blob/main/project-code/crash_forecasting_code.ipynb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-purple-600 text-white rounded-lg px-3 py-3 text-sm font-semibold hover:bg-purple-700 transition"
            >
              <FaGithub />
              Code
            </a>

            <a
              href="/my-portfolio/crash_forecasting_report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 border border-purple-600 text-purple-700 rounded-lg px-3 py-3 text-sm font-semibold hover:bg-purple-50 transition"
            >
              <FaFilePdf />
              Report
            </a>
          </div>
        </article>

        <article className="bg-white text-gray-900 rounded-2xl shadow-xl p-7 flex flex-col h-full border border-gray-200 hover:-translate-y-1 hover:shadow-2xl transition duration-300">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-600 mb-3">
            Climate Risk
          </p>

          <h3 className="text-2xl font-bold mb-6">
            Parametric Insurance Model
          </h3>

          <div className="space-y-5">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Business Problem
              </h4>

              <p className="text-sm text-gray-600 leading-relaxed">
                How can wind forecasting and extreme-value analysis support
                risk pricing for weather-based insurance?
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Data & Tools
              </h4>

              <p className="text-sm text-gray-600 leading-relaxed">
                Python · R · NOAA Data · ARIMA · SARIMA · GEV
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Business Impact
              </h4>

              <p className="text-sm text-gray-600 leading-relaxed">
                Modeled wind behavior and rare-event exposure to demonstrate
                how weather data can inform payout design, pricing sensitivity,
                and catastrophe risk.
              </p>
            </div>
          </div>

          <div className="mt-auto pt-8 flex gap-3">
            <a
              href="https://github.com/allanac/my-portfolio/blob/main/project-code/parametric_insurance_code.ipynb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-purple-600 text-white rounded-lg px-3 py-3 text-sm font-semibold hover:bg-purple-700 transition"
            >
              <FaGithub />
              Code
            </a>

            <a
              href="/my-portfolio/parametric_insurance_report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 border border-purple-600 text-purple-700 rounded-lg px-3 py-3 text-sm font-semibold hover:bg-purple-50 transition"
            >
              <FaFilePdf />
              Report
            </a>
          </div>
        </article>

        <article className="bg-white text-gray-900 rounded-2xl shadow-xl p-7 flex flex-col h-full border border-gray-200 hover:-translate-y-1 hover:shadow-2xl transition duration-300">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-600 mb-3">
            Statistical Classification
          </p>

          <h3 className="text-2xl font-bold mb-6">
            Student Mental Health Analysis
          </h3>

          <div className="space-y-5">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Analytical Problem
              </h4>

              <p className="text-sm text-gray-600 leading-relaxed">
                Which variables and statistical methods are most useful for
                classifying student stress and mood outcomes?
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Data & Tools
              </h4>

              <p className="text-sm text-gray-600 leading-relaxed">
                R · LASSO · PCA · Multinomial Logistic Regression ·
                Cross-Validation
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Analytical Impact
              </h4>

              <p className="text-sm text-gray-600 leading-relaxed">
                Compared feature-selection and classification techniques to
                identify meaningful predictors and evaluate model performance
                across multiple stress categories.
              </p>
            </div>
          </div>

          <div className="mt-auto pt-8 flex gap-3">
            <a
              href="https://github.com/allanac/my-portfolio/blob/main/project-code/student_stress_analysis.R"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-purple-600 text-white rounded-lg px-3 py-3 text-sm font-semibold hover:bg-purple-700 transition"
            >
              <FaGithub />
              Code
            </a>

            <a
              href="/my-portfolio/student_stress_report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 border border-purple-600 text-purple-700 rounded-lg px-3 py-3 text-sm font-semibold hover:bg-purple-50 transition"
            >
              <FaFilePdf />
              Report
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
);

export default Projects;