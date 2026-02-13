import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';

const Resume = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans p-8 md:p-16 print:p-0">
      {/* Print Button - Hidden when printing */}
      <div className="fixed top-4 right-4 print:hidden z-50">
        <button 
          onClick={() => window.print()}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium shadow-lg transition-colors flex items-center gap-2"
        >
          <FiExternalLink /> Print / Save as PDF
        </button>
      </div>

      <div className="max-w-4xl mx-auto bg-white print:max-w-none">
        {/* Header */}
        <header className="border-b-2 border-gray-800 pb-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">Alfred Wisdom</h1>
          <h2 className="text-xl md:text-2xl text-blue-600 font-semibold mb-6">Full Stack Developer</h2>
          
          <div className="flex flex-wrap gap-4 text-sm md:text-base text-gray-600">
            <div className="flex items-center gap-2">
              <FiMapPin className="text-blue-600" />
              <span>Abuja, Nigeria</span>
            </div>
            <div className="flex items-center gap-2">
              <FiPhone className="text-blue-600" />
              <span>09021704294 / 07025293112</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMail className="text-blue-600" />
              <a href="mailto:contact@alfredwisdom.dev" className="hover:text-blue-600">contact@alfredwisdom.dev</a>
            </div>
            <div className="flex items-center gap-2">
              <FiGithub className="text-blue-600" />
              <a href="https://github.com/Ricsie11" className="hover:text-blue-600">github.com/Ricsie11</a>
            </div>
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="md:col-span-2 space-y-8">
            
            {/* Summary */}
            <section>
              <h3 className="text-xl font-bold uppercase tracking-wide border-b border-gray-300 pb-2 mb-4 text-gray-900">Professional Summary</h3>
              <p className="text-gray-700 leading-relaxed">
                Adaptable and results-driven Full Stack Developer with a strong foundation in computer science and a passion for building scalable, high-performance systems. Skilled in RESTful API development, PostgreSQL database management, and modern frontend frameworks. Known for rapid learning, creative problem-solving, and delivering clean, efficient solutions.
              </p>
            </section>

            {/* Experience */}
            <section>
              <h3 className="text-xl font-bold uppercase tracking-wide border-b border-gray-300 pb-2 mb-4 text-gray-900">Experience</h3>
              
              <div className="mb-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-lg font-bold text-gray-800">Freelance Full Stack Developer</h4>
                  <span className="text-sm text-gray-600 font-medium">2025 - Present</span>
                </div>
                <p className="text-blue-600 font-medium text-sm mb-2">Remote / Contract</p>
                <ul className="list-disc list-outside ml-5 text-gray-700 space-y-1 text-sm">
                  <li>Developing full-stack web applications using React, Django, and PostgreSQL.</li>
                  <li>Designing and implementing RESTful APIs for seamless frontend-backend integration.</li>
                  <li>Optimizing database schemas and queries for improved performance.</li>
                  <li>Collaborating with clients to translate business requirements into technical solutions.</li>
                </ul>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h3 className="text-xl font-bold uppercase tracking-wide border-b border-gray-300 pb-2 mb-4 text-gray-900">Key Projects</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800">Travel App</h4>
                  <p className="text-sm text-gray-600 italic mb-1">React, Django REST Framework, PostgreSQL, Tailwind CSS</p>
                  <p className="text-sm text-gray-700">A frontend travel planning application with interactive itinerary management and destination exploration.</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800">Expense Tracker</h4>
                  <p className="text-sm text-gray-600 italic mb-1">React, Django, MySQL, JWT Authentication</p>
                  <p className="text-sm text-gray-700">Comprehensive expense tracking application with analytics, budgeting tools, and multi-user support.</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800">E-commerce Platform</h4>
                  <p className="text-sm text-gray-600 italic mb-1">React, Django, PostgreSQL, Stripe API</p>
                  <p className="text-sm text-gray-700">Feature-rich e-commerce platform with product management, shopping cart, and payment integration.</p>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h3 className="text-xl font-bold uppercase tracking-wide border-b border-gray-300 pb-2 mb-4 text-gray-900">Certifications</h3>
              <ul className="space-y-3">
                 <li className="flex justify-between items-start">
                  <div>
                    <span className="font-bold text-gray-800 block">ALX Frontend Nanodegree</span>
                    <span className="text-sm text-gray-600">HTML, CSS, JavaScript, React, Tailwind, Framer Motion</span>
                  </div>
                  <span className="text-sm text-gray-500 shrink-0">Jan 2026</span>
                </li>
                <li className="flex justify-between items-start">
                  <div>
                    <span className="font-bold text-gray-800 block">ALX Backend Nanodegree</span>
                    <span className="text-sm text-gray-600">Python, Django, JWT, Authentication, APIs</span>
                  </div>
                  <span className="text-sm text-gray-500 shrink-0">Nov 2025</span>
                </li>
                <li className="flex justify-between items-start">
                  <div>
                    <span className="font-bold text-gray-800 block">ALX AI Career Essentials</span>
                    <span className="text-sm text-gray-600">Artificial Intelligence Foundations, Career Readiness</span>
                  </div>
                  <span className="text-sm text-gray-500 shrink-0">Dec 2025</span>
                </li>
                 <li className="flex justify-between items-start">
                  <div>
                    <span className="font-bold text-gray-800 block">ALX Professional Foundation</span>
                    <span className="text-sm text-gray-600">Professional Skills, Communication, Leadership</span>
                  </div>
                  <span className="text-sm text-gray-500 shrink-0">June 2025</span>
                </li>
                 <li className="flex justify-between items-start">
                  <div>
                    <span className="font-bold text-gray-800 block">Time Management (Coursera)</span>
                    <span className="text-sm text-gray-600">Productivity, Planning, Prioritization</span>
                  </div>
                  <span className="text-sm text-gray-500 shrink-0">Completed</span>
                </li>
              </ul>
            </section>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-8">
            
            {/* Education */}
            <section>
              <h3 className="text-xl font-bold uppercase tracking-wide border-b border-gray-300 pb-2 mb-4 text-gray-900">Education</h3>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-800">Miva Open University</h4>
                <p className="text-sm text-blue-600 mb-1">Software Engineering</p>
                <p className="text-sm text-gray-500">2025 - Present</p>
                <p className="text-xs text-gray-400 italic">Expected 2027/2028</p>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-800">Federal Polytechnic Nasarawa</h4>
                <p className="text-sm text-blue-600 mb-1">National Diploma (ND)</p>
                <p className="text-sm text-gray-500">Computer Science</p>
                <p className="text-sm text-gray-500">2021 - 2023</p>
              </div>
            </section>

            {/* Skills */}
            <section>
              <h3 className="text-xl font-bold uppercase tracking-wide border-b border-gray-300 pb-2 mb-4 text-gray-900">Technical Skills</h3>
              
              <div className="mb-4">
                <h4 className="font-bold text-gray-800 mb-2 text-sm uppercase">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion'].map(skill => (
                    <span key={skill} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs print:border print:border-gray-200">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-bold text-gray-800 mb-2 text-sm uppercase">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Django', 'Django REST', 'Node.js', 'PostgreSQL', 'MySQL'].map(skill => (
                    <span key={skill} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs print:border print:border-gray-200">{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-2 text-sm uppercase">Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'VS Code', 'Postman', 'Vercel'].map(skill => (
                    <span key={skill} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs print:border print:border-gray-200">{skill}</span>
                  ))}
                </div>
              </div>
            </section>

             {/* Soft Skills */}
             <section>
              <h3 className="text-xl font-bold uppercase tracking-wide border-b border-gray-300 pb-2 mb-4 text-gray-900">Soft Skills</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Problem Solving</li>
                <li>Time Management</li>
                <li>Communication</li>
                <li>Adaptability</li>
                <li>Team Collaboration</li>
              </ul>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
