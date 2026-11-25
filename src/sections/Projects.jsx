import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ChevronDown } from "lucide-react";
import { projects, filters } from "../data/portfolioData";
import Art from "../components/Art";
export default function Projects() {
  const [f, setF] = useState("all");
  const [open, setOpen] = useState(null);
  const shown = projects.filter((p) => f === "all" || p.cats.includes(f));
  const avail = filters.filter(([k]) => k === "all" || projects.some((p) => p.cats.includes(k)));
  return (
    <section id="projects" className="wrap sec">
      <header className="head"><h2>Selected projects</h2></header>
      <div className="filters" role="tablist" aria-label="Project categories">
        {avail.map(([k, l]) => <button key={k} role="tab" aria-selected={f === k} className={f === k ? "on" : ""} onClick={() => setF(k)}>{l}</button>)}
      </div>
      <motion.div layout className="pgrid">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.article layout key={p.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="proj">
              <Art id={p.id} />
              <div className="pbody">
                <p className="tag">{p.kind}</p><h3>{p.title}</h3><p className="muted">{p.sub}</p>
                <ul className="pills">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
                <button className="more" aria-expanded={open === p.id} onClick={() => setOpen(open === p.id ? null : p.id)}>
                  {open === p.id ? "Hide details" : "Show details"} <ChevronDown size={16} className={open === p.id ? "flip" : ""} />
                </button>
                <AnimatePresence initial={false}>
                  {open === p.id && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="detail">
                      <h4>Problem</h4><p>{p.problem}</p><h4>Solution</h4><p>{p.solution}</p>
                      {p.impl.length > 0 && <><h4>Implementation</h4><ul className="ticks">{p.impl.map((i) => <li key={i}>{i}</li>)}</ul></>}
                    </motion.div>
                  )}
                </AnimatePresence>
                {(p.repo || p.demo) && <div className="plinks">
                  {p.repo && <a href={p.repo} target="_blank" rel="noreferrer"><Github size={16} /> Code</a>}
                  {p.demo && <a href={p.demo} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Live demo</a>}
                </div>}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
