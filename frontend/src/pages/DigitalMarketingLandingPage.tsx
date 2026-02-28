import React, { useState, useEffect } from 'react';
import './DigitalMarketingLandingPage.css';
import { Target, LineChart, Search, Mail } from "lucide-react";
const testimonials = [
  {
    text:
      "After 3 agencies failed, Luvetha Tech Solutions increased our qualified leads by 300% in just 4 months. Finally, marketing that pays for itself.",
    name: "Sarah K.",
    // role: "CMO @ TechStartup",
    initials: "SK",
  },
  {
    text:
      "Their data-driven strategy transformed our acquisition funnel. We saw immediate improvements in lead quality and ROI.",
    name: "Rahul M.",
    // role: "Founder @ SaaSFlow",
    initials: "RM",
  },
  {
    text:
      "Clear reporting, honest communication, and real growth. Luvetha Tech Solutions truly delivers results.",
    name: "Anita P.",
    // role: "Marketing Head @ FinEdge",
    initials: "AP",
  },
];
const faqs = [
  {
    question: "How quickly will I see results?",
    answer:
      "Most clients begin to see early improvements within 30–45 days. Significant growth and ROI gains typically happen within 90 days as campaigns are optimized and scaled.",
  },
  {
    question: "What's your minimum budget?",
    answer:
      "Our minimum budget depends on your industry and growth goals. We usually work with businesses that are ready to invest consistently in marketing for scalable results.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. We work with clients globally across the US, UK, Europe, Middle East, Australia, and Asia through a fully remote and transparent process.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We primarily work with B2B SaaS, eCommerce, professional services, healthcare, real estate, and technology-driven businesses.",
  },
  {
    question: "Is there a long-term contract?",
    answer:
      "No long-term contracts. We work on flexible monthly engagements focused on performance and results. You stay because it works—not because you’re locked in.",
  },
  {
    question: "What platforms do you manage ads on?",
    answer:
      "We manage campaigns across Google Ads, Meta (Facebook & Instagram), LinkedIn Ads, YouTube, and other performance-driven platforms based on your audience.",
  },
  {
    question: "How do you measure success?",
    answer:
      "Success is measured through clear KPIs such as ROAS, cost per lead, conversion rate, revenue growth, and overall profitability—not vanity metrics.",
  },
  {
    question: "Will I get reports and insights?",
    answer:
      "Yes. You receive transparent, easy-to-understand reports with actionable insights so you always know what’s working and where we’re optimizing.",
  },
  {
    question: "What makes you different from other agencies?",
    answer:
      "We focus purely on performance. Our strategies are data-driven, transparent, and designed around ROI—not generic marketing tactics.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply book a free consultation or request the Free Growth Plan. We’ll analyze your business and share a clear action plan within 48 hours.",
  },
];


