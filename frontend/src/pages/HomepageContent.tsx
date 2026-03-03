import React, { useState, useEffect } from 'react';
import './HomePageContent.css';
import { useNavigate } from 'react-router-dom';
import { Briefcase, FolderKanban, Headphones } from "lucide-react";

import {
  Search,
  Target,
  Zap,
  CheckCircle,
  Rocket,
  ChevronRight,
  PenTool,
  Users,
  Clock,
  Heart,
  TrendingUp,
  Code,
  Shield,
  Settings,
  Cloud,
  Server,
  ArrowUpRight
} from "lucide-react";
import SumanaaLogo from "../assets/sumanaaLogo1.png";
import PartnerLogoB from "../assets/logoimg.png";
import PartnerLogoC from "../assets/logo.png";
import GTR from "../assets/golden.png";
import Vagtha from "../assets/vagtha.png";
import Dharani from "../assets/dharani logo.png";
import IshaaSilks from "../assets/ishaa.png";
import Vibrant from "../assets/vibrant.webp";
import Banner1 from "../assets/banner1.png";
import Banner2 from "../assets/banner2.png";
import Banner3 from "../assets/banner3.png";
import Banner4 from "../assets/banner4.png";
import Deveops from "../assets/selfi-removebg.png";

// ================= CONTACT FORM COMPONENT WITH VALIDATION =================
const HeroContactForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const validateName = (name: string) => {
    // Only allow letters and spaces, no numbers
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name) && name.length > 0) {
      return 'Name should only contain letters';
    }
    return '';
  };

  const validatePhone = (phone: string) => {
    // Only allow numbers, +, - and spaces
    const phoneRegex = /^[\d\s\+\-]+$/;
    if (!phoneRegex.test(phone) && phone.length > 0) {
      return 'Phone number should only contain digits';
    }
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Update form data
    setFormData({
      ...formData,
      [name]: value
    });

    // Validate based on field
    if (name === 'name') {
      setErrors({
        ...errors,
        name: validateName(value)
      });
    } else if (name === 'phone') {
      setErrors({
        ...errors,
        phone: validatePhone(value)
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final validation before submit
    const nameError = validateName(formData.name);
    const phoneError = validatePhone(formData.phone);
    
    if (nameError || phoneError) {
      setErrors({
        name: nameError,
        email: '',
        phone: phoneError,
        message: ''
      });
      return;
    }

    // Navigate to contact page with form data
    navigate('/contact', { state: { formData } });
  };

  return (
    <div className="hero-contact-form">
      <h3>Get in Touch</h3>
      <p>Fill the form and we'll get back within 24 hours</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            value={formData.name}
            onChange={handleChange}
            pattern="[A-Za-z\s]+"
            title="Name should only contain letters"
            required
          />
          {errors.name && <small style={{ color: 'red', fontSize: '12px' }}>{errors.name}</small>}
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={handleChange}
            pattern="[\d\s\+\-]+"
            title="Phone number should only contain digits"
            required
          />
          {errors.phone && <small style={{ color: 'red', fontSize: '12px' }}>{errors.phone}</small>}
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
};

// ================= PROCESS SECTION =================
const ProcessSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const navigate = useNavigate();
  
  const processSteps = [
    { id: 1, title: "Discovery", description: "Understanding your vision, goals, and requirements through in-depth consultation.", icon: <Search size={24} />, color: "#008cff", duration: "1-2 weeks", deliverables: ["Project Scope", "Tech Stack", "Timeline"] },
    { id: 2, title: "Strategy", description: "Creating a comprehensive roadmap with clear milestones and success metrics.", icon: <Target size={24} />, color: "#57b5ff", duration: "2-3 weeks", deliverables: ["Wireframes", "Architecture", "Budget"] },
    { id: 3, title: "Design", description: "Crafting beautiful, intuitive interfaces that delight your users.", icon: <PenTool size={24} />, color: "#9333ea", duration: "3-4 weeks", deliverables: ["UI Design", "Prototype", "Style Guide"] },
    { id: 4, title: "Development", description: "Building your product using agile methodology with regular updates.", icon: <Zap size={24} />, color: "#f59e0b", duration: "8-12 weeks", deliverables: ["Code", "Documentation", "Tests"] },
    { id: 5, title: "Launch", description: "Deploying your product and ensuring smooth transition to live environment.", icon: <Rocket size={24} />, color: "#10b981", duration: "1-2 weeks", deliverables: ["Deployment", "Training", "Handover"] },
    { id: 6, title: "Support", description: "Ongoing maintenance, updates, and optimization for peak performance.", icon: <Heart size={24} />, color: "#ef4444", duration: "Ongoing", deliverables: ["Monitoring", "Updates", "Support"] }
  ];

  const testimonials = [
    { id: 1, name: "Sarah Johnson", content: "The team transformed our vision into reality. Their process was transparent and they delivered beyond our expectations.", rating: 5, image: "SJ", color: "#008cff", project: "E-commerce Platform" },
    { id: 2, name: "Michael Chen", content: "Exceptional work ethic and technical expertise. They didn't just build a product; they became our technology partners.", rating: 5, image: "MC", color: "#57b5ff", project: "Mobile App" },
    { id: 3, name: "Emily Rodriguez", content: "Their agile approach kept us involved throughout. The weekly demos and clear communication made all the difference.", rating: 5, image: "ER", color: "#9333ea", project: "SaaS Platform" },
    { id: 4, name: "David Kim", content: "Outstanding technical architecture and clean code. Our system handles millions of users seamlessly.", rating: 5, image: "DK", color: "#f59e0b", project: "Cloud Infrastructure" }
  ];

  const teamMembers = [
    { name: "Alex Morgan", role: "Project Lead", experience: "10+ years", expertise: ["Agile", "Scrum", "Management"], color: "#008cff" },
    { name: "Jessica Lee", role: "Senior Developer", experience: "8+ years", expertise: ["React", "Node.js", "Python"], color: "#57b5ff" },
    { name: "Marcus Webb", role: "UX Designer", experience: "7+ years", expertise: ["UI/UX", "Research", "Prototyping"], color: "#9333ea" },
    { name: "Priya Patel", role: "QA Lead", experience: "6+ years", expertise: ["Testing", "Automation", "Security"], color: "#f59e0b" }
  ];

  const faqs = [
    { question: "How long does a typical project take?", answer: "Projects typically range from 3-6 months depending on complexity. Simple websites may take 4-8 weeks, while complex web applications can take 6-12 months." },
    { question: "What is your development process?", answer: "We follow agile methodology with 2-week sprints, daily standups, and weekly client demos. This approach ensures transparency and allows for feedback integration." },
    { question: "Do you provide post-launch support?", answer: "Yes, we offer ongoing maintenance and support packages tailored to your needs including bug fixes, security updates, and performance monitoring." },
    { question: "How much does a project cost?", answer: "Project costs vary based on scope, complexity, and requirements. We provide transparent pricing with detailed quotes after our discovery phase." },
    { question: "What technologies do you specialize in?", answer: "We specialize in modern technologies including React, Angular, Vue.js, Node.js, Python, .NET, PHP, React Native, Flutter, and various CMS platforms." }
  ];

  return (
    <section className="process-section">
      <div className="process-container">
        {/* Hero with Stats */}
        <div className="process-hero-grid">
          <div>
            <div className="process-badge">
              <span>✦ OUR PROCESS</span>
            </div>
            <h1 className="process-hero-title">
              We turn ideas into{' '}
              <span className="gradient-text">successful products</span>
            </h1>
            <p className="process-hero-description">
              From concept to launch and beyond, we guide you through every step with complete transparency.
            </p>
            <div className="process-hero-buttons">
              <button onClick={() => navigate('/contact')} className="process-btn-primary">Start a project</button>
              <button className="process-btn-secondary">Watch video →</button>
            </div>
          </div>
          <div className="process-stats-grid">
            {[
              { value: "150+", label: "Projects Completed", icon: <CheckCircle size={24} /> },
              { value: "50+", label: "Happy Clients", icon: <Users size={24} /> },
              { value: "98%", label: "Success Rate", icon: <TrendingUp size={24} /> },
              { value: "24/7", label: "Support Available", icon: <Clock size={24} /> }
            ].map((stat, idx) => (
              <div key={idx} className="stat-card-modern">
                <div className="stat-icon-modern">{stat.icon}</div>
                <div className="stat-value-modern">{stat.value}</div>
                <div className="stat-label-modern">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="process-steps-wrapper">
          <div className="process-steps-header">
            <h2>Our 6-step process</h2>
            <p>A proven methodology that delivers results, every time.</p>
          </div>
          <div className="process-steps-grid">
            {processSteps.map((step) => (
              <div key={step.id} className="process-step-card">
                <div className="step-number" style={{ background: step.color }}>{step.id}</div>
                <div className="step-icon-box" style={{ background: `${step.color}15`, color: step.color }}>{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="step-duration">
                  <Clock size={14} />
                  <span>{step.duration}</span>
                </div>
                <div className="step-tags">
                  {step.deliverables.map((item, idx) => (
                    <span key={idx} className="step-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="team-section">
          <div className="team-header">
            <h2>Meet your team</h2>
            <p>Experienced professionals dedicated to your success.</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="team-card">
                <div className="team-avatar" style={{ background: member.color }}>{member.name.charAt(0)}</div>
                <h3>{member.name}</h3>
                <div className="team-role" style={{ color: member.color }}>{member.role}</div>
                <div className="team-experience">{member.experience}</div>
                <div className="team-skills">
                  {member.expertise.map((skill, i) => (
                    <span key={i} className="team-skill">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="testimonials-section">
          <div className="testimonials-header">
            <h2>Client success stories</h2>
            <p>What our clients say about working with us.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-quote">"</div>
                <div className="testimonial-author">
                  <div className="author-avatar" style={{ background: testimonial.color }}>{testimonial.image}</div>
                  <div>
                    <div className="author-name">{testimonial.name}</div>
                  </div>
                </div>
                <p className="testimonial-content">{testimonial.content}</p>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star-filled">★</span>
                  ))}
                  <span className="testimonial-project">{testimonial.project}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blog */}
        <div className="blog-section">
          <h2>Latest Insights</h2>
          <div className="blog-grid">
            {[
              { title: "How to choose the right tech stack", desc: "Learn about the factors that influence technology decisions...", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" },
              { title: "Modern Web Development Trends", desc: "Discover the latest tools and frameworks shaping the web...", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" },
              { title: "Cloud Computing for Startups", desc: "How cloud infrastructure helps startups scale efficiently...", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" }
            ].map((blog, index) => (
              <div key={index} className="blog-card">
                <img src={blog.image} alt={blog.title} className="blog-image" />
                <div className="blog-content">
                  <div className="blog-meta">Article • 5 min read</div>
                  <h3>{blog.title}</h3>
                  <p>{blog.desc}</p>
                  <span className="blog-read-more">Read more →</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="faq-section">
          <h2>Frequently asked questions</h2>
          <div className="faq-container">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="faq-item">
                  <button onClick={() => setOpenFaq(isOpen ? null : idx)} className="faq-question">
                    <span>{faq.question}</span>
                    <ChevronRight size={18} className={`faq-icon ${isOpen ? 'open' : ''}`} />
                  </button>
                  {isOpen && <div className="faq-answer">{faq.answer}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// ================= MAIN HOMEPAGE CONTENT =================
const HomePageContent: React.FC = () => {
  const navigate = useNavigate();
  const services = ['E-Commerce Development', 'Digital Marketing', 'Web Design', 'UI/UX', 'Data Services', 'App Development', 'Security'];
  const [currentService, setCurrentService] = useState(0);
  const heroImages = [Banner1, Banner2, Banner3, Banner4];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => setCurrentService((prev) => (prev + 1) % services.length), 3000);
    return () => clearInterval(textInterval);
  }, []);

  useEffect(() => {
    const imageInterval = setInterval(() => setCurrentImage((prev) => (prev + 1) % heroImages.length), 5000);
    return () => clearInterval(imageInterval);
  }, []);

  const handleServiceClick = (path: string) => navigate(path);

  const partnerLogos = [
    { name: "Sumanaa", logo: SumanaaLogo },
    { name: "PTR", logo: PartnerLogoB },
    { name: "Sona", logo: PartnerLogoC },
    { name: "Vagtha", logo: Vagtha },
    { name: "GTR", logo: GTR },
    { name: "Dharani", logo: Dharani },
    { name: "Ishaa", logo: IshaaSilks },
    { name: "Vibrant", logo: Vibrant },
  ];

  const devopsServices = [
    "UI/UX Solutions",
    "Web & Mobile Application Development",
    "Digital Marketing",
    "Hosting Services",
    "Security (VAPT)"
  ];

  return (
    <div className="App">
      {/* HERO SECTION WITH CONTACT FORM */}
      <section id="home" className="hero-section" style={{ backgroundImage: `url(${heroImages[currentImage]})` }}>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Technology & Digital Solutions That Power Business Growth</h1>
            <h2 className="hero-services-text">
              We Professional In <span className="changing-text">{services[currentService]}</span> Services
            </h2>
            <p className="hero-subtitle">
              Luvetha Tech Solutions Private Limited helps businesses design better experiences, 
              build powerful applications, market smarter, and stay secure with end-to-end technology solutions.
            </p>
            <div className="hero-buttons">
              <a href="/contact#contact-form" className="hero-btn primary">Get Free Consultation</a>
              <a href="/services" className="hero-btn secondary">Explore Our Services</a>
            </div>
            <p className="hero-trust">Trusted technology partner for startups, SMEs, and growing enterprises.</p>
          </div>
          
          {/* Contact Form in Hero Section with Validation */}
          <HeroContactForm />
        </div>
        
        {/* Image Tracker - Bottom Center */}
        <div className="image-tracker">
          {heroImages.map((_, index) => (
            <div key={index} className={`tracker-dot ${index === currentImage ? 'active' : ''}`} onClick={() => setCurrentImage(index)} />
          ))}
        </div>
      </section>

      <div className="content-wrapper">
        {/* INTRO SECTION */}
        <section id="about" className="intro-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Who We Are</h2>
              <div className="title-underline"></div>
            </div>
            <div className="intro-content">
              <div className="intro-left">
                <h3 className="intro-heading">Your Growth-Focused Technology Partner</h3>
                <div className="intro-text">
                  <p>Luvetha Tech Solutions Private Limited is a full-service technology and digital solutions company delivering <strong>UI/UX design, web & mobile application development, digital marketing, hosting services, and security testing (VAPT)</strong>.</p>
                  <p>We combine <strong>design thinking, modern development, data-driven marketing, and strong security practices</strong> to help businesses grow faster and operate smarter.</p>
                </div>
              </div>
              <div className="intro-right">
                <div className="intro-features">
                  <div className="feature-item">
                    <div className="feature-icon">🎯</div>
                    <div className="feature-content">
                      <h4>User-Centric Solutions</h4>
                      <p>Focusing on end-user experience and satisfaction</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">📈</div>
                    <div className="feature-content">
                      <h4>Scalable Technology</h4>
                      <p>Building solutions that grow with your business</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">💼</div>
                    <div className="feature-content">
                      <h4>Business-Driven Approach</h4>
                      <p>Aligning technology with business objectives</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE SERVICES SECTION */}
        <section id="services" className="services-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Our Core Services</h2>
              <div className="title-underline"></div>
              <p className="section-subtitle">Comprehensive solutions designed to support your business at every digital stage.</p>
            </div>
            <div className="services-grid">
              {[
                { icon: "🎨", title: "Web Design", subtitle: "Beautiful, responsive websites that captivate your audience", desc: "Create stunning, user-friendly websites that reflect your brand and drive engagement.", offerings: ["Custom Website Design", "Responsive & Mobile-First Design", "UI/UX Optimization", "Landing Page Design", "Website Redesign"], link: "/webdevelopment" },
                { icon: "📈", title: "Digital Marketing", subtitle: "Turn Traffic Into Leads. Leads Into Revenue.", desc: "Increase visibility, generate quality leads, and improve ROI.", offerings: ["SEO", "Google Ads", "Social Media Marketing", "Lead Generation", "Conversion Pages"], link: "/digitalmarketing" },
                { icon: "📊", title: "Data Services", subtitle: "Transform data into actionable insights", desc: "Leverage your data to make informed business decisions.", offerings: ["Data Analytics", "Business Intelligence", "Data Warehousing", "ETL Services", "Big Data Solutions"], link: "/dataservices" },
                { icon: "⚙️", title: "Custom Development", subtitle: "Tailored software solutions for your unique needs", desc: "Build custom applications designed for your business.", offerings: ["Custom Software", "Enterprise Apps", "API Development", "Legacy Modernization", "Cloud Solutions"], link: "/customdevelopment" },
                { icon: "🔄", title: "IT Consulting", subtitle: "Strategic Technology Advisory", desc: "Make informed technology decisions and optimize IT infrastructure.", offerings: ["Technology Strategy", "IT Planning", "Digital Transformation", "Cloud Migration", "Budget Optimization"], link: "/itconsulting" },
                { icon: "📉", title: "Data Analytics", subtitle: "Uncover patterns, predict trends, drive growth", desc: "Turn raw data into valuable insights for better decision making.", offerings: ["Predictive Analytics", "BI Dashboards", "Customer Analytics", "Real-Time Analytics", "Data Mining"], link: "/dataanalytics" },
                { icon: "📱", title: "Mobile Apps", subtitle: "Native & cross-platform mobile solutions", desc: "Reach your customers on the go with powerful mobile applications.", offerings: ["iOS Apps", "Android Apps", "Cross-Platform", "App UI/UX", "App Store Optimization"], link: "/mobileapps" },
                { icon: "🏪", title: "Retail Services", subtitle: "Digital solutions for modern retail", desc: "Transform your retail business with innovative technology solutions.", offerings: ["E-Commerce", "POS Integration", "Inventory Management", "Loyalty Programs", "Omnichannel"], link: "/retailservices" },
                { icon: "🗄️", title: "Database Maintenance", subtitle: "Keep your data secure, optimized, and available", desc: "Ensure your databases run smoothly with professional maintenance.", offerings: ["Database Optimization", "Backup & Recovery", "Performance Tuning", "Security & Encryption", "Migration & Upgrades"], link: "/databasemaintenance" }
              ].map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p className="service-subtitle">{service.subtitle}</p>
                  <p>{service.desc}</p>
                  <div className="service-content">
                    <h4>What We Offer:</h4>
                    <ul className="offerings-list">
                      {service.offerings.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                  <a href={service.link} className="get-started-link" onClick={(e) => { e.preventDefault(); handleServiceClick(service.link); }}>Get started today →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DEVOPS SERVICES SECTION */}
        <section className="devops-new-section">
          <div className="devops-container">
            <div className="devops-image-wrapper">
              <img 
                src={Deveops}
                alt="DevOps Services" 
                className="devops-image" 
              />
            </div>

            <div className="devops-content">
              <h2>Best Solutions</h2>
              <h3>DevOps Services and Solutions</h3>

              <p>
                If you are seeking to enhance efficiency and reduce costs 
                through DevOps practices, agility, automation, and continuity.
              </p>
              
              <ul className="devops-services-list">
                {devopsServices.map((service, index) => (
                  <li key={index}>
                    <span className="devops-check">✓</span>
                    {service}
                  </li>
                ))}
              </ul>
              
              <a href="/services" className="devops-explore-btn">
                Explore More <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENT SECTION */}
        <section className="w-full bg-gradient-to-r from-sky-600 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-5 py-8 md:py-10">
            <div className="grid md:grid-cols-5 items-center">
              {/* LEFT TEXT AREA */}
              <div className="md:col-span-2 mb-6 md:mb-0">
                <p className="uppercase tracking-widest text-xs opacity-80 mb-2">
                  Achievement
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
                  We Are Enhancing <br />
                  Business Success
                </h2>
              </div>

              {/* RIGHT STATS AREA */}
              <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 md:border-l border-white/30">
                {[
                  { value: "12+", label: "Years of Experience", icon: Briefcase },
                  { value: "3000+", label: "Projects", icon: FolderKanban },
                  { value: "260+", label: "Clients", icon: Users },
                  { value: "100%", label: "Friendly Support", icon: Headphones },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center
                                 text-center
                                 py-6 md:py-8 px-4
                                 border-r border-white/20
                                 last:border-r-0
                                 transition duration-300
                                 hover:bg-white/10"
                    >
                      <Icon size={30} className="mb-3 opacity-90" />
                      <h4 className="text-2xl md:text-3xl font-bold">
                        {item.value}
                      </h4>
                      <p className="mt-1 text-xs md:text-sm opacity-90">
                        {item.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* TECHNOLOGIES SECTION */}
        <section className="tech-section">
          <div className="tech-container">
            <div className="tech-image-box">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Technology" className="tech-image" />
            </div>
            <div className="tech-content">
              <h2 className="tech-title">Technologies & <span>Platform</span></h2>
              <p className="tech-desc">With our profound understanding of the latest digital platforms and technologies, we assist businesses in accelerating growth and gaining a competitive edge.</p>
              <ul className="tech-list">
                <li><span className="check-icon">✔</span><div><strong>Backend</strong><p>.NET | PHP | Java | Node | Python</p></div></li>
                <li><span className="check-icon">✔</span><div><strong>Frontend</strong><p>Angular | VueJS | React</p></div></li>
                <li><span className="check-icon">✔</span><div><strong>Mobile</strong><p>iOS | Android | Kotlin | Flutter | React Native</p></div></li>
                <li><span className="check-icon">✔</span><div><strong>CMS</strong><p>WordPress | Shopify | Drupal</p></div></li>
                <li><span className="check-icon">✔</span><div><strong>eCommerce</strong><p>Magento | WooCommerce | OpenCart | Shopify</p></div></li>
              </ul>
              <button className="tech-btn" onClick={() => navigate("/contact#contact-form")}>Get Started Today</button>
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <ProcessSection />

        {/* PARTNERS SECTION */}
        <section className="partners-section">
          <h2>Trusted by industry leaders</h2>
          <div className="partners-marquee">
            <div className="partners-marquee-track">
              {[...partnerLogos, ...partnerLogos].map((partner, idx) => (
                <div key={`${partner.name}-${idx}`} className="partner-logo-card">
                  <img src={partner.logo} alt={partner.name} className="partner-logo-image" onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/220x120?text=' + partner.name; }} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePageContent;