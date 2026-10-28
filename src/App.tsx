import { useState, useEffect } from 'react';
import {
  ExternalLink,
  Mail,
  Phone,
  FileText,
  Copy,
  Check,
  Sun,
  Moon,
  Server,
  Layers,
  ArrowUpRight,
  Terminal,
  X,
  Menu,
  GraduationCap
} from 'lucide-react';

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'flow' | 'code' | 'decisions'>('flow');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('monunagar94066@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const closeMobileNav = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="portfolio-app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container nav-inner">
          <a href="#" className="brand">
            <span className="brand-dot"></span>
            <span>monu.nagar</span>
          </a>

          <ul className="nav-links">
            <li><a href="#work" className="nav-link">Selected Work</a></li>
            <li><a href="#stack" className="nav-link">Stack</a></li>
            <li><a href="#experience" className="nav-link">Experience</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>

          <div className="nav-actions">
            <button
              onClick={() => setIsResumeModalOpen(true)}
              className="btn btn-secondary btn-sm"
            >
              <FileText size={14} />
              <span>Resume</span>
            </button>

            <button
              onClick={toggleTheme}
              className="btn-icon"
              aria-label="Toggle Theme"
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="btn-icon mobile-menu-btn"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-drawer">
          <ul className="mobile-nav-list">
            <li><a href="#work" onClick={closeMobileNav} className="mobile-nav-link">Selected Work</a></li>
            <li><a href="#stack" onClick={closeMobileNav} className="mobile-nav-link">Technical Stack</a></li>
            <li><a href="#experience" onClick={closeMobileNav} className="mobile-nav-link">Experience & Education</a></li>
            <li><a href="#contact" onClick={closeMobileNav} className="mobile-nav-link">Contact</a></li>
          </ul>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button
              onClick={() => {
                closeMobileNav();
                setIsResumeModalOpen(true);
              }}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              <FileText size={16} />
              <span>View Full Resume</span>
            </button>
            <a
              href="mailto:monunagar94066@gmail.com"
              className="btn btn-secondary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Mail size={16} />
              <span>Send Email</span>
            </a>
          </div>
        </div>
      )}

      <main className="container">
        {/* Authentic Developer Hero */}
        <section className="hero">
          <div className="hero-status-pill">
            <span className="brand-dot"></span>
            <span>Open to Full-Stack & Backend Roles</span>
          </div>

          <h1 className="hero-name">Monu Nagar</h1>

          <div className="hero-tagline">
            Full-stack developer building practical web applications with React, Node.js & MongoDB.
          </div>

          <p className="hero-bio">
            I enjoy building software that solves practical problems and actually gets shipped. Based in Indore, India, I spend my time engineering modular REST APIs, structuring databases, wiring up payment gateways like Razorpay, and building snappy user interfaces with React and TypeScript.
          </p>

          <div className="hero-actions">
            <a href="https://eventiquedesign.in/" target="_blank" rel="noreferrer" className="btn btn-primary">
              <span>View Live App (Eventique)</span>
              <ArrowUpRight size={15} />
            </a>

            <button onClick={() => setIsResumeModalOpen(true)} className="btn btn-secondary">
              <FileText size={15} />
              <span>Read Resume</span>
            </button>

            <a href="https://github.com/Monunagar11" target="_blank" rel="noreferrer" className="btn btn-secondary">
              <GithubIcon size={15} />
              <span>GitHub</span>
            </a>

            <a href="https://www.linkedin.com/in/monu-nagar-a30a4b1a5" target="_blank" rel="noreferrer" className="btn btn-secondary">
              <LinkedinIcon size={15} />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Quick Real Facts */}
          <div className="quick-facts">
            <div>
              <div className="fact-title">Current Role</div>
              <div className="fact-val">DotShot Digital</div>
              <div className="fact-desc">Full Stack Developer (Indore)</div>
            </div>
            <div>
              <div className="fact-title">Education</div>
              <div className="fact-val">MCA (CGPA 8.0)</div>
              <div className="fact-desc">SAGE University (2024–2026)</div>
            </div>
            <div>
              <div className="fact-title">Core Stack</div>
              <div className="fact-val">MERN + TypeScript</div>
              <div className="fact-desc">React, Node, Express, MongoDB</div>
            </div>
          </div>
        </section>

        {/* Selected Projects / Case Studies */}
        <section id="work" className="section-block">
          <div className="section-label">Selected Work</div>
          <h2 className="section-heading">Systems I've Built and Shipped</h2>
          <p className="section-subheading">
            Detailed breakdown of real projects, architectural decisions, and production integrations.
          </p>

          {/* Eventique */}
          <article className="case-card">
            <div className="case-card-header">
              <div>
                <span className="case-tag">Live Production System</span>
                <h3 className="case-title">Eventique — Luxury Digital Invitations & Stationery</h3>
                <div className="case-subtitle">E-Commerce & Bespoke Event Management Platform</div>
              </div>

              <div className="case-links">
                <a href="https://eventiquedesign.in/" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                  <span>eventiquedesign.in</span>
                  <ExternalLink size={13} />
                </a>
                <a href="https://github.com/Monunagar11/Event-Management" target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                  <GithubIcon size={13} />
                  <span>Code</span>
                </a>
              </div>
            </div>

            <p className="case-description">
              Eventique is an active production platform where clients browse luxury digital invitations, order physical stationery prints, customize event details, and complete secure checkout. I engineered the full stack: from the React/Vite frontend to the 25+ Express endpoints, Razorpay webhook validation, and automated logistics via Shiprocket.
            </p>

            {/* Interactive Architecture & Decisions Box */}
            <div className="arch-container">
              <div className="arch-top-bar">
                <div className="arch-title">Technical Implementation Notes</div>
                <div className="arch-tabs">
                  <button
                    onClick={() => setActiveTab('flow')}
                    className={`arch-tab-btn ${activeTab === 'flow' ? 'active' : ''}`}
                  >
                    System Flow
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`arch-tab-btn ${activeTab === 'code' ? 'active' : ''}`}
                  >
                    Webhook Verification
                  </button>
                  <button
                    onClick={() => setActiveTab('decisions')}
                    className={`arch-tab-btn ${activeTab === 'decisions' ? 'active' : ''}`}
                  >
                    Architecture Decisions
                  </button>
                </div>
              </div>

              {activeTab === 'flow' && (
                <div className="arch-pipeline">
                  <div className="pipeline-node">
                    <div className="node-step">01. CLIENT</div>
                    <div className="node-name">React + Vite</div>
                    <div className="node-desc">Custom stationery configurator, cart sessions, client-side validation.</div>
                  </div>
                  <div className="pipeline-node">
                    <div className="node-step">02. API GATEWAY</div>
                    <div className="node-name">Express.js API</div>
                    <div className="node-desc">JWT + OAuth, centralized error middleware, Mongoose models.</div>
                  </div>
                  <div className="pipeline-node">
                    <div className="node-step">03. BILLING</div>
                    <div className="node-name">Razorpay</div>
                    <div className="node-desc">Server-side HMAC-SHA256 signature verification for order status updates.</div>
                  </div>
                  <div className="pipeline-node">
                    <div className="node-step">04. FULFILLMENT</div>
                    <div className="node-name">Shiprocket + Resend</div>
                    <div className="node-desc">Automated airway bill creation and instant customer email confirmations.</div>
                  </div>
                </div>
              )}

              {activeTab === 'code' && (
                <div className="code-snippet-box">
                  <span style={{ color: '#6ee7b7' }}>// Defensive Razorpay payment verification on Node.js</span><br />
                  <span style={{ color: '#93c5fd' }}>const</span> crypto = require(<span style={{ color: '#fca5a5' }}>'crypto'</span>);<br /><br />
                  <span style={{ color: '#93c5fd' }}>function</span> verifyPaymentSignature(orderId, paymentId, signature) &#123;<br />
                  &nbsp;&nbsp;<span style={{ color: '#93c5fd' }}>const</span> body = orderId + <span style={{ color: '#fca5a5' }}>"|"</span> + paymentId;<br />
                  &nbsp;&nbsp;<span style={{ color: '#93c5fd' }}>const</span> expectedSignature = crypto<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;.createHmac(<span style={{ color: '#fca5a5' }}>'sha256'</span>, process.env.RAZORPAY_KEY_SECRET)<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;.update(body.toString())<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;.digest(<span style={{ color: '#fca5a5' }}>'hex'</span>);<br /><br />
                  &nbsp;&nbsp;<span style={{ color: '#f38ba8' }}>return</span> expectedSignature === signature;<br />
                  &#125;
                </div>
              )}

              {activeTab === 'decisions' && (
                <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  <p style={{ marginBottom: '8px' }}>
                    <strong>Why Resend Mail over Nodemailer SMTP?</strong> Direct REST API dispatch with transactional templates, eliminating SMTP connection drops and shared IP reputation issues.
                  </p>
                  <p>
                    <strong>RBAC Admin Dashboard:</strong> Isolated admin routes allowing non-developers to manage stationery categories, update stock counts, and inspect transactions without direct database queries.
                  </p>
                </div>
              )}
            </div>

            <ul className="case-bullets">
              <li>Designed 25+ REST endpoints with centralized async error-handling middleware to prevent process crashes.</li>
              <li>Engineered custom stationery preview canvas with real-time text and font updates before checkout.</li>
              <li>Built order lifecycle management: Pending → Payment Verified → Dispatched via Shiprocket.</li>
              <li>Integrated Google OAuth 2.0 alongside traditional JWT login for fast one-click customer onboarding.</li>
            </ul>

            <div className="tech-pills">
              <span className="tech-pill">React.js</span>
              <span className="tech-pill">Node.js</span>
              <span className="tech-pill">Express.js</span>
              <span className="tech-pill">MongoDB</span>
              <span className="tech-pill">Razorpay</span>
              <span className="tech-pill">Shiprocket</span>
              <span className="tech-pill">Resend</span>
              <span className="tech-pill">Coolify</span>
            </div>
          </article>

          {/* Settleezy */}
          <article className="case-card">
            <div className="case-card-header">
              <div>
                <span className="case-tag client">Client Production Work at DotShot</span>
                <h3 className="case-title">Settleezy — Partner Privileges & Event Discovery</h3>
                <div className="case-subtitle">Backend Services & Mobile API Integration</div>
              </div>
            </div>

            <p className="case-description">
              Settleezy is a venue discovery and location-based privileges platform for local businesses and users. As part of the engineering team at DotShot Digital, I focused on designing modular backend services and integrating real-time communication protocols.
            </p>

            <ul className="case-bullets">
              <li>Built RESTful endpoints for partner venue privileges, user redemption status, and event catalogs.</li>
              <li>Wrote the server-side QR verification logic used at merchant counters to validate customer coupons.</li>
              <li>Integrated Firebase Cloud Messaging (FCM) to trigger automated transactional push notifications to mobile devices.</li>
              <li>Worked directly with Flutter frontend developers to test endpoints, document API schemas, and prevent breaking changes.</li>
            </ul>

            <div className="tech-pills">
              <span className="tech-pill">Node.js</span>
              <span className="tech-pill">Express.js</span>
              <span className="tech-pill">MongoDB</span>
              <span className="tech-pill">Firebase FCM</span>
              <span className="tech-pill">QR Verification</span>
              <span className="tech-pill">REST Contracts</span>
            </div>
          </article>

          {/* DotShot Digital Agency Platform */}
          <article className="case-card">
            <div className="case-card-header">
              <div>
                <span className="case-tag">Live Production Agency Site</span>
                <h3 className="case-title">DotShot Digital — Agency Web Platform</h3>
                <div className="case-subtitle">Commercial Agency Web Architecture & Lead Management API</div>
              </div>

              <div className="case-links">
                <a href="https://dotshotdigital.in/" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                  <span>dotshotdigital.in</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            <p className="case-description">
              The official digital agency platform for DotShot Digital, engineered to showcase enterprise IT services, client case studies, and capture qualified inbound sales leads. I developed the responsive React and TypeScript frontend architecture and built backend Node/Express endpoints for lead processing and database persistence.
            </p>

            <ul className="case-bullets">
              <li>Architected modular, accessible UI components with TypeScript, ensuring rapid page loads and high responsiveness across all devices.</li>
              <li>Engineered backend REST endpoints in Node.js and Express to validate and process client inquiries into MongoDB collections.</li>
              <li>Implemented automated email alerts and lead tracking pipelines to notify account managers on form submissions.</li>
              <li>Structured clean CSS design systems and performance optimizations for high mobile Lighthouse scores.</li>
            </ul>

            <div className="tech-pills">
              <span className="tech-pill">React.js</span>
              <span className="tech-pill">TypeScript</span>
              <span className="tech-pill">Node.js</span>
              <span className="tech-pill">Express.js</span>
              <span className="tech-pill">MongoDB</span>
              <span className="tech-pill">RESTful API</span>
            </div>
          </article>
        </section>

        {/* Technical Stack Section with Honest Developer Notes */}
        <section id="stack" className="section-block">
          <div className="section-label">Toolkit</div>
          <h2 className="section-heading">How I Actually Work</h2>
          <p className="section-subheading">
            Tools and technologies I use daily to write maintainable software.
          </p>

          <div className="skills-grid">
            <div className="skill-box">
              <div className="skill-box-title">
                <Server size={17} />
                <span>Backend & REST Architecture</span>
              </div>
              <div className="skill-box-desc">
                My primary focus: clean endpoints, robust validation, and database modeling.
              </div>
              <div className="skill-tags">
                <span className="skill-item active">Node.js</span>
                <span className="skill-item active">Express.js</span>
                <span className="skill-item active">MongoDB (Mongoose)</span>
                <span className="skill-item active">RESTful APIs</span>
                <span className="skill-item">JWT Authentication</span>
                <span className="skill-item">OAuth 2.0</span>
                <span className="skill-item">SQL / PostgreSQL Basics</span>
              </div>
            </div>

            <div className="skill-box">
              <div className="skill-box-title">
                <Layers size={17} />
                <span>Frontend & User Interfaces</span>
              </div>
              <div className="skill-box-desc">
                Building responsive, component-driven interfaces that render cleanly on all devices.
              </div>
              <div className="skill-tags">
                <span className="skill-item active">JavaScript (ES6+)</span>
                <span className="skill-item active">TypeScript</span>
                <span className="skill-item active">React.js</span>
                <span className="skill-item active">Tailwind CSS</span>
                <span className="skill-item">HTML5 & Modern CSS</span>
                <span className="skill-item">Redux Toolkit / Context</span>
              </div>
            </div>

            <div className="skill-box">
              <div className="skill-box-title">
                <Terminal size={17} />
                <span>APIs & Cloud Integrations</span>
              </div>
              <div className="skill-box-desc">
                Third-party services integrated and verified in real production environments.
              </div>
              <div className="skill-tags">
                <span className="skill-item">Razorpay (Payments)</span>
                <span className="skill-item">Shiprocket (Logistics)</span>
                <span className="skill-item">Resend (Emails)</span>
                <span className="skill-item">Firebase FCM</span>
                <span className="skill-item">Coolify & Vercel</span>
                <span className="skill-item">Git & GitHub</span>
              </div>
            </div>

            <div className="skill-box">
              <div className="skill-box-title">
                <GraduationCap size={17} />
                <span>Computer Science Foundations</span>
              </div>
              <div className="skill-box-desc">
                Formal education grounding in algorithms, object-oriented concepts, and databases.
              </div>
              <div className="skill-tags">
                <span className="skill-item">Data Structures & Algorithms</span>
                <span className="skill-item">Object-Oriented Programming</span>
                <span className="skill-item">Java (Core)</span>
                <span className="skill-item">Relational Database Design</span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Education */}
        <section id="experience" className="section-block">
          <div className="section-label">Timeline</div>
          <h2 className="section-heading">Work Experience & Education</h2>
          <p className="section-subheading">
            My journey from formal computer application degrees to shipping client and production software.
          </p>

          <div className="timeline-list">
            {/* DotShot Digital */}
            <div className="timeline-row">
              <div className="timeline-meta">
                <div>Jul 2026 – Present</div>
                <div className="timeline-company-name">DotShot Digital</div>
              </div>
              <div className="timeline-details">
                <div className="timeline-job-title">Full Stack Developer</div>
                <div className="timeline-job-location">Indore, India</div>
                <ul className="timeline-points">
                  <li>Building responsive full-stack client web applications using React.js, TypeScript, Node.js, Express.js, and MongoDB.</li>
                  <li>Contributed to the backend services of Settleezy: built endpoints for partner venue privileges, QR-code validation, and Firebase push alerts.</li>
                  <li>Coordinated directly with Flutter mobile engineers to test endpoints and keep API request/response structures consistent.</li>
                </ul>
              </div>
            </div>

            {/* Novarsistech */}
            <div className="timeline-row">
              <div className="timeline-meta">
                <div>Jun 2026 – Jul 2026</div>
                <div className="timeline-company-name">Novarsistech PVT. LTD.</div>
              </div>
              <div className="timeline-details">
                <div className="timeline-job-title">MERN Stack Developer Intern</div>
                <div className="timeline-job-location">Indore, India</div>
                <ul className="timeline-points">
                  <li>Built full-stack features using React, Node.js, and MongoDB for internal and client projects.</li>
                  <li>Refactored React component trees and set up route-based code-splitting using <code>React.lazy</code> and <code>Suspense</code> to reduce initial bundle loading times.</li>
                  <li>Connected external services including Razorpay for checkout payments, Shiprocket for logistics tracking, and Resend for transactional emails.</li>
                </ul>
              </div>
            </div>

            {/* MCA */}
            <div className="timeline-row">
              <div className="timeline-meta">
                <div>2024 – 2026</div>
                <div className="timeline-company-name">SAGE University</div>
              </div>
              <div className="timeline-details">
                <div className="timeline-job-title">Master of Computer Applications (MCA)</div>
                <div className="timeline-job-location">Indore | CGPA: 8.0</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '6px' }}>
                  Postgraduate coursework in Advanced Database Systems, Software Architecture, and Distributed Systems.
                </p>
              </div>
            </div>

            {/* BCA */}
            <div className="timeline-row">
              <div className="timeline-meta">
                <div>2021 – 2024</div>
                <div className="timeline-company-name">Royal Institute</div>
              </div>
              <div className="timeline-details">
                <div className="timeline-job-title">Bachelor of Computer Applications (BCA)</div>
                <div className="timeline-job-location">Ratlam | Score: 83%</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '6px' }}>
                  Undergraduate grounding in C/C++, Java, Data Structures, Relational Database Management, and Web Basics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-block">
          <div className="section-label">Get in Touch</div>
          <h2 className="section-heading">Let's Discuss Opportunities</h2>
          <p className="section-subheading">
            Whether you have an open Full-Stack role, need an API developer, or want to talk through my projects, feel free to reach out.
          </p>

          <div className="contact-container">
            <div className="contact-card">
              <h3 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>Direct Communication</h3>
              
              <div className="contact-list">
                <div className="contact-item">
                  <div className="contact-item-left">
                    <Mail size={16} className="contact-item-icon" />
                    <div className="contact-item-details">
                      <div className="contact-item-label">Email</div>
                      <div className="contact-item-value" title="monunagar94066@gmail.com">monunagar94066@gmail.com</div>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="btn btn-secondary btn-sm contact-action-btn"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={13} style={{ color: 'var(--accent-emerald)' }} /> : <Copy size={13} />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div className="contact-item">
                  <div className="contact-item-left">
                    <Phone size={16} className="contact-item-icon" />
                    <div className="contact-item-details">
                      <div className="contact-item-label">Phone</div>
                      <div className="contact-item-value">+91 7240940633</div>
                    </div>
                  </div>
                  <a href="tel:+917240940633" className="btn btn-secondary btn-sm contact-action-btn">
                    Call
                  </a>
                </div>

                <div className="contact-item">
                  <div className="contact-item-left">
                    <div className="contact-item-icon"><LinkedinIcon size={16} /></div>
                    <div className="contact-item-details">
                      <div className="contact-item-label">LinkedIn</div>
                      <div className="contact-item-value">monu-nagar-a30a4b1a5</div>
                    </div>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/monu-nagar-a30a4b1a5"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary btn-sm contact-action-btn"
                    title="Visit LinkedIn Profile"
                  >
                    <ArrowUpRight size={13} />
                  </a>
                </div>

                <div className="contact-item">
                  <div className="contact-item-left">
                    <div className="contact-item-icon"><GithubIcon size={16} /></div>
                    <div className="contact-item-details">
                      <div className="contact-item-label">GitHub</div>
                      <div className="contact-item-value">Monunagar11</div>
                    </div>
                  </div>
                  <a
                    href="https://github.com/Monunagar11"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary btn-sm contact-action-btn"
                    title="Visit GitHub Profile"
                  >
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-primary)', marginBottom: '10px' }}>
                <FileText size={20} />
                <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>Resume Deliverables</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Clean, ATS-Friendly Resume</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '20px', lineHeight: '1.55' }}>
                Every bullet point is defensible and reflects my actual contributions to Eventique, Settleezy, and DotShot Digital.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
                <button
                  onClick={() => setIsResumeModalOpen(true)}
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  <FileText size={15} />
                  <span>Open Interactive Viewer</span>
                </button>

                <a
                  href="/resume/resume.html"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  style={{ width: '100%' }}
                >
                  <ExternalLink size={15} />
                  <span>Print-Ready HTML Resume</span>
                </a>

                <a
                  href="/resume/Monu_Nagar_Resume.pdf"
                  download="Monu_Nagar_Resume.pdf"
                  className="btn btn-secondary"
                  style={{ width: '100%' }}
                >
                  <ArrowUpRight size={15} />
                  <span>Download Original PDF File</span>
                </a>

                <a
                  href="/resume/resume.md"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  style={{ width: '100%' }}
                >
                  <FileText size={15} />
                  <span>View Markdown (.md) Source</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Clean Minimal Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            © {new Date().getFullYear()} Monu Nagar. Designed & built with React, TypeScript & CSS.
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="https://github.com/Monunagar11" target="_blank" rel="noreferrer" className="nav-link">GitHub</a>
            <a href="https://www.linkedin.com/in/monu-nagar-a30a4b1a5" target="_blank" rel="noreferrer" className="nav-link">LinkedIn</a>
            <a href="https://eventiquedesign.in/" target="_blank" rel="noreferrer" className="nav-link">Eventique</a>
          </div>
        </div>
      </footer>

      {/* Resume Viewer Modal */}
      {isResumeModalOpen && (
        <div className="modal-overlay" onClick={() => setIsResumeModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FileText size={17} style={{ color: 'var(--accent-primary)' }} />
                <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                  Monu Nagar — Technical Resume
                </span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <a
                  href="/resume/resume.html"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  <ExternalLink size={13} />
                  <span>Full Screen / Print</span>
                </a>
                <button
                  onClick={() => setIsResumeModalOpen(false)}
                  className="btn-icon"
                  style={{ width: '32px', height: '32px' }}
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            <div className="modal-body">
              <iframe
                src="/resume/resume.html"
                title="Resume Preview"
                style={{ width: '100%', height: '72vh', border: 'none' }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
