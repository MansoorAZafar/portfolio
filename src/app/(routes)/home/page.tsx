import Intro from "../../../components/Intro";
import Projects from "../../../components/Projects";
import Contact from "../../../components/Contact";

export default function Home() {
  return (
    <div className="md:ml-[350px] transition-all duration-300">
      {/* Intro Section */}
      <section id="intro" className="min-h-full bg-[#111827] flex items-center justify-center">
        <Intro />
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-[#0f172a] flex items-center justify-center">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-11/12 bg-[#111827] flex items-center justify-center">
        <Contact />
      </section>
    </div>
  );
}
