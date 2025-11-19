// src/A2Report.tsx
import React from 'react';

interface A2ReportProps {
  setCurrentPage: (page: 'home' | 'a2') => void;
}

const A2Report: React.FC<A2ReportProps> = ({ setCurrentPage }) => {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <header className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 shadow-sm ring-1 ring-white/10 backdrop-blur">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
          <span>Void Editor • CISC 322 Group 13</span>
        </div>
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          A2 • Concrete Architecture
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          This page presents the A2 report for our CISC 322 project.
        </p>
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setCurrentPage('home')}
            className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-emerald-400"
          >
            Back to Home
          </button>
        </div>
      </header>

      

      <footer className="mt-20 border-t border-white/10 pt-6 text-center text-white/60">
        <small>© {new Date().getFullYear()} Group 13 • The Void Manual</small>
      </footer>
      {/* Embedded PDF Section */}
      <section className="mt-16 max-w-3xl mx-auto text-white/70 space-y-4">
        <h2 className="text-2xl font-semibold">A2 Report PDF</h2>
        <iframe
          src="/A2Report.pdf"
          width="100%"
          height="600"
          className="border border-white/10 rounded-lg"
          title="A1 PDF"
        />
      </section>
      <section className="mt-16 max-w-3xl mx-auto text-white/70 space-y-4">
        <h2 className="text-2xl font-semibold">A2 Report PDF</h2>
        <iframe
          src="/A2ReportSlides.pdf"
          width="100%"
          height="600"
          className="border border-white/10 rounded-lg"
          title="A1 PDF"
        />
      </section>

      <footer className="mt-20 border-t border-white/10 pt-6 text-center text-white/60">
        <small>© {new Date().getFullYear()} Group 13 • The Void Manual</small>
      </footer>
    </main>
  );
};

export default A2Report;