const DigitalMarketingLandingPage: React.FC = () => {
   const [active, setActive] = useState(0);
   /* ✅ AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* ✅ MANUAL CONTROLS */
  const prevTestimonial = () => {
    setActive((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setActive((prev) =>
      (prev + 1) % testimonials.length
    );
  };
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <div className="landing-page">
      {/* ================= HERO SECTION WITH FORM ================= */}
<section className="hero-section">
  <div className="container">
    <div className="hero-grid">

      {/* LEFT: HERO TEXT */}
      <div className="hero-text">
        <h1>
          Struggling to Hit Your Revenue Targets?
          <span>We Engineer Predictable 3X ROAS</span>
          For Growth-Focused Businesses.
        </h1>

        <p>
          We help <strong>B2B SaaS, E-commerce & Service Brands</strong> scale
          profitably using performance-driven digital marketing.
        </p>

        <ul>
          <li>✔ No long-term contracts</li>
          <li>✔ Performance-based execution</li>
          <li>✔ Full-funnel growth strategy</li>
          <li>✔ Clear ROI & transparent reporting</li>
        </ul>
      </div>

      {/* RIGHT: CONTACT FORM */}
      <div className="hero-form">
        <h3>Get Your Free Growth Plan</h3>
        <p className="form-subtext">
          48-hour delivery • No credit card • Zero obligation
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = "/thankyou";
          }}
        >
          <input type="text" placeholder="Full Name*" required />
          <input type="email" placeholder="Business Email*" required />
          <input type="text" placeholder="Company / Website URL*" required />

          <select required>
            <option value="">Monthly Marketing Budget*</option>
            <option>Below $1,000</option>
            <option>$1,000 – $5,000</option>
            <option>$5,000 – $10,000</option>
            <option>$10,000+</option>
          </select>

          <textarea
            rows={3}
            placeholder="What’s your biggest growth challenge?"
          ></textarea>

          <button type="submit">
            🚀 GET MY FREE GROWTH PLAN
          </button>
        </form>
      </div>

    </div>
  </div>
</section>


{/* Problem & Solution Section */}
<section className="content-section">
  <div className="container">
    <h2 className="section-title">The Problem We Solve</h2>
    <p className="section-description">
      Your current marketing efforts might not be delivering the results you need to scale.
    </p>

    <div className="content-grid">
      {/* Problem */}
      <div className="problem-section">
        <div className="problem-list">
          <h3 className="list-title">You're Experiencing</h3>
          <ul className="no-bullets spaced-list">
            <li>❌ Inconsistent or declining ROI from ads</li>
            <li>❌ High customer acquisition costs</li>
            <li>❌ Stagnant growth despite increased spend</li>
            <li>❌ Lack of clear data-driven insights</li>
            <li>❌ Difficulty scaling profitable campaigns</li>
          </ul>
        </div>
      </div>

      {/* Solution */}
      <div className="solution-section">
        <div className="solution-list">
          <h3 className="list-title solution-title">Our Solution</h3>
          <ul className="spaced-list">
            <li>✅ Data-driven strategy tailored to your business</li>
            <li>✅ Full-funnel optimization across all channels</li>
            <li>✅ Continuous testing and optimization</li>
            <li>✅ Transparent reporting and clear KPIs</li>
            <li>✅ Scalable systems for sustainable growth</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

{/* 3-Step Process Section */}
<section className="process-section">
  <div className="container">
    <h2 className="process-title">Our 3-Step Process</h2>

    <div className="process-grid">
      {/* Step 1 */}
      <div className="process-card">
        <div className="process-top-line"></div>
        <div className="process-circle">1</div>

        <h3>Deep-Dive Audit</h3>
        <p className="process-time">Week 1–2</p>

        <ul>
          <li>Full-funnel analytics review</li>
          <li>Competitor gap analysis</li>
          <li>Conversion rate optimization assessment</li>
        </ul>

        <button className="process-outline-btn">
          Deliverable: Custom Growth Roadmap
        </button>
      </div>

      {/* Step 2 */}
      <div className="process-card">
        <div className="process-top-line"></div>
        <div className="process-circle">2</div>

        <h3>Precision Execution</h3>
        <p className="process-time">Week 3–8</p>

        <ul>
          <li>Multi-channel campaign launch</li>
          <li>Daily optimization & A/B testing</li>
          <li>Weekly performance reports</li>
        </ul>

        <button className="process-outline-btn">
          KPI: 30%+ improvement in lead quality
        </button>
      </div>

      {/* Step 3 */}
      <div className="process-card">
        <div className="process-top-line"></div>
        <div className="process-circle">3</div>

        <h3>Scale & Automate</h3>
        <p className="process-time">Month 3+</p>

        <ul>
          <li>Scale winning channels</li>
          <li>Implement marketing automation</li>
          <li>Refine customer journey</li>
        </ul>

        <button className="process-outline-btn">
          Guarantee: 3X ROAS
        </button>
      </div>
    </div>
  </div>
</section>



    <section className="core-services">
  <div className="container">
    <h2 className="section-title">Our Core Services</h2>

    <div className="services-cards">
      
      <div className="service-card">
        <div className="service-icon blue">
          <Target size={30} />
        </div>
        <h4>Paid Media Management</h4>
        <p>
          Stop wasting ad budget. We build profitable campaigns on Meta,
          Google, LinkedIn & TikTok with full transparency.
        </p>
      </div>

      <div className="service-card">
        <div className="service-icon purple">
          <LineChart size={30} />
        </div>
        <h4>CRO Optimization</h4>
        <p>
          Turn existing traffic into 20–40% more conversions without
          increasing ad spend.
        </p>
      </div>

      <div className="service-card">
        <div className="service-icon green">
          <Search size={30} />
        </div>
        <h4>SEO That Actually Ranks</h4>
        <p>
          Get page-1 rankings that drive qualified leads — not just blog
          traffic.
        </p>
      </div>

      <div className="service-card">
        <div className="service-icon orange">
          <Mail size={30} />
        </div>
        <h4>Email & SMS Marketing</h4>
        <p>
          Automate revenue with sequences converting at 5–10× higher than
          social media.
        </p>
      </div>

    </div>
  </div>
</section>
<section className="testimonial-section">
      <div className="container">
        <h2 className="testimonial-heading">What Clients Say</h2>

        <div className="testimonial-card">
          <p className="testimonial-text">
            “{testimonials[active].text}”
          </p>

          <div className="testimonial-user">
            <div className="testimonial-avatar">
              {testimonials[active].initials}
            </div>
            <div>
              <h4>{testimonials[active].name}</h4>
              {/* <span>{testimonials[active].role}</span> */}
            </div>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === active ? "active" : ""}`}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </div>
    </section>
    {/* ================= FREE GROWTH PLAN OFFER ================= */}
<section className="growth-plan-section">
  <div className="container">

    <h2 className="growth-plan-title">
      The Free Growth Plan Offer
    </h2>

    <div className="growth-plan-card">

      <h3 className="growth-plan-subtitle">
        What You Get in 48 Hours:
      </h3>

      <ul className="growth-plan-list">
        <li><span>✔</span> Funnel Analysis: Where you’re leaking money</li>
        <li><span>✔</span> Channel Audit: Your best 2–3 opportunities</li>
        <li><span>✔</span> Competitor Gaps: 3 actionable insights</li>
        <li><span>✔</span> 90-Day Plan: Step-by-step roadmap</li>
        <li><span>✔</span> ROI Projection: Expected revenue impact</li>
      </ul>

      <p className="growth-plan-cta-text">
        Stop Guessing. Start Growing.
      </p>

      <form className="growth-plan-form">
        <input
          type="email"
          placeholder="Your Business Email"
          required
        />
        <input
          type="url"
          placeholder="Your Website URL"
          required
        />

        <button type="submit" className="growth-plan-button">
          📊 GET MY FREE GROWTH PLAN NOW
        </button>
      </form>

      <p className="growth-plan-note">
        No credit card required • 48-hour delivery • Zero obligation
      </p>

    </div>
  </div>
</section>
<section className="faq-section">
      <div className="container">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "open" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <span>{faq.question}</span>
                <span className="faq-icon">⌄</span>
              </div>

              {activeIndex === index && (
                <div className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* ================= FINAL CTA SECTION ================= */}
<section className="final-cta-section">
  <div className="container">
    <h2 className="final-cta-heading">
      Your Competitors Are Optimizing Right Now. Are You?
    </h2>

    <div className="final-cta-buttons">
      <button className="final-cta-btn primary">
        🚀 GET MY FREE GROWTH PLAN
      </button>

      <button className="final-cta-btn secondary">
        📞 BOOK A 15-MIN STRATEGY CALL
      </button>
    </div>

    <p className="final-cta-subtext">
      For serious businesses ready to scale
    </p>
  </div>
</section>





    </div>
  );
};

export default DigitalMarketingLandingPage;