const About = () => (
    <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10 text-center">

            <h2 className="text-3xl font-bold mb-6 text-gray-900">
                About Me
            </h2>

            <div className="space-y-5 text-lg leading-relaxed text-gray-700">

                <p>
                    I hold a <strong>Master of Science in Applied Mathematics</strong> and enjoy
                    applying data, programming, and statistical modeling to solve
                    real-world problems.
                </p>

                <p>
                    My experience spans quantitative modeling, software development,
                    international logistics, operations, marketing, and luxury client
                    services. Working across multiple industries has given me a practical,
                    business-focused perspective while strengthening my analytical thinking
                    and problem-solving skills.
                </p>

                <p>
                    I am passionate about transforming complex data into meaningful insights
                    and am particularly interested in quantitative research, forecasting,
                    financial modeling, climate and weather analytics, renewable energy,
                    and sports analytics.
                </p>

            </div>

            <a
                href="mailto:allanacodes@gmail.com?subject=Resume%20Request"
                className="inline-block mt-8 italic text-purple-600 hover:underline"
            >
                Resume available upon request
            </a>

        </div>
    </section>
);

export default About;