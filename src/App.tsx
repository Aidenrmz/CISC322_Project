import { useState } from 'react';
import A1Report from './A1Report';
import A2Report from './A2Report';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'a1' | 'a2'>('home');


  const links = [
    { title: 'A1 • Conceptual Architecture', onClick: () => setCurrentPage('a1') },
    { title: 'A2 • Concrete Architecture', onClick: () => setCurrentPage('a2') },
    { title: 'A3 • Enhancement Proposal', href: '#' },
  ]

  const members = [
    { name: 'Aiden Ramezani', role: 'Group Leader' },
    { name: 'Kanika Poonia', role: 'Presenter' },
    { name: 'Divyanshi Agarwal', role: 'Presenter' },
    { name: 'Bella Xu', role: '' },
    { name: 'Vedansh Bhatt', role: '' },
    { name: 'Sameer Bandha', role: '' }
  ]
  if (currentPage === 'a1') {
    return <A1Report setCurrentPage={setCurrentPage} />;
  }
  if (currentPage === 'a2') {
    return <A2Report setCurrentPage={setCurrentPage} />;
  }

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <header className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 shadow-sm ring-1 ring-white/10 backdrop-blur">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
          <span>The Void Manual • CISC 322 Group 13</span>
        </div>
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          The Void Manual
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-white/70">
          Our course site for A0–A3: conceptual and concrete architecture, enhancement proposal,
          and AI collaboration.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
          >
            View Reports
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/0 px-5 py-2.5 text-sm font-semibold text-white/90 shadow-sm transition hover:bg-white/5"
          >
            View Repository
          </a>
        </div>
       {/*  <div className="pointer-events-none relative mx-auto mt-12 h-56 w-full max-w-4xl rounded-2xl bg-gradient-to-br from-emerald-500/20 via-cyan-400/10 to-indigo-500/20 ring-1 ring-white/10">
          <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        </div> */}
      </header>

      <section className="mt-16" aria-labelledby="quick-links-heading">
        <h2 id="quick-links-heading" className="text-lg font-semibold text-white/80">Quick Links</h2>
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <li key={link.title}>
              <button
                onClick={link.onClick}
                className={`group w-full ${link.onClick ? 'cursor-pointer' : 'cursor-not-allowed'} flex items-center justify-between gap-3 h-12 rounded-xl border border-white/10 bg-white/5 px-4 text-sm font-medium text-white/90 shadow-sm ring-1 ring-white/10 transition hover:bg-white/10`}
              >
                <span className="flex-1 truncate">{link.title}</span>
                <span aria-hidden className="shrink-0 translate-x-0 transition group-hover:translate-x-0.5">→</span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 justify-center items-center" aria-labelledby="about-heading">
        <h2 id="about-heading" className="text-lg font-semibold text-white/80 text-center">About The Project</h2>
      <div className="mt-4 max-w-3xl text-pretty text-white/70 space-y-4 text-center mx-auto">
          <p>
            This website hosts our CISC 322 group project on Void Editor. It aggregates deliverables and
            artifacts across the term and is intended to onboard newcomers by linking core materials and reports.
          </p>
          <p>
            A1 (Conceptual Architecture) presents system purpose, major components and interactions, control and
            data flow, concurrency, external interfaces, and two sequence diagrams. A2 (Concrete Architecture)
            reports the as-built structure using extracted dependencies, dives into one subsystem, compares against
            A1 (reflexion analysis), and includes diagrams. A3 (Enhancement Proposal) outlines an architectural
            change, risks and impacts, and provides a SAAM analysis of two realization options, with at least one
            sequence diagram.
          </p>
          <p>
            Each report is single-spaced, 12pt, concise, web-readable, and includes an AI Collaboration Report
            (Appendix D) detailing delegation, prompting, validation, and contribution.
          </p>
        </div>
      </section>

      <section className="mt-16" aria-labelledby="team-heading">
        <h2 id="team-heading" className="text-lg font-semibold text-white/80">Team Members</h2>
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m) => (
            <li key={m.name} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 text-left ring-1 ring-white/10">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold">
                {m.name.charAt(0)}
              </div>
              <div>
                <p className="font-medium leading-tight">{m.name}</p>
                <p className="text-sm text-white/70">{m.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-20 border-t border-white/10 pt-6 text-center text-white/60">
        <small>© {new Date().getFullYear()} Group 13 • The Void Manual</small>
      </footer>
    </main>
  )
}

export default App