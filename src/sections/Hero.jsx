
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { config, hero } from "../data/portfolioData";

const v = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.6 }
  })
};

export default function Hero() {
  const [bad, setBad] = useState(false);
  const mail = config.email ? `mailto:${config.email}` : config.linkedin;

  return (
    <section id="home" className="hero wrap">
      <div className="hero-text">
        <motion.p
          variants={v}
          initial="hidden"
          animate="show"
          custom={0}
          className="eyebrow"
        >
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          variants={v}
          initial="hidden"
          animate="show"
          custom={1}
        >
          {hero.title}
        </motion.h1>

        <motion.p
          variants={v}
          initial="hidden"
          animate="show"
          custom={2}
          className="lede"
        >
          {hero.text}
        </motion.p>

        <motion.ul
          variants={v}
          initial="hidden"
          animate="show"
          custom={3}
          className="chips"
        >
          {hero.labels.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </motion.ul>

        <motion.div
          variants={v}
          initial="hidden"
          animate="show"
          custom={4}
          className="cta"
        >
          <a className="btn" href="#projects">
            Explore my work
          </a>

          <a
  className="btn ghost"
  href={config.cv}
  target="_blank"
  rel="noopener noreferrer"
>
  View My CV
</a>
          <a className="btn ghost" href="#contact">
            Let's connect
          </a>
        </motion.div>

        <div className="social">
          <a href={config.github} target="_blank" rel="noreferrer">
            <Github size={16} /> GitHub
          </a>

          <a href={config.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={16} /> LinkedIn
          </a>

          <a
            href={mail}
            {...(config.email ? {} : {
              target: "_blank",
              rel: "noreferrer"
            })}
          >
            <Mail size={16} />
            {config.email ? "Email" : "Message on LinkedIn"}
          </a>
        </div>

        <p className="status">
          <span className="dot" />
          {hero.status}
        </p>
      </div>

      <motion.div
        className="portrait"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="frame">
          {bad ? (
            <div className="ph">
              <span>SS</span>
              <small>Add public/assets/profile.jpg</small>
            </div>
          ) : (
            <img
              src={config.photo}
              alt="Sampada Srivastava"
              onError={() => setBad(true)}
              width="480"
              height="600"
            />
          )}
        </div>
      </motion.div>

      <a href="#about" className="scroll" aria-label="Scroll to About">
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
