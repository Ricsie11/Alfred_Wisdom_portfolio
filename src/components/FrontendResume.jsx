import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiGithub } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const FrontendResume = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans p-8 md:p-16 print:p-0">
      <style>{`
        @page {
          size: A4 portrait;
          margin: 0.35in;
        }
        @media print {
          .resume-scale {
            zoom: 0.78;
          }
        }
      `}</style>

      {/* Nav */}
      <div className="fixed top-4 right-4 print:hidden z-50 flex items-center gap-3">
        <Link
          to="/resume/frontend"
          className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium shadow-sm transition-colors text-sm"
        >
          Frontend
        </Link>
        <Link
          to="/resume/backend"
          className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full font-medium shadow-sm transition-colors text-sm"
        >
          Backend
        </Link>
        <button
          onClick={() => window.print()}
          className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-full text-sm font-medium"
        >
          Print
        </button>
      </div>

      <div className="resume-scale max-w-4xl mx-auto bg-white print:max-w-none">

        {/* Header */}
        <header className="border-b-2 border-gray-800 pb-8 mb-8 print:pb-3 print:mb-3">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-2 print:text-3xl print:mb-1">Alfred Wisdom</h1>
          <h2 className="text-xl md:text-2xl text-blue-600 font-semibold mb-6 print:text-lg print:mb-3">Frontend Developer</h2>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <FiMapPin className="text-blue-600 shrink-0" />
              Abuja, Nigeria
            </div>
            <div className="flex items-center gap-2">
              <FiPhone className="text-blue-600 shrink-0" />
              <a href="tel:09021704294" className="hover:text-blue-600 transition-colors">09021704294</a>
            </div>
            <div className="flex items-center gap-2">
              <FaWhatsapp className="text-green-600 shrink-0" />
              <a href="https://wa.me/2347025293112" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 transition-colors">07025293112</a>
            </div>
            <div className="flex items-center gap-2">
              <FiMail className="text-blue-600 shrink-0" />
              <a href="mailto:wisdomalfred964@gmail.com" className="hover:text-blue-600 transition-colors">wisdomalfred964@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <FiGithub className="text-blue-600 shrink-0" />
              <a href="https://github.com/Ricsie11" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">github.com/Ricsie11</a>
            </div>
          </div>
        </header>

        <main className="space-y-8 print:space-y-3">

          {/* Summary */}
          <section>
            <h3 className="text-xl font-bold uppercase tracking-wide border-b border-gray-300 pb-2 mb-4 text-gray-900">
              Summary
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Frontend developer who builds interfaces that actually feel good to use. I work primarily in React and 
              TypeScript, with Tailwind CSS and Framer Motion for styling and animation. I care about the details that 
              separate a polished UI from a rough one to performance, smooth interactions, clean component architecture, 
              and pages that load fast. I've shipped web and mobile frontends for real clients and know how to work 
              alongside a backend team without needing my hand held.
            </p>
          </section>

          {/* Experience */}
          <section>
            <h3 className="text-xl font-bold uppercase tracking-wide border-b border-gray-300 pb-2 mb-4 text-gray-900">
              Experience
            </h3>

            <div>
              <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                <h4 className="text-lg font-bold text-gray-800">Freelance Frontend Developer</h4>
                <span className="text-sm text-gray-500 font-medium">2025 – Present</span>
              </div>
              <p className="text-blue-600 font-medium text-sm mb-3">Remote · Contract</p>
              <ul className="list-disc list-outside ml-5 text-gray-700 space-y-2 text-sm leading-relaxed">
                <li>
                  Built responsive, component-driven UIs with React and Tailwind CSS — structuring layouts with 
                  CSS Grid for pages and Flexbox for component-level alignment, so things actually hold up across screen sizes.
                </li>
                <li>
                  Added Framer Motion animations to client projects for page transitions, scroll reveals, and 
                  micro-interactions — always tied to real UX purpose, not just decoration.
                </li>
                <li>
                  Extracted reusable logic into custom hooks (<code className="bg-gray-100 px-1 rounded text-xs">useFetch</code>,{' '}
                  <code className="bg-gray-100 px-1 rounded text-xs">useDebounce</code>) to keep components clean and avoid 
                  copy-pasting stateful logic across the codebase.
                </li>
                <li>
                  Implemented code splitting with <code className="bg-gray-100 px-1 rounded text-xs">React.lazy()</code> and{' '}
                  <code className="bg-gray-100 px-1 rounded text-xs">Suspense</code> to reduce initial bundle size, 
                  and added debouncing on search inputs to avoid hammering APIs on every keystroke.
                </li>
                <li>
                  Handled SEO with <code className="bg-gray-100 px-1 rounded text-xs">react-helmet-async</code> — meta tags, 
                  Open Graph, and page titles — and integrated newsletter subscriptions via Brevo.
                </li>
                <li>
                  Consumed RESTful APIs with proper loading states, error boundaries, and optimistic UI updates 
                  on interactive actions to keep the app feeling snappy even before server confirmation.
                </li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h3 className="text-xl font-bold uppercase tracking-wide border-b border-gray-300 pb-2 mb-4 text-gray-900">
              Projects
            </h3>
            <div className="space-y-5">

              <div>
                <h4 className="font-bold text-gray-800 mb-1">Fund Revolution — Fintech Cooperative Platform</h4>
                <p className="text-sm text-gray-500 italic mb-1">React · TypeScript · Tailwind CSS · Framer Motion · react-helmet-async</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Frontend for a Nigerian fintech and cooperative finance platform. Built multi-page components 
                  with smooth Framer Motion transitions, implemented SEO via react-helmet-async, and integrated 
                  a Brevo newsletter subscription flow. Focused on making a financial product feel trustworthy 
                  and polished, not just functional.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-1">Styles by Ryan — Client Website</h4>
                <p className="text-sm text-gray-500 italic mb-1">React · Tailwind CSS · Framer Motion</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Live production site built for a real client. Handled the full frontend lifecycle from design 
                  to deployment — responsive layout, animations, and delivering something the client could 
                  actually hand to customers. Still live.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-1">Trackr — Expense Dashboard Frontend</h4>
                <p className="text-sm text-gray-500 italic mb-1">React · Tailwind CSS · Chart.js · Django REST API</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Frontend for a full-stack expense tracking app. Built interactive chart dashboards for 
                  monthly summaries and category breakdowns, designed the budgeting UI, and handled API 
                  integration with the Django backend — including loading states and error handling throughout.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-1">DailyTask — React Native Task Planner</h4>
                <p className="text-sm text-gray-500 italic mb-1">React Native · Expo · TypeScript · EAS Build</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Full mobile app built from design spec to APK distribution — my first complete React Native 
                  project. Handled EAS Build configuration, GitHub Actions for CI, and Firebase App Distribution 
                  for testing. Shows that my component thinking carries across web and mobile.
                </p>
              </div>

            </div>
          </section>

          {/* Skills */}
          <section>
            <h3 className="text-xl font-bold uppercase tracking-wide border-b border-gray-300 pb-2 mb-4 text-gray-900">
              Technical Skills
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex flex-wrap gap-x-2">
                <span className="font-semibold text-gray-800 shrink-0">Languages:</span>
                <span className="text-gray-700">JavaScript (ES6+), TypeScript, HTML5, CSS3</span>
              </div>
              <div className="flex flex-wrap gap-x-2">
                <span className="font-semibold text-gray-800 shrink-0">Frameworks & Libraries:</span>
                <span className="text-gray-700">React, React Native (Expo), Framer Motion, Chart.js</span>
              </div>
              <div className="flex flex-wrap gap-x-2">
                <span className="font-semibold text-gray-800 shrink-0">Styling:</span>
                <span className="text-gray-700">Tailwind CSS, CSS Grid, Flexbox, responsive design</span>
              </div>
              <div className="flex flex-wrap gap-x-2">
                <span className="font-semibold text-gray-800 shrink-0">Performance & SEO:</span>
                <span className="text-gray-700">Code splitting (React.lazy), debouncing, react-helmet-async, lazy loading</span>
              </div>
              <div className="flex flex-wrap gap-x-2">
                <span className="font-semibold text-gray-800 shrink-0">Tooling & Deployment:</span>
                <span className="text-gray-700">Vite, Git, GitHub Actions, EAS Build, Vercel, Firebase App Distribution</span>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h3 className="text-xl font-bold uppercase tracking-wide border-b border-gray-300 pb-2 mb-4 text-gray-900">
              Certifications
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>
                <span className="font-bold text-gray-800">ALX Frontend Nanodegree</span>
                <div className="text-gray-500 text-xs mt-0.5">HTML, CSS, JavaScript, React, Tailwind, Framer Motion</div>
              </li>
              <li>
                <span className="font-bold text-gray-800">ALX Professional Foundation</span>
                <div className="text-gray-500 text-xs mt-0.5">Professional skills, communication, leadership</div>
              </li>
              <li>
                <span className="font-bold text-gray-800">Time Management — Coursera</span>
                <div className="text-gray-500 text-xs mt-0.5">Productivity, Planning, Prioritization</div>
              </li>
              <li>
                <span className="font-bold text-gray-800">AI Career Essentials</span>
                <div className="text-gray-500 text-xs mt-0.5">AI fundamentals and career pathways</div>
              </li>
            </ul>
          </section>

          {/* Soft Skills */}
          <section>
            <h3 className="text-xl font-bold uppercase tracking-wide border-b border-gray-300 pb-2 mb-4 text-gray-900">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Problem Solving',
                'Team Collaboration',
                'Clear Communication',
                'Time Management',
                'Adaptability',
              ].map((skill) => (
                <span key={skill} className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </section>

        </main>
      </div>
    </div>
  );
};

export default FrontendResume;