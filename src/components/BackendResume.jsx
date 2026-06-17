import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiGithub } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const BackendResume = () => {
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
          className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full font-medium shadow-sm transition-colors text-sm"
        >
          Frontend
        </Link>
        <Link
          to="/resume/backend"
          className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium shadow-sm transition-colors text-sm"
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
          <h2 className="text-xl md:text-2xl text-blue-600 font-semibold mb-6 print:text-lg print:mb-3">Backend Developer</h2>

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
              Backend developer with practical experience building secure, production-ready REST APIs using Python and 
              Django REST Framework. I care about the things that matter in real deployments — tight authentication flows, 
              optimized database queries, and systems that don't quietly break under load. I've shipped APIs covering 
              JWT auth, role-based access control, background job processing, and multi-model database design, and I 
              know my way around the full server-side lifecycle from schema design to CI/CD.
            </p>
          </section>

          {/* Experience */}
          <section>
            <h3 className="text-xl font-bold uppercase tracking-wide border-b border-gray-300 pb-2 mb-4 text-gray-900">
              Experience
            </h3>

            <div>
              <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                <h4 className="text-lg font-bold text-gray-800">Freelance Backend Developer</h4>
                <span className="text-sm text-gray-500 font-medium">2025 – Present</span>
              </div>
              <p className="text-blue-600 font-medium text-sm mb-3">Remote · Contract</p>
              <ul className="list-disc list-outside ml-5 text-gray-700 space-y-2 text-sm leading-relaxed">
                <li>
                  Designed and built RESTful APIs with Django REST Framework across multiple client projects — 
                  covering auth, user management, and core business logic, always documented and tested via Postman.
                </li>
                <li>
                  Implemented JWT-based authentication with refresh token rotation and role-based access control 
                  using DRF's permission system, keeping unauthorized access locked down at the API layer.
                </li>
                <li>
                  Fixed N+1 query problems using <code className="bg-gray-100 px-1 rounded text-xs">select_related()</code> and{' '}
                  <code className="bg-gray-100 px-1 rounded text-xs">prefetch_related()</code>, and added targeted indexes on 
                  high-traffic filter columns — meaningfully cut response times on data-heavy endpoints.
                </li>
                <li>
                  Set up Celery with Redis as a message broker for background task processing, offloading email 
                  delivery, report generation, and heavy computations out of the request/response cycle entirely.
                </li>
                <li>
                  Built GitHub Actions CI/CD pipelines that run automated tests on every push and deploy to 
                  Render/Railway on merge to main — caught regressions early and eliminated manual deployments.
                </li>
                <li>
                  Secured all endpoints against SQL injection via ORM-level parameterized queries, configured 
                  CORS headers correctly for frontend clients, and followed OWASP-aligned practices throughout.
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
                <h4 className="font-bold text-gray-800 mb-1">NearMe — Location-Based Services API</h4>
                <p className="text-sm text-gray-500 italic mb-1">Django · Django REST Framework · PostgreSQL · OTP Auth</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Built the backend for a location-based discovery platform. Implemented OTP authentication 
                  from scratch, designed geospatial query logic for proximity filtering, and structured the 
                  database schema to stay performant as the dataset grows. Currently integrating with a 
                  React Native frontend.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-1">Social Media API</h4>
                <p className="text-sm text-gray-500 italic mb-1">Django · PostgreSQL · Django REST Framework</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Full social platform API covering profiles, posts, comments, likes, follows, and activity 
                  feeds. Spent real time on the feed generation problem — designed a fanout approach to keep 
                  reads fast. Added moderation endpoints and admin controls for content management.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-1">Church Management System — Everlasting Refuge</h4>
                <p className="text-sm text-gray-500 italic mb-1">Django · PostgreSQL · React</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Designed and shipped a full management system for a live church community — member records, 
                  attendance tracking, and role-based access for different staff levels. A real production 
                  deployment used by actual people every week, which keeps the feedback loop honest.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-1">Expense Tracker API</h4>
                <p className="text-sm text-gray-500 italic mb-1">Django · PostgreSQL · Django REST Framework</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  REST API with JWT auth, per-user expense records, category grouping, and analytics endpoints 
                  for monthly totals and category breakdowns. Used database-level aggregations via Django ORM 
                  to keep the heavy lifting server-side rather than in Python application code.
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
                <span className="font-semibold text-gray-800 shrink-0">Languages & Frameworks:</span>
                <span className="text-gray-700">Python, Django, Django REST Framework</span>
              </div>
              <div className="flex flex-wrap gap-x-2">
                <span className="font-semibold text-gray-800 shrink-0">Databases:</span>
                <span className="text-gray-700">PostgreSQL, MySQL — schema design, indexing, query optimization, migrations</span>
              </div>
              <div className="flex flex-wrap gap-x-2">
                <span className="font-semibold text-gray-800 shrink-0">Auth & Security:</span>
                <span className="text-gray-700">JWT, OTP, Role-Based Access Control, CORS configuration, OWASP basics</span>
              </div>
              <div className="flex flex-wrap gap-x-2">
                <span className="font-semibold text-gray-800 shrink-0">Async & Caching:</span>
                <span className="text-gray-700">Celery, Redis (message broker + cache layer)</span>
              </div>
              <div className="flex flex-wrap gap-x-2">
                <span className="font-semibold text-gray-800 shrink-0">DevOps & Tooling:</span>
                <span className="text-gray-700">Docker, GitHub Actions (CI/CD), Render, Railway, Postman, Git</span>
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
                <span className="font-bold text-gray-800">ALX Backend Nanodegree</span>
                <div className="text-gray-500 text-xs mt-0.5">Python, Django, REST APIs, Authentication</div>
              </li>
              <li>
                <span className="font-bold text-gray-800">ALX Professional Foundation</span>
                <div className="text-gray-500 text-xs mt-0.5">Professional skills and workplace communication</div>
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

export default BackendResume;