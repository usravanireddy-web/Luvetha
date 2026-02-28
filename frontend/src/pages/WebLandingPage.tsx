import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./WebLandingPage.css";
import weblanding from "@/assets/weblanding1.png"

const WebLandingPage: React.FC = () => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  
  // Form state
  const [projectType, setProjectType] = useState("");
  const [services, setServices] = useState<string[]>([]);

  const GOOGLE_SHEET_API = "YOUR_GOOGLE_SHEET_API_URL";

  const handleServiceToggle = (service: string) => {
    setServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    const data = new FormData(formRef.current);
    const formData = {
      name: String(data.get("name") || ""),
      phone: String(data.get("phone") || ""),
      email: String(data.get("email") || ""),
      company: String(data.get("company") || ""),
      projectType: String(data.get("projectType") || ""),
      timeline: String(data.get("timeline") || ""),
      budget: String(data.get("budget") || ""),
      message: String(data.get("message") || ""),
      services: services.join(", ")
    };

    try {
      const params = new URLSearchParams({
        ...formData,
        service: "WebDevelopment",
        _: Date.now().toString()
      });

      const url = `${GOOGLE_SHEET_API}?${params}`;
      await fetch(url, { method: "GET", mode: "no-cors" });
      navigate("/thankyou");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      {/* ================= FULL PAGE HERO ================= */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">🚀 Professional Web Development</span>
          
          <h1>
            Build Websites That <span>Convert Visitors</span> into Customers
          </h1>
          
          <p className="hero-subtitle">
            We create fast, responsive, and SEO-optimized websites that drive business growth. 
            From concept to launch, we handle everything to ensure your digital success.
          </p>
          
          <div className="hero-actions">
            <a href="#contact" className="btn primary">
              📞 Get Free Consultation
            </a>
            <Link to="/portfolio" className="btn secondary">
              👀 View Projects
            </Link>
          </div>
        </div>
        
        <div className="hero-image-container">
          <img 
            src={weblanding} 
            alt="Modern Web Development" 
            className="hero-image" 
          />
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="services-section">
        <h2 className="section-title">What We Deliver</h2>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">⚡</div>
            <h3>Fast & Responsive</h3>
            <p>
              Websites that load quickly and look perfect on all devices. 
              We optimize for speed and mobile experience.
            </p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🔍</div>
            <h3>SEO Optimized</h3>
            <p>
              Built with search engines in mind. We implement best practices 
              to help you rank higher and get found.
            </p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🛡️</div>
            <h3>Secure & Scalable</h3>
            <p>
              Enterprise-grade security and architecture that grows with 
              your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PROJECT CHECKLIST ================= */}
      <section className="checklist-section">
        <div className="checklist-container">
          <h2 className="section-title">Your Project Roadmap</h2>
          <p className="checklist-intro">
            We follow a structured approach to ensure your website meets all requirements 
            and exceeds expectations.
          </p>
          
          <div className="checklist-items">
            <div className="checklist-item">
              <div className="check-icon">✓</div>
              <div className="checklist-content">
                <h4>Strategy Session</h4>
                <p>We understand your business goals, target audience, and project scope.</p>
              </div>
            </div>
            
            <div className="checklist-item">
              <div className="check-icon">✓</div>
              <div className="checklist-content">
                <h4>Design & Prototype</h4>
                <p>Create wireframes and designs that align with your brand and user needs.</p>
              </div>
            </div>
            
            <div className="checklist-item">
              <div className="check-icon">✓</div>
              <div className="checklist-content">
                <h4>Development Phase</h4>
                <p>Build using modern technologies with regular progress updates.</p>
              </div>
            </div>
            
            <div className="checklist-item">
              <div className="check-icon">✓</div>
              <div className="checklist-content">
                <h4>Testing & Launch</h4>
                <p>Rigorous testing across devices before going live with support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="contact-section" id="contact">
        <h2 className="contact-title">Start Your Project Today</h2>
        <p className="contact-subtitle">
          Fill out the form below and we'll get back to you within 24 hours
        </p>
        
        <div className="contact-form-container">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input 
                  type="text" 
                  id="name"
                  name="name" 
                  className="form-input" 
                  placeholder="Enter your name" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email"
                  name="email" 
                  className="form-input" 
                  placeholder="Enter your email" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone" 
                  className="form-input" 
                  placeholder="Enter your phone" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input 
                  type="text" 
                  id="company"
                  name="company" 
                  className="form-input" 
                  placeholder="Your company name" 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="projectType">Project Type *</label>
                <select 
                  id="projectType"
                  name="projectType" 
                  className="form-select"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  required
                >
                  <option value="">Select project type</option>
                  <option value="corporate">Corporate Website</option>
                  <option value="ecommerce">E-commerce Store</option>
                  <option value="webapp">Web Application</option>
                  <option value="landing">Landing Page</option>
                  <option value="redesign">Website Redesign</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="timeline">Timeline *</label>
                <select 
                  id="timeline"
                  name="timeline" 
                  className="form-select"
                  required
                >
                  <option value="">Select timeline</option>
                  <option value="urgent">ASAP (1-2 months)</option>
                  <option value="standard">Standard (2-4 months)</option>
                  <option value="flexible">Flexible (4-6 months)</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Services Needed</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
                  {[
                    'Website Design',
                    'Frontend Development',
                    'Backend Development',
                    'E-commerce Setup',
                    'SEO Optimization',
                    'Content Management'
                  ].map(service => (
                    <label key={service} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <input 
                        type="checkbox" 
                        checked={services.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                        style={{ width: '16px', height: '16px' }}
                      />
                      <span style={{ fontSize: '14px', color: '#374151' }}>{service}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="budget">Budget Range *</label>
                <select 
                  id="budget"
                  name="budget" 
                  className="form-select"
                  required
                >
                  <option value="">Select budget</option>
                  <option value="5-10k">$5,000 - $10,000</option>
                  <option value="10-25k">$10,000 - $25,000</option>
                  <option value="25-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>
              
              <div className="form-group full-width">
                <label htmlFor="message">Project Details</label>
                <textarea 
                  id="message"
                  name="message" 
                  className="form-textarea" 
                  placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                ></textarea>
              </div>
              
              <button 
                className="btn primary submit-btn" 
                type="submit" 
                disabled={loading}
              >
                {loading ? 'Submitting...' : '🚀 Get Free Proposal'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default WebLandingPage;