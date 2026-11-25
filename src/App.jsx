
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import {
  About,
  Experience,
  Bring,
  Skills,
  Flow,
  Beyond,
  Education,
  Approach
} from "./sections/Content";

export default function App() {
  const [top, setTop] = useState(false);

  // Back-to-top button
  useEffect(() => {
    const f = () => setTop(window.scrollY > 700);

    window.addEventListener("scroll", f, { passive: true });

    return () => window.removeEventListener("scroll", f);
  }, []);

  // Persistent click highlighting across the portfolio
  useEffect(() => {
    const handleClick = (event) => {
      const element = event.target.closest(
        'a, button, input, select, textarea, [role="button"], [data-click-highlight]'
      );

      if (element) {
        element.classList.add("click-highlighted");
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <a href="#about" className="skip">
        Skip to content
      </a>

      <Nav />

      <main>
        <Hero />
        <About />
        <Experience />
        <Bring />
        <Skills />
        <Projects />
        <Flow />
        <Beyond />
        <Education />
        <Approach />
      </main>

      <Contact />

      {top && (
        <button
          className="totop"
          aria-label="Back to top"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
        >
          <ArrowUp size={18} />
        </button>
      )}
    </>
  );
}

