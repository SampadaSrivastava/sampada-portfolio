import { useEffect, useState } from "react";
import { Github, Linkedin, Download, Menu, X } from "lucide-react";
import { config, nav } from "../data/portfolioData";
export default function Nav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    nav.forEach(([id]) => { const el = document.getElementById(id); el && io.observe(el); });
    return () => io.disconnect();
  }, []);
  return (
    <header className="nav">
      <a href="#home" className="brand">Sampada Srivastava</a>
      <nav className={open ? "links open" : "links"} aria-label="Primary">
        {nav.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className={active === id ? "on" : ""} aria-current={active === id ? "true" : undefined}>{label}</a>)}
      </nav>
      <div className="navtools">
        <a href={config.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
        <a href={config.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
        <a href={config.cv} download className="btn small"><Download size={15} /> CV</a>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}
