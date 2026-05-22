import {
  ArrowUpRight,
  Blocks,
  Code2,
  BriefcaseBusiness,
  Globe2,
  Megaphone,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Ruby",
  "Golang",
  "Solidity",
  "Smart Contracts",
  "Ethereum",
  "Inkscape"
];

const roles = [
  {
    title: "Founder and Lead Developer",
    company: "Anvil Platform",
    href: "https://anvilplatform.io",
    description:
      "Building an integrated blockchain infrastructure platform for tokens, governance, membership management, and treasury operations."
  },
  {
    title: "Full Stack Developer",
    company: "Currency Exchange",
    description:
      "Developing secure, scalable software for currency exchange operations and financial transaction workflows."
  }
];

const projects = [
  {
    name: "BOSS",
    href: "https://boss.sh",
    label: "Business OS",
    icon: Workflow,
    description:
      "A business operating system for organizations, teams, collaboration, publishing, workflows, access control, and analytics."
  },
  {
    name: "Anvil Platform",
    href: "https://anvilplatform.io",
    label: "Web3 infrastructure",
    icon: Blocks,
    description:
      "A no-code Web3 platform for launching DAOs, ERC20 tokens, governance systems, and treasury tooling on audited smart contracts."
  },
  {
    name: "Fat Media",
    href: "https://fatmediagh.com",
    label: "Growth systems",
    icon: Megaphone,
    description:
      "A Ghana-focused social media agency building sharper content, websites, campaigns, and AI-powered customer communication systems."
  }
];

const chains = [
  {
    name: "Ethereum",
    detail: "Smart contracts and DApp integration",
    href: "https://ethereum.org"
  },
  {
    name: "Steem Blockchain",
    detail: "Decentralized social media platform development",
    href: "https://steemit.com/@dzivenu"
  },
  {
    name: "Blockstack / Stacks",
    detail: "Bitcoin-secured smart contracts",
    href: "https://github.com/daoed"
  }
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dzivenu/",
    icon: FaLinkedinIn
  },
  {
    label: "X",
    href: "https://x.com/dzivenug",
    icon: FaXTwitter
  },
  {
    label: "GitHub",
    href: "https://github.com/dzivenu",
    icon: FaGithub
  }
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="heroVisual" aria-hidden="true">
          <div className="signalGrid">
            {Array.from({ length: 36 }, (_, index) => (
              <span key={index} />
            ))}
          </div>
          <div className="orbital">
            <span />
            <span />
            <span />
          </div>
        </div>

        <nav className="topbar" aria-label="Primary navigation">
          <a className="brand" href="#hero-title" aria-label="Dzivenu home">
            Dzivenu
          </a>
          <div className="navLinks">
            <a href="#projects">Projects</a>
            <a href="#work">Work</a>
            <a href="#chains">Blockchain</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="heroContent">
          <p className="eyebrow">
            <Sparkles size={16} aria-hidden="true" />
            Full stack software developer
          </p>
          <h1 id="hero-title">Makafui George Dzivenu</h1>
          <p className="lede">
            I build durable web systems and decentralized infrastructure, with
            8 years of coding experience across blockchain products, financial
            workflows, and full stack applications. Right now, I am working on
            BOSS, Anvil Platform, and Fat Media.
          </p>

          <div className="heroActions" id="contact">
            <a className="primaryAction" href="https://anvilplatform.io">
              Visit Anvil Platform
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <div className="socialRail" aria-label="Social links">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a key={href} href={href} aria-label={label}>
                  <Icon aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="proofBand" aria-label="Profile highlights">
        <div>
          <strong>8</strong>
          <span>Years coding</span>
        </div>
        <div>
          <strong>3</strong>
          <span>Blockchain ecosystems</span>
        </div>
        <div>
          <strong>Full stack</strong>
          <span>Product to infrastructure</span>
        </div>
      </section>

      <section className="sectionFrame projectsSection" id="projects">
        <div className="sectionIntro">
          <p className="sectionKicker">
            <BriefcaseBusiness size={16} aria-hidden="true" />
            Working on
          </p>
          <h2>Three active products with one practical thread: systems that move work.</h2>
        </div>

        <div className="projectGrid">
          {projects.map(({ description, href, icon: Icon, label, name }) => (
            <a className="projectCard" href={href} key={name}>
              <span className="projectTopline">
                <Icon size={22} aria-hidden="true" />
                {label}
              </span>
              <strong>{name}</strong>
              <p>{description}</p>
              <span className="projectLink">
                <Globe2 size={16} aria-hidden="true" />
                {href.replace("https://", "")}
                <ArrowUpRight size={16} aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="sectionFrame" id="work">
        <div className="sectionIntro">
          <p className="sectionKicker">Current roles</p>
          <h2>Building products where money, membership, and governance meet.</h2>
        </div>

        <div className="roleGrid">
          {roles.map((role) => (
            <article className="roleCard" key={role.title}>
              <div className="roleIcon">
                {role.href ? (
                  <Network size={24} aria-hidden="true" />
                ) : (
                  <ShieldCheck size={24} aria-hidden="true" />
                )}
              </div>
              <h3>{role.title}</h3>
              {role.href ? (
                <a className="companyLink" href={role.href}>
                  {role.company}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              ) : (
                <p className="companyText">{role.company}</p>
              )}
              <p>{role.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sectionFrame split" id="chains">
        <div className="sectionIntro">
          <p className="sectionKicker">Blockchain experience</p>
          <h2>Practical infrastructure work across protocol cultures.</h2>
        </div>
        <div className="chainList">
          {chains.map((chain) => (
            <a className="chainItem" href={chain.href} key={chain.name}>
              <Blocks size={22} aria-hidden="true" />
              <span>
                <strong>{chain.name}</strong>
                <small>{chain.detail}</small>
              </span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <section className="skillsSection" aria-labelledby="skills-title">
        <div>
          <p className="sectionKicker">Technical range</p>
          <h2 id="skills-title">Comfortable from interface polish to contract logic.</h2>
        </div>
        <div className="skills">
          {skills.map((skill) => (
            <span key={skill}>
              <Code2 size={15} aria-hidden="true" />
              {skill}
            </span>
          ))}
        </div>
      </section>

      <footer>
        <span>Building the future of decentralized infrastructure.</span>
        <div className="footerLinks">
          <a href="https://www.linkedin.com/in/dzivenu/">linkedin.com/in/dzivenu</a>
          <a href="https://x.com/dzivenug">x.com/dzivenug</a>
          <a href="https://github.com/dzivenu">github.com/dzivenu</a>
        </div>
      </footer>
    </main>
  );
}
