import bg from "./assets/bg.jpeg";
import profile from "./assets/profile.jpeg";

function App() {
  const skills = [
    "Java", "SQL", "MySQL", "JavaScript",
    "HTML5", "CSS3", "Git", "Power BI",
    "OOP", "Data Structures"
  ];

  return (
    <div className="text-white font-sans">

      {/* HERO */}
      <section className="min-h-screen relative">

        <img
          src={bg}
          alt="bg"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute w-full h-full bg-black/70 flex flex-col items-center justify-center text-center px-4">

          <img
            src={profile}
            alt="profile"
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-4 border-cyan-400 object-cover shadow-lg"
          />

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Konda Sridhar
          </h1>

          <p className="mt-4 text-sm sm:text-lg text-gray-300">
            Full Stack Developer | QA Tester | Problem Solver
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">

            <a
              href="/KONDA _SRIDHAR_RESUME_1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 sm:px-6 sm:py-3 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
            >
              View Resume
            </a>

            <a
              href="https://github.com/sridhar56556"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 sm:px-6 sm:py-3 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/kondasridhar"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 sm:px-6 sm:py-3 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:sridharkonda553@gmail.com"
              className="px-4 py-2 sm:px-6 sm:py-3 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
            >
              Email
            </a>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-gray-900 py-16 px-6 text-center">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400">
          About Me
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-sm sm:text-base leading-relaxed">
          Computer Science graduate with hands-on experience in building Java backend systems,
          MySQL databases, and responsive web applications. Skilled in writing test cases,
          identifying software defects, and validating application behavior.
        </p>

        <p className="mt-4 text-gray-400 text-sm">
          🎓 B.Tech CSE — Sree Chaitanya Institute of Technological Sciences (68%)
        </p>

      </section>

      {/* SKILLS */}
      <section className="bg-black py-16 px-6 text-center">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400">
          Technical Skills
        </h2>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {skills.map((s, i) => (
            <span
              key={i}
              className="px-3 py-2 sm:px-5 sm:py-3 bg-gray-800 rounded-lg hover:bg-cyan-500 transition text-sm sm:text-base"
            >
              {s}
            </span>
          ))}
        </div>

      </section>

      {/* PROJECTS */}
      <section className="bg-gray-900 py-16 px-6 text-center">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400">
          Projects
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Project 1 */}
          <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition">
            <h3 className="text-lg sm:text-xl font-bold">
              Secure Metadata Management System
            </h3>
            <p className="mt-3 text-gray-400 text-sm">
              Java (J2EE), Servlets, JDBC, MySQL with encrypted deduplication.
            </p>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition">
            <h3 className="text-lg sm:text-xl font-bold">
              Ticket Booking System
            </h3>
            <p className="mt-3 text-gray-400 text-sm">
              HTML, CSS, JS with booking workflow & dashboard.
            </p>

            <a
              href="https://sridhar56556.github.io/ticket-booking/"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-cyan-400 hover:underline"
            >
              🔗 Live Demo
            </a>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition">
            <h3 className="text-lg sm:text-xl font-bold">
              TicTacToe Game
            </h3>

            <a
              href="https://github.com/sridhar56556/TicTacToe-Game"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black"
            >
              GitHub
            </a>
          </div>

          {/* Project 4 */}
          <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition">
            <h3 className="text-lg sm:text-xl font-bold">
              Online Banking
            </h3>

            <a
              href="https://github.com/sridhar56556/Online-Banking"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black"
            >
              GitHub
            </a>
          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section className="bg-black py-16 text-center">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400">
          Contact
        </h2>

        <p className="mt-6 text-gray-300 text-sm">
          📧 sridharkonda553@gmail.com
        </p>

        <p className="text-gray-300 text-sm">
          📍 Karimnagar, Telangana
        </p>

      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 border-t border-gray-700 text-gray-400 text-sm">
        © 2026 Konda Sridhar
      </footer>

    </div>
  );
}

export default App;