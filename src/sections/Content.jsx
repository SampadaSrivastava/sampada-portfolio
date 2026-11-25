import { useState } from "react";
import { Cpu, BarChart3, Compass, Users } from "lucide-react";
import { about, bring, experience, skills, flow, beyond, education, certs, approach, projects } from "../data/portfolioData";
import Art from "../components/Art";
const icons = { Cpu, BarChart3, Compass, Users };
const Head = ({ children, sub }) => <header className="head"><h2>{children}</h2>{sub && <p>{sub}</p>}</header>;

export function About() {
  return (<section id="about" className="wrap sec"><div className="split">
    <Head>{about.heading}</Head>
    <div><div className="prose">{about.paras.map((p, i) => <p key={i}>{p}</p>)}</div>
      <dl className="facts">{about.facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></div>
  </div></section>);
}

export function Experience() {
  return (
    <section id="experience" className="wrap sec">
      <Head>Experience</Head>
      <ol className="timeline">
        {experience.map((e) => (
          <li key={e.org + e.role}>
            <div className="when">
              {e.when || "College activities"}
            </div>
            <div>
              <h3>{e.role}</h3>
              <p className="org">{e.org}</p>
              <ul className="ticks">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

 
export function Bring() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="bring" className="wrap sec">
      <Head sub="What I can contribute beyond technical knowledge.">
        What I bring to the table
      </Head>

      <div className="bring">
        {bring.map((b, i) => {
          const I = icons[b.icon];

          return (
            <article
              key={b.title}
              className={`card c${i} ${selected === i ? "is-selected" : ""}`}
              role="button"
              tabIndex={0}
              aria-pressed={selected === i}
              onClick={() => setSelected(selected === i ? null : i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelected(selected === i ? null : i);
                }
              }}
            >
              <I size={22} />
              <p className="tag">{b.tag}</p>
              <h3>{b.title}</h3>
              <p>{b.text}</p>

              <ul className="ticks">
                {b.items.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function Skills() {
  return (<section id="skills" className="wrap sec"><Head>Technical skills</Head>
    <div className="skills">{skills.map(([cat, list]) => <div key={cat} className="skillrow"><h3>{cat}</h3><ul>{list.map((s) => <li key={s}>{s}</li>)}</ul></div>)}</div></section>);
}
export function Flow() {
  const er = projects.find((p) => p.id === flow.featured);
  return (<section id="flow" className="wrap sec"><Head sub={flow.intro}>{flow.heading}</Head>
    <ol className="steps">{flow.steps.map(([t, d], i) => <li key={t}><span>{i + 1}</span><h3>{t}</h3><p>{d}</p></li>)}</ol>
    <div className="split flowbot"><ul className="ticks">{flow.interests.map((x) => <li key={x}>{x}</li>)}</ul>
      <article className="feature"><Art id={er.id} /><div><p className="tag">Featured example</p><h3>{er.title}</h3><p>{er.solution}</p><p className="muted">Built as a learning project; not professional analyst experience.</p>
        <a className="btn small" href="#projects">See project details</a></div></article></div></section>);
}

export function Beyond() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="beyond" className="wrap sec">
      <Head sub={beyond.sub}>{beyond.heading}</Head>

      <div className="collage">
        {beyond.items.map(([t, d, size], i) => {
          const isArtEvent =
            t.toLowerCase().includes("art") &&
            t.toLowerCase().includes("event");

          return (
            <article
              key={t}
              className={`tile ${size} t${i} ${selected === i ? "is-selected" : ""}`}
              role="button"
              tabIndex={0}
              aria-pressed={selected === i}
              onClick={() => setSelected(selected === i ? null : i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelected(selected === i ? null : i);
                }
              }}
            >
              <h3>{t}</h3>
              <p>{d}</p>

              {isArtEvent && (
                <img
                  src="/images/art-event.png"
                  alt="Art and Event Club"
                  className="art-event-image"
                />
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="wrap sec">
      <Head>Education</Head>
      <div className="split">
        <article className="edu">
          <p className="when">{education.years}</p>
          <h3>{education.school}</h3>
          <p>{education.degree}</p>
          <p className="muted">{education.text}</p>
        </article>
        <div>
          <h3 className="sub">Certifications</h3>
          <ul className="certs">
            {certs.map((c) => (
              <li key={c.name}>
                {c.link ? (
                  <a href={c.link} target="_blank" rel="noreferrer">
                    {c.name}
                  </a>
                ) : (
                  <span>{c.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Approach() {
  return (<section id="approach" className="wrap sec"><Head>How I approach problems</Head>
    <dl className="approach">{approach.map(([t, d]) => <div key={t}><dt>{t}</dt><dd>{d}</dd></div>)}</dl></section>);
}
