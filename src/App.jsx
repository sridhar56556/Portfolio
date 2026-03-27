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
      <section className="h-screen relative">

        <img
          src={bg}
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute w-full h-full bg-black/70 flex flex-col items-center justify-center text-center px-4">

          <img
            src={profile}
            className="w-40 h-40 rounded-full border-4 border-cyan-400 object-cover shadow-lg"
          />

  <h1 className="text-5xl md:text-6xl font-bold mt-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text water-text">
  Konda Sridhar
</h1>

          <p className="mt-4 text-lg text-gray-300">
            Full Stack Developer | QA Tester | Problem Solver
          </p>

          <div className="mt-6 space-x-4">
         <a
  href="/KONDA _SRIDHAR_RESUME_1.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 border border-cyan-400 rounded-lg text-white hover:bg-cyan-400 hover:text-black transition"
>
  View Resume
</a>

            <a
              href="https://github.com/sridhar56556"
              target="_blank"
              className="px-6 py-3 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black"
            >
              GitHub
            </a>
            <a
  href="https://linkedin.com/in/kondasridhar"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black"
>
  LinkedIn
</a>
<a
  href="mailto:sridharkonda553@gmail.com"
  className="px-6 py-3 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
>
  Email
</a>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-gray-900 py-20 px-6 text-center">

        <h2 className="text-4xl font-bold text-yellow-400">About Me</h2>

        <p className="mt-6 max-w-3xl mx-auto text-gray-300 leading-relaxed">
          Computer Science graduate with hands-on experience in building Java backend systems,
          MySQL databases, and responsive web applications. Skilled in writing test cases,
          identifying software defects, and validating application behavior across multiple layers.
          Strong in analytical thinking and problem solving.
        </p>

        <p className="mt-4 text-gray-400">
          🎓 B.Tech CSE — Sree Chaitanya Institute of Technological Sciences (68%)
        </p>

      </section>

      {/* SKILLS */}
      <section className="bg-black py-20 px-6 text-center">

        <h2 className="text-4xl font-bold text-yellow-400">Technical Skills</h2>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {skills.map((s, i) => (
            <span
              key={i}
              className="px-5 py-3 bg-gray-800 rounded-lg hover:bg-cyan-500 transition"
            >
              {s}
            </span>
          ))}
        </div>

      </section>

      {/* PROJECTS */}
      <section className="bg-gray-900 py-20 px-6 text-center">

        <h2 className="text-4xl font-bold text-yellow-400">Projects</h2>

        <div className="mt-10 grid md:grid-cols-2 gap-6">

          <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold">
             Enabling Secure and Space-Efficient Metadata Management in Encrypted Deduplication
            </h3>
            <p className="mt-3 text-gray-400">
              Built using Java (J2EE), Servlets, JDBC, and MySQL. 
              Implemented encrypted deduplication to eliminate redundant storage 
              and improve efficiency.
            </p>
          </div>

      <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition">
  <h3 className="text-xl font-bold">
    Online Ticket Booking System
  </h3>

  <p className="mt-3 text-gray-400">
    Developed a responsive web app using HTML, CSS, JavaScript.
    Includes booking workflow, dashboard, and real-time fare calculation.
  </p>

  {/* Live Link */}
  <a
    href="https://sridhar56556.github.io/ticket-booking/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-4 text-cyan-400 hover:underline"
  >
    🔗 Live Demo
  </a>
</div>
<div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition">
  <h3 className="text-xl font-bold">
    TicTacToe Game (Java Servlet)
  </h3>

  <p className="mt-3 text-gray-400">
    Developed a TicTacToe game using Java Servlets, JSP, and MySQL.
    Implemented game logic, session handling, and dynamic UI rendering.
  </p>

  <div className="mt-4 space-x-4">

    {/* GitHub */}
    <a
      href="https://github.com/sridhar56556/TicTacToe-Game"
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
    >
      GitHub
    </a>

  </div>
</div>
<div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition">
  <h3 className="text-xl font-bold">
    Online Banking System
  </h3>

  <p className="mt-3 text-gray-400">
    Developed a basic online banking web application using HTML and CSS.
    Includes UI for account operations like balance view and transactions.
  </p>

  <div className="mt-4 space-x-4">

    <a
      href="https://github.com/sridhar56556/Online-Banking"
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
    >
      GitHub
    </a>

  </div>
</div>

        </div>

      </section>

      {/* CONTACT */}
      <section className="bg-black py-20 text-center">

        <h2 className="text-4xl font-bold text-yellow-400">Contact</h2>

        <p className="mt-6 text-gray-300">
          📧 sridharkonda553@gmail.com
        </p>

        <p className="text-gray-300">
          📍 Karimnagar, Telangana
        </p>

        <div className="mt-4 space-x-4">
          <a
            href="https://github.com/sridhar56556"
            target="_blank"
            className="text-cyan-400 hover:underline"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/kondasridhar"
            target="_blank"
            className="text-cyan-400 hover:underline"
          >
            LinkedIn
          </a>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 border-t border-gray-700 text-gray-400">
        © 2026 Konda Sridhar
      </footer>

    </div>
  );
}

export default App;