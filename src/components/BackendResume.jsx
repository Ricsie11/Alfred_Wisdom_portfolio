import React from 'react';
import { Link } from 'react-router-dom';
import { FiExternalLink, FiMail, FiPhone, FiMapPin, FiGithub } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const BackendResume = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans p-8 md:p-16 print:p-0">
      <div className="fixed top-4 right-4 print:hidden z-50 flex items-center gap-3">
        <Link to="/resume/frontend" className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full font-medium shadow-sm transition-colors text-sm">Frontend</Link>
        <Link to="/resume/backend" className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium shadow-sm transition-colors text-sm">Backend</Link>
        <button onClick={() => window.print()} className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-full">Print</button>
      </div>

      <div className="max-w-4xl mx-auto bg-white print:max-w-none">
        <header className="border-b-2 border-gray-800 pb-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">Alfred Wisdom</h1>
          <h2 className="text-xl md:text-2xl text-blue-600 font-semibold mb-6">Backend Developer</h2>

          <div className="flex flex-wrap gap-4 text-sm md:text-base text-gray-600">
            <div className="flex items-center gap-2"><FiMapPin className="text-blue-600" /> Abuja, Nigeria</div>
            <div className="flex items-center gap-2"><FiPhone className="text-blue-600" /> <a href="tel:09021704294" className="hover:text-blue-600">09021704294</a></div>
            <div className="flex items-center gap-2"><FaWhatsapp className="text-green-600" /> <a href="https://wa.me/2347025293112" target="_blank" rel="noopener noreferrer" className="hover:text-green-700">07025293112</a></div>
            <div className="flex items-center gap-2"><FiMail className="text-blue-600" /> <a href="mailto:contact@alfredwisdom.dev" className="hover:text-blue-600">contact@alfredwisdom.dev</a></div>
            <div className="flex items-center gap-2"><FiGithub className="text-blue-600" /> <a href="https://github.com/Ricsie11" className="hover:text-blue-600">github.com/Ricsie11</a></div>
          </div>
        </header>

        <main className="space-y-8">
          <section>
            <h3 className="text-xl font-bold uppercase tracking-wide border-b border-gray-300 pb-2 mb-4 text-gray-900">Summary</h3>
            <p className="text-gray-700">Backend developer experienced in Python, Django, REST API design, authentication, and databases. Focused on scalable, secure, and maintainable server-side systems.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold uppercase tracking-wide border-b border-gray-300 pb-2 mb-4 text-gray-900">Experience</h3>
            <div className="mb-6">
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="text-lg font-bold text-gray-800">Freelance Backend Developer</h4>
                <span className="text-sm text-gray-600 font-medium">2025 - Present</span>
              </div>
              <p className="text-blue-600 font-medium text-sm mb-2">Remote / Contract</p>
              <ul className="list-disc list-outside ml-5 text-gray-700 space-y-1 text-sm">
                <li>Designed and implemented RESTful APIs with Django and Django REST Framework.</li>
                <li>Built authentication, role-based access, and optimized database schemas for performance.</li>
                <li>Deployed services with Docker and CI/CD pipelines for reliable releases.</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="text-lg font-bold text-gray-800">Backend Intern</h4>
                <span className="text-sm text-gray-600 font-medium">2025</span>
              </div>
              <p className="text-sm text-gray-700">Worked on API endpoints, database migrations, and background task processing.</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold uppercase tracking-wide border-b border-gray-300 pb-2 mb-4 text-gray-900">Backend Projects</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold">Expense Tracker API (Backend)</h4>
                <p className="text-sm text-gray-600 italic">Django, PostgreSQL, RestFramework</p>
                <p className="text-sm text-gray-700">Robust API with authentication, role-based access, and data analytics endpoints.</p>
              </div>
              <div>
                <h4 className="font-bold">Social Media API (Backend)</h4>
                <p className="text-sm text-gray-600 italic">Django, PostgreSQL, RestFramework</p>
                <p className="text-sm text-gray-700">APIs for user profiles, posts, comments, likes, follows, feeds, and real-time notifications, with scalable endpoints and moderation tools.</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold uppercase tracking-wide border-b border-gray-300 pb-2 mb-4 text-gray-900">Backend Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Django', 'Django REST', 'PostgreSQL', 'MySQL', 'REST APIs', 'JWT', 'Docker', 'Redis', 'Celery', 'CI/CD'].map(s => (
                <span key={s} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">{s}</span>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold uppercase tracking-wide border-b border-gray-300 pb-2 mb-4 text-gray-900">Tools</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {['Git', 'VS Code', 'Postman', 'Vercel', 'Docker'].map(tool => (
                <span key={tool} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">{tool}</span>
              ))}
            </div>

            <h3 className="text-xl font-bold uppercase tracking-wide border-b border-gray-300 pb-2 mb-4 text-gray-900">Soft Skills</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Problem Solving</li>
              <li>Time Management</li>
              <li>Communication</li>
              <li>Adaptability</li>
              <li>Team Collaboration</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold uppercase tracking-wide border-b border-gray-300 pb-2 mb-4 text-gray-900">Certifications</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <span className="font-bold">ALX Backend Nanodegree</span>
                <div className="text-gray-500 text-xs">Python, Django, APIs, Authentication </div>
              </li>
              <li>
                <span className="font-bold">ALX Professional Foundation</span>
                <div className="text-gray-500 text-xs">Professional skills and communication </div>
              </li>
              <li>
                <span className="font-bold">Time Management (Coursera)</span>
                <div className="text-gray-500 text-xs">Productivity, Planning, Prioritization</div>
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default BackendResume;
