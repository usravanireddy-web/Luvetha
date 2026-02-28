import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      
  
      e.preventDefault();
      const url = "https://script.google.com/macros/s/AKfycby-Sqm7_dWEFUNcroUX--McNWY8CM7vC6UJHhEAU5DIYPUPtUNYPqcibiG0TqIBagKn/exec"
      fetch(url, {
        method: "POST",
        headers:{"content-type":"application/x-www-form-urlencoded"},
  
        body:(`name=${(e.target as any)[0].value}&phone=${(e.target as any)[1].value}&email=${(e.target as any)[2].value}}`)
      }).then(response => response.text())
      .then(data => {
        console.log(data);
        alert(data)
      })
      .catch(error => {
        console.error('Error!', error.message);
      });
      // Handle form submission logic here
      console.log("Form submitted");
      navigate("/thankyou");
  
    }

  const services = [
    {
      title: "Web & Mobile App Development",
      description:
        "Modern, responsive web and mobile applications built on latest technologies.",
    },
    {
      title: "Cloud & DevOps Solutions",
      description:
        "Cloud migration, CI/CD pipelines, containerization and infrastructure automation.",
    },
    {
      title: "AI, Automation & Integrations",
      description:
        "Smart AI tools, workflow automation and API integrations to speed up your business.",
    },
    {
      title: "IT Consulting & Staffing",
      description:
        "Dedicated tech teams, consulting and long-term IT support for your projects.",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Discovery & Requirement Analysis",
      text: "We understand your goals, current systems and business challenges.",
    },
    {
      step: "02",
      title: "Solution Design & Planning",
      text: "We design architecture, wireframes and a clear execution roadmap.",
    },
    {
      step: "03",
      title: "Development, QA & Deployment",
      text: "We build, test and deploy secure, scalable applications to production.",
    },
  ];

  const testimonials = [
    {
      name: "Rahul Mehta",
      location: "Founder • SaaS Startup",
      text: "Luvetha Tech Solutions built our core platform on time with great quality. Super reliable team!",
    },
    {
      name: "Pooja Dev",
      location: "Project Manager • US Client",
      text: "Their cloud & DevOps automation reduced our release time drastically. Highly recommended.",
    },
  ];

  return (
    <div className="landing-page">
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-inner">
          {/* LEFT */}
          <div className="hero-left">
            <h1 className="hero-title">
              Transform your business with{" "}
              <span className="brand-text">smart technology</span>
            </h1>

            <p className="hero-note hero-note-big">
              *Our tech experts will contact you within 30 minutes after you
              submit the enquiry form.*
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hero-right">
            <div className="hero-image-card">
              <img
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Developers working in modern tech office"
              />
              <div className="hero-image-overlay" />
              <div className="hero-image-tag">
                <strong>Enterprise Web Platform</strong>
                <p>Designed, built & deployed to cloud by Luvetha Tech.</p>
                <small>Trusted by 50+ clients across domains</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="section section-contact" id="lead-form-section">
        <div className="section-header" />

        <div className="contact-grid">
          {/* form */}
          <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
            <span className="form-badge">Priority Response • 30 mins</span>
            <h3 className="form-title">Request a free project discussion</h3>
            <p className="form-subtitle">
              Share your details and a Luvetha consultant will call you to
              understand your requirements.
            </p>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-field">
                <label htmlFor="phone">contact</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="Your mobile number"
                  disabled={isSubmitting}
                  pattern="[0-9]{10}"
                  title="Please enter a 10-digit phone number"
                />
              </div>
            </div>

            <div className="form-row form-row-single">
              <div className="form-field">
                <label htmlFor="email">email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter Your email"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn brand-btn btn-full form-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Enquiry"}
            </button>

            {/* Submission status indicator */}
            {isSubmitting && (
              <div className="submission-status">
                <div className="spinner"></div>
                <span>Sending your enquiry...</span>
              </div>
            )}
          </form>

          {/* contact info */}
          <div className="contact-info">
            <h3>Contact & Office</h3>
            <ul>
              <li>
                <strong>Phone:</strong> +91 9000204921
              </li>
              <li>
                <strong>Email:</strong> lakshmareddy@luvetha.com
              </li>
              <li>
                <strong>Address:</strong> Luvetha Tech Solutions Pvt. Ltd.,
                Vivekananda Nagar, Kukatpally, Hyderabad, Telangana, India
              </li>
              <li>
                <strong>Working Hours:</strong> Mon–Sat, 9:00 AM – 7:00 PM
              </li>
            </ul>

            <Link to="/contact" className="btn brand-outline-btn small-btn">
              Go to Full Contact Page
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="section section-light">
        <div className="section-header">
          <h2>Our Technology Services</h2>
          <p>End-to-end IT solutions to design, build and scale your products.</p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className="service-card">
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>

        <div className="center">
          <Link to="/services" className="btn brand-outline-btn small-btn">
            Explore All Services
          </Link>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="section section-muted">
        <div className="section-header">
          <h2>How We Work</h2>
          <p>Transparent, agile and collaborative software development process.</p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.step} className="step-card">
              <span className="step-number">{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="section section-light">
        <div className="section-header">
          <h2>What Our Clients Say</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">
              <p className="testimonial-text">"{t.text}"</p>
              <p className="testimonial-name">{t.name}</p>
              <p className="testimonial-location">{t.location}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
