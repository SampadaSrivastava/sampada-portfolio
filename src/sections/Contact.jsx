import { Github, Linkedin, Mail, Download, MapPin } from "lucide-react";
import { config, contact } from "../data/portfolioData";
export default function Contact() {
  return (<>
    <section id="contact" className="contact"><div className="wrap">
      <h2>{contact.heading}</h2><p className="lede">{contact.text}</p>
      <div className="cta">
        {config.email && <a className="btn" href={`mailto:${config.email}`}><Mail size={16} /> {config.email}</a>}
        <a className={config.email ? "btn ghost-l" : "btn"} href={config.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
        <a className="btn ghost-l" href={config.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
        <a className="btn ghost-l" href={config.cv} download><Download size={16} /> Download resume</a>
      </div>
      <p className="loc"><MapPin size={15} /> {config.location}</p>
    </div></section>
    <footer className="foot wrap">
      <div><strong>Sampada Srivastava</strong><p>AI/ML | Data Analytics | Business Analysis</p></div>
      <div className="social"><a href={config.github} target="_blank" rel="noreferrer">GitHub</a><a href={config.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>{config.email && <a href={`mailto:${config.email}`}>Email</a>}</div>
      <p>© {new Date().getFullYear()} Sampada Srivastava. Designed with curiosity. Built with purpose.</p>
    </footer>
  </>);
}
