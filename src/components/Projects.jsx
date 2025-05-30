const Projects = () => (
    <section id="projects" className="py-20 px-6 bg-gradient-to-r from-gray-200 via-black-600 to-white-800">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            
            <div className="p-6 bg-white text-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2"> Crash Date Forecasting</h3>
                <p className="text-sm mb-4 leading-relaxed">Predicted market crashes using Yahoo Finance API and ML models in Python.</p>
                <div className="flex space-x-4 text-sm font-medium">
                    <a href="https://github.com/allanac/my-portfolio/blob/main/project-code/crash_forecasting_code.ipynb" 
                    className="text-purple-600 hover:underline" 
                    target="_blank" 
                    rel="noopener noreferrer">Code</a>
                    <a href="/my-portfolio/crash_forecasting_report.pdf" className="text-purple-600 underline" target="_blank" rel="noopener noreferrer">Report</a>
                </div>
            </div>
            
            <div className="p-6 bg-white text-gray-800 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Parametric Insurance Model</h3>
                <p className="text-sm mb-4 leading-relaxed">Forecasted wind risks using ARIMA + GEV on NOAA data (R + Python).</p>
                <div className="flex space-x-4">
                    <a href="https://github.com/allanac/my-portfolio/blob/main/project-code/parametric_insurance_code.ipynb" className="text-purple-600 underline" target="_blank">Code</a>
                    <a href="/my-portfolio/parametric_insurance_report.pdf" className="text-purple-600 underline" target="_blank">Report</a>
                </div>
            </div>
           
            <div className="p-6 bg-white text-gray-800 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2"> Student Mental Health Analysis</h3>
                <p className="text-sm mb-4 leading-relaxed">Used Logistic Regression, QDA, LDA, to test and predict student mood based on different factors</p>
                <div className="flex space-x-4">
                    <a href="https://github.com/allanac/my-portfolio/blob/main/project-code/student_stress_analysis.R" className="text-purple-600 underline" target="_blank">Code</a>
                    <a href="/my-portfolio/student_stress_report.pdf" className="text-purple-600 underline" target="_blank">Report</a>
                </div>
            </div>

        </div>
    </section>
);

export default Projects; 