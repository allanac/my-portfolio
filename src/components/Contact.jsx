import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => (
  <section id="contact" className="py-20 px-6">
    <div className="max-w-4xl mx-auto bg-white text-gray-900 rounded-2xl shadow-xl p-8 md:p-12">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-600 mb-3">
          Contact
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-5">
          Let’s Connect
        </h2>

        <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
          I’m open to opportunities involving data analysis, forecasting,
          quantitative modeling, climate and weather analytics, financial risk,
          energy, and sports analytics.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <a
          href="mailto:allanacodes@gmail.com"
          className="flex items-center justify-center gap-3 border border-gray-200 rounded-xl px-5 py-4 text-gray-800 font-semibold hover:border-purple-500 hover:text-purple-700 hover:shadow-md transition"
        >
          <FaEnvelope className="text-purple-600 text-xl" />
          Email
        </a>

        <a
          href="https://github.com/allanac"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 border border-gray-200 rounded-xl px-5 py-4 text-gray-800 font-semibold hover:border-purple-500 hover:text-purple-700 hover:shadow-md transition"
        >
          <FaGithub className="text-purple-600 text-xl" />
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/allanac"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 border border-gray-200 rounded-xl px-5 py-4 text-gray-800 font-semibold hover:border-purple-500 hover:text-purple-700 hover:shadow-md transition"
        >
          <FaLinkedin className="text-purple-600 text-xl" />
          LinkedIn
        </a>
      </div>

      <div className="mt-10 pt-8 border-t border-gray-200 text-center">
  <p className="text-gray-600">
    Interested in discussing an opportunity, collaborating on a project,
    or connecting professionally? I’d be happy to hear from you.
  </p>
</div>
    </div>
  </section>
);

export default Contact;