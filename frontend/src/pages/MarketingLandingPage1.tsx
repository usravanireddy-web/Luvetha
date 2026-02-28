import React, { useEffect, useRef, useState } from "react";
import {
  Search,
  Megaphone,
  Hash,
  Mail,
  PenTool,
  BarChart3,
  TrendingUp,
  Users,
} from "lucide-react";
import "./MarketingLandingPage1.css";
import { useNavigate } from "react-router";

/* ================= SERVICE COMPONENT ================= */
interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const Service: React.FC<ServiceProps> = ({ icon, title, desc }) => (
  <div className="mlp-service">
    <span className="mlp-service-top-border" />
    <div className="mlp-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>
);

/* ================= AUTO COUNTER ================= */
interface StatCounterProps {
  target: number;
  label: string;
  suffix?: string;
}

const StatCounter: React.FC<StatCounterProps> = ({
  target,
  label,
  suffix = "+",
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = Math.max(1, Math.floor(target / 80));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(current);
    }, 20);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="mlp-stat">
      <div className="mlp-stat-number">
        {count}
        {suffix}
      </div>
      <div className="mlp-stat-text">{label}</div>
    </div>
  );
};

/* ================= PAGE ================= */
const MarketingLandingPage1: React.FC = () => {
  const navigate = useNavigate();

  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const url =
      "https://script.google.com/macros/s/AKfycbzizWIXkmDTfbFiN4HC5UygwKAls3i2lkj4UdjqM3smAgaqpGcC6H9R0i7HPqCiXhVq/exec";

    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: `FullName=${(e.target as any)[0].value}&YourEmail=${
        (e.target as any)[1].value
      }&ContactNumber=${(e.target as any)[2].value}&YourMessage=${
        (e.target as any)[3].value
      }`,
    })
      .then((res) => res.text())
      .then(() => navigate("/thankyou"));
  };

  return (
    <div className="mlp">
      {/* ================= HERO ================= */}
      <section className="mlp-hero">
        <div className="mlp-container mlp-hero-grid">
          <div className="mlp-hero-text">
            <h1>
              Transform Your <span>Digital Presence</span>
              <br /> With Expert Marketing
            </h1>

            <p>
              We help businesses grow with data-driven digital marketing
              strategies.
            </p>

            <div className="mlp-buttons">
              <button
                className="mlp-btn primary"
                onClick={() => scrollTo(contactRef)}
              >
                Get Free Consultation
              </button>
              <button
                className="mlp-btn secondary"
                onClick={() => scrollTo(servicesRef)}
              >
                Our Services
              </button>
            </div>
          </div>

          <div className="mlp-hero-image">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
              alt="Marketing Team"
            />

            {/* FLOATING STATS */}
            <div className="mlp-float top-right">
              <TrendingUp />
              <div>
                <strong>+245%</strong>
                <span>ROI Increase</span>
              </div>
            </div>

            <div className="mlp-float bottom-left">
              <Users />
              <div>
                <strong>500+</strong>
                <span>Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="mlp-services" ref={servicesRef}>
        <div className="mlp-container">
          <div className="mlp-section-head">
            <h2>Our Digital Marketing Services</h2>
            <p>End-to-end solutions tailored to your business goals.</p>
          </div>

          <div className="mlp-services-grid">
            <Service icon={<Search />} title="SEO Optimization" desc="Boost rankings." />
            <Service icon={<Megaphone />} title="PPC Advertising" desc="Instant traffic." />
            <Service icon={<Hash />} title="Social Media Marketing" desc="Brand growth." />
            <Service icon={<Mail />} title="Email Marketing" desc="Lead nurturing." />
            <Service icon={<PenTool />} title="Content Marketing" desc="Engaging content." />
            <Service icon={<BarChart3 />} title="Analytics & Reporting" desc="Data insights." />
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="mlp-stats">
        <div className="mlp-container mlp-stats-grid">
          <StatCounter target={500} label="Clients Served" />
          <StatCounter target={850} label="Projects Delivered" />
          <StatCounter target={245} label="Average ROI" suffix="%" />
          <StatCounter target={120} label="Growth Rate" suffix="%" />
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="mlp-cta">
        <div className="mlp-container">
          <h2>Ready to Grow Your Business?</h2>
          <p>Schedule a free strategy call today.</p>
          <button
            className="mlp-btn accent"
            onClick={() => scrollTo(contactRef)}
          >
            Schedule Your Free Consultation
          </button>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="mlp-contact" ref={contactRef}>
        <div className="mlp-container">
          <div className="mlp-contact-grid">
            <div className="mlp-contact-info">
  <div className="mlp-contact-title">
    
    <h2>Get In Touch</h2>
  </div>


              <a href="tel:+919000204921" className="mlp-contact-item">
                📞 +91 9000204921
              </a>

              <a
                href="mailto:lakshmareddy@luvethatech.com"
                className="mlp-contact-item"
              >
                ✉️ info@luvetha.com
              </a>

              <a
                href="https://www.google.com/maps?q=Vivekananda+Nagar+Kukatpally+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="mlp-contact-item"
              >
                📍 Vivekananda Nagar, Kukatpally, Hyderabad
              </a>
            </div>

            <form className="mlp-form" onSubmit={handleSubmit}>
              <input placeholder="Your Name" required />
              <input placeholder="Your Email" required />
              <input placeholder="Contact Number" required />
              <textarea placeholder="Your Message" rows={5} required />
              <button className="mlp-btn primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketingLandingPage1;
