import React, { useState, useEffect, useRef, FormEvent } from 'react';

const LuvethaTechSolutions: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({
    email: '',
    phone: ''
  });

  const navbarRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Mobile menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking on a link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Validation
    const errors = { email: '', phone: '' };
    let isValid = true;

    if (!formData.name || !formData.email || !formData.service) {
      alert('Please fill in all required fields.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Phone validation (if provided)
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (formData.phone && !phoneRegex.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      errors.phone = 'Please enter a valid phone number';
      isValid = false;
    }

    setFormErrors(errors);

    if (isValid) {
      alert(`Thank you ${formData.name}! Your consultation request has been submitted. We'll contact you at ${formData.email} within 24 hours.`);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));

    // Clear error when user starts typing
    if (id === 'email' || id === 'phone') {
      setFormErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };

  // Smooth scrolling
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    closeMenu();
    
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const headerHeight = navbarRef.current?.offsetHeight || 0;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      const navbar = navbarRef.current;
      if (navbar) {
        if (window.scrollY > 100) {
          navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
          navbar.style.backdropFilter = 'blur(10px)';
        } else {
          navbar.style.backgroundColor = 'white';
          navbar.style.backdropFilter = 'none';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe elements
    document.querySelectorAll('.service-card, .reason-card, .step').forEach(el => {
      observerRef.current?.observe(el);
    });

    // Hero animation
    setTimeout(() => {
      const heroContent = document.querySelector('.hero-content');
      if (heroContent) {
        heroContent.classList.add('animate');
      }
    }, 300);

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  // Service card click effect
  useEffect(() => {
    const handleCardClick = (e: Event) => {
      const card = e.currentTarget as HTMLElement;
      card.classList.toggle('active');
    };

    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
      card.addEventListener('click', handleCardClick);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('click', handleCardClick);
      });
    };
  }, []);

  // Current year for footer
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
      yearElement.innerHTML = yearElement.innerHTML.replace('2024', currentYear.toString());
    }
  }, []);

  const styles = `
    /* Reset & Base Styles */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --primary: #2563eb;
      --primary-dark: #1d4ed8;
      --secondary: #7c3aed;
      --dark: #1f2937;
      --light: #f9fafb;
      --gray: #6b7280;
      --light-gray: #e5e7eb;
      --success: #10b981;
      --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      --transition: all 0.3s ease;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: var(--dark);
      background-color: #fff;
      overflow-x: hidden;
    }

    .container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    section {
      padding: 80px 0;
    }

    h1, h2, h3, h4 {
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 1rem;
    }

    h1 {
      font-size: 3.5rem;
    }

    h2 {
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 3rem;
      position: relative;
    }

    h2::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 4px;
      background: var(--primary);
      border-radius: 2px;
    }

    h3 {
      font-size: 1.8rem;
    }

    p {
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
      color: var(--gray);
    }

    a {
      text-decoration: none;
      color: inherit;
      transition: var(--transition);
    }

    .btn {
      display: inline-block;
      padding: 14px 32px;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: var(--transition);
      border: none;
      font-size: 1rem;
      text-align: center;
    }

    .btn-primary {
      background-color: var(--primary);
      color: white;
    }

    .btn-primary:hover {
      background-color: var(--primary-dark);
      transform: translateY(-3px);
      box-shadow: var(--shadow);
    }

    .btn-secondary {
      background-color: transparent;
      color: var(--primary);
      border: 2px solid var(--primary);
    }

    .btn-secondary:hover {
      background-color: rgba(37, 99, 235, 0.1);
      transform: translateY(-3px);
    }

    .btn-large {
      padding: 18px 40px;
      font-size: 1.1rem;
    }

    .btn-block {
      display: block;
      width: 100%;
    }

    .btn-nav {
      padding: 10px 24px;
      margin-left: 10px;
    }

    /* Navigation */
    .navbar {
      background-color: white;
      box-shadow: var(--shadow);
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 1000;
      transition: var(--transition);
    }

    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
    }

    .logo {
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--primary);
    }

    .nav-menu {
      display: flex;
      list-style: none;
      align-items: center;
    }

    .nav-menu li {
      margin-left: 30px;
    }

    .nav-menu a {
      font-weight: 600;
      position: relative;
    }

    .nav-menu a:hover {
      color: var(--primary);
    }

    .menu-toggle {
      display: none;
      flex-direction: column;
      cursor: pointer;
    }

    .bar {
      width: 25px;
      height: 3px;
      background-color: var(--dark);
      margin: 3px 0;
      transition: var(--transition);
    }

    /* Hero Section */
    .hero {
      background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
      padding: 150px 0 100px;
      margin-top: 80px;
    }

    .hero-content {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }

    .hero h1 {
      font-size: 3.5rem;
      margin-bottom: 20px;
      color: var(--dark);
    }

    .hero-subtitle {
      font-size: 1.3rem;
      margin-bottom: 40px;
      color: var(--gray);
    }

    .hero-buttons {
      display: flex;
      gap: 20px;
      justify-content: center;
      margin-bottom: 30px;
      flex-wrap: wrap;
    }

    .hero-trust {
      font-style: italic;
      color: var(--gray);
      font-size: 1.1rem;
    }

    /* About Section */
    .about-content {
      max-width: 800px;
      margin: 0 auto;
    }

    .features {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin-top: 30px;
    }

    .feature-item {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .feature-item i {
      color: var(--success);
      font-size: 1.2rem;
    }

    /* Services Section */
    .section-subtitle {
      text-align: center;
      font-size: 1.2rem;
      margin-bottom: 60px;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }

    .service-card {
      background: white;
      border-radius: 12px;
      padding: 30px;
      box-shadow: var(--shadow);
      transition: var(--transition);
      border: 1px solid var(--light-gray);
      cursor: pointer;
    }

    .service-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }

    .service-card.active {
      transform: scale(1.02);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }

    .service-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }

    .service-icon i {
      font-size: 1.8rem;
      color: white;
    }

    .service-tagline {
      font-weight: 600;
      color: var(--primary);
      font-style: italic;
      margin-bottom: 15px;
    }

    .service-details h4 {
      margin-top: 20px;
      color: var(--dark);
    }

    .service-details ul {
      list-style: none;
      margin: 15px 0;
    }

    .service-details ul li {
      padding: 8px 0;
      padding-left: 25px;
      position: relative;
    }

    .service-details ul li:before {
      content: "✓";
      position: absolute;
      left: 0;
      color: var(--success);
      font-weight: bold;
    }

    .service-benefit {
      background: #f0f9ff;
      padding: 15px;
      border-radius: 8px;
      border-left: 4px solid var(--primary);
      margin-top: 20px;
    }

    .benefits {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 20px;
    }

    .benefit-item {
      background: #ecfdf5;
      color: #065f46;
      padding: 8px 15px;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 600;
    }

    /* Why Choose Us */
    .why-choose {
      background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
    }

    .reasons-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
      margin-bottom: 40px;
    }

    .reason-card {
      background: white;
      padding: 30px;
      border-radius: 12px;
      text-align: center;
      box-shadow: var(--shadow);
      transition: var(--transition);
    }

    .reason-card:hover {
      transform: translateY(-5px);
    }

    .reason-card i {
      font-size: 2.5rem;
      color: var(--primary);
      margin-bottom: 20px;
    }

    .reason-card h4 {
      margin-bottom: 15px;
      font-size: 1.3rem;
    }

    .partnership-text {
      text-align: center;
      font-size: 1.3rem;
      font-style: italic;
      color: var(--primary);
      font-weight: 600;
      margin-top: 40px;
    }

    /* Process Section */
    .process-steps {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
      margin-bottom: 40px;
    }

    .step {
      text-align: center;
      padding: 30px;
      position: relative;
    }

    .step-number {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
      font-weight: bold;
      margin: 0 auto 20px;
    }

    .process-tagline {
      text-align: center;
      font-size: 1.3rem;
      font-weight: 600;
      color: var(--primary);
      margin-top: 30px;
    }

    /* CTA Section */
    .cta {
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      color: white;
      text-align: center;
    }

    .cta h2 {
      color: white;
    }

    .cta h2::after {
      background: white;
    }

    .cta-text {
      color: rgba(255, 255, 255, 0.9);
      font-size: 1.2rem;
      max-width: 800px;
      margin: 0 auto 40px;
    }

    .cta-buttons {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .cta .btn-primary {
      background: white;
      color: var(--primary);
    }

    .cta .btn-primary:hover {
      background: #f0f0f0;
    }

    .cta .btn-secondary {
      border-color: white;
      color: white;
    }

    .cta .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    /* Contact Form */
    .contact-form {
      background: var(--light);
    }

    form {
      max-width: 600px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 12px;
      box-shadow: var(--shadow);
    }

    .form-group {
      margin-bottom: 25px;
    }

    input, select, textarea {
      width: 100%;
      padding: 15px;
      border: 1px solid var(--light-gray);
      border-radius: 8px;
      font-size: 1rem;
      transition: var(--transition);
    }

    input:focus, select:focus, textarea:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }

    input.error, select.error, textarea.error {
      border-color: #ef4444;
    }

    .error-message {
      color: #ef4444;
      font-size: 0.875rem;
      margin-top: 5px;
      display: block;
    }

    /* Footer */
    .footer {
      background: var(--dark);
      color: white;
      padding: 60px 0 30px;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 40px;
      margin-bottom: 40px;
    }

    .footer h3, .footer h4 {
      color: white;
      margin-bottom: 20px;
    }

    .footer-description {
      color: #cbd5e1;
    }

    .footer-links ul, .footer-services ul {
      list-style: none;
    }

    .footer-links li, .footer-services li {
      margin-bottom: 10px;
    }

    .footer-links a, .footer-services a {
      color: #cbd5e1;
    }

    .footer-links a:hover, .footer-services a:hover {
      color: white;
    }

    .contact-info p {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 15px;
      color: #cbd5e1;
    }

    .social-links {
      display: flex;
      gap: 15px;
      margin-top: 20px;
    }

    .social-links a {
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: var(--transition);
    }

    .social-links a:hover {
      background: var(--primary);
      transform: translateY(-3px);
    }

    .footer-bottom {
      text-align: center;
      padding-top: 30px;
      border-top: 1px solid #374151;
      color: #9ca3af;
    }

    /* Animations */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate {
      animation: fadeInUp 0.6s ease forwards;
    }

    /* Responsive Design */
    @media (max-width: 992px) {
      h1 {
        font-size: 2.8rem;
      }
      
      h2 {
        font-size: 2.2rem;
      }
      
      .hero h1 {
        font-size: 2.8rem;
      }
    }

    @media (max-width: 768px) {
      .menu-toggle {
        display: flex;
      }
      
      .nav-menu {
        position: fixed;
        left: ${isMenuOpen ? '0' : '-100%'};
        top: 80px;
        flex-direction: column;
        background-color: white;
        width: 100%;
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
        padding: 20px 0;
      }
      
      .nav-menu li {
        margin: 15px 0;
      }
      
      h1 {
        font-size: 2.5rem;
      }
      
      h2 {
        font-size: 2rem;
      }
      
      .hero h1 {
        font-size: 2.5rem;
      }
      
      .hero-buttons {
        flex-direction: column;
        align-items: center;
      }
      
      .hero-buttons .btn {
        width: 100%;
        max-width: 300px;
      }
      
      .cta-buttons {
        flex-direction: column;
        align-items: center;
      }
      
      .cta-buttons .btn {
        width: 100%;
        max-width: 300px;
      }
      
      section {
        padding: 60px 0;
      }
    }

    @media (max-width: 576px) {
      .container {
        padding: 0 15px;
      }
      
      h1 {
        font-size: 2.2rem;
      }
      
      h2 {
        font-size: 1.8rem;
      }
      
      .hero h1 {
        font-size: 2.2rem;
      }
      
      .service-card {
        padding: 20px;
      }
      
      form {
        padding: 25px;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      
      {/* Navigation */}
      <nav className="navbar" ref={navbarRef}>
        <div className="container nav-container">
          <a href="#" className="logo">Luvetha Tech Solutions</a>
          <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} id="mobile-menu" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a></li>
            <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
            <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Services</a></li>
            <li><a href="#process" onClick={(e) => scrollToSection(e, 'process')}>Process</a></li>
            <li><a href="#contact" className="btn btn-nav" onClick={(e) => scrollToSection(e, 'contact')}>Free Consultation</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Technology & Digital Solutions That Power Business Growth</h1>
            <p className="hero-subtitle">Luvetha Tech Solutions Private Limited helps businesses design better experiences, build powerful applications, market smarter, and stay secure with end-to-end technology solutions.</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary" onClick={(e) => scrollToSection(e, 'contact')}>Get Free Consultation</a>
              <a href="#services" className="btn btn-secondary" onClick={(e) => scrollToSection(e, 'services')}>Explore Our Services</a>
            </div>
            <p className="hero-trust">Trusted technology partner for startups, SMEs, and growing enterprises.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>Your Growth-Focused Technology Partner</h2>
          <div className="about-content">
            <div className="about-text">
              <p>Luvetha Tech Solutions Private Limited is a full-service technology and digital solutions company delivering UI/UX design, web & mobile application development, digital marketing, hosting services, and security testing (VAPT).</p>
              <p>We combine design thinking, modern development, data-driven marketing, and strong security practices to help businesses grow faster and operate smarter.</p>
              <div className="features">
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>User-centric solutions</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Scalable technology</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Business-driven approach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>Our Core Services</h2>
          <p className="section-subtitle">Comprehensive solutions designed to support your business at every digital stage.</p>
          
          <div className="services-grid">
            {/* UI/UX Service */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-palette"></i>
              </div>
              <h3>UI / UX Design Solutions</h3>
              <p className="service-tagline">Design That Converts. Experiences That Engage.</p>
              <p>We create intuitive, visually appealing, and conversion-focused user interfaces that deliver seamless user experiences across web and mobile platforms.</p>
              <div className="service-details">
                <h4>What We Offer:</h4>
                <ul>
                  <li>User Research & Wireframing</li>
                  <li>UI Design for Web & Mobile Apps</li>
                  <li>UX Optimization & Usability Testing</li>
                  <li>Product & Dashboard Design</li>
                  <li>Brand-Aligned Visual Design</li>
                </ul>
                <p className="service-benefit"><strong>Why It Matters:</strong> Good design increases engagement, trust, and conversions.</p>
              </div>
            </div>

            {/* Development Service */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>Web & Mobile App Development</h3>
              <p className="service-tagline">Powerful Applications Built for Performance & Scale</p>
              <p>We build secure, fast, and scalable applications tailored to your business needs using modern technologies.</p>
              <div className="service-details">
                <h4>Our Development Services:</h4>
                <ul>
                  <li>Business Websites & Web Applications</li>
                  <li>Mobile App Development (Android & iOS)</li>
                  <li>Custom Software Solutions</li>
                  <li>API Integration & Backend Systems</li>
                  <li>E-commerce & Admin Panels</li>
                </ul>
                <div className="benefits">
                  <span className="benefit-item">✔ High Performance</span>
                  <span className="benefit-item">✔ Mobile-First Architecture</span>
                  <span className="benefit-item">✔ Secure & Scalable Code</span>
                </div>
              </div>
            </div>

            {/* Marketing Service */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Digital Marketing Services</h3>
              <p className="service-tagline">Turn Traffic Into Leads. Leads Into Revenue.</p>
              <p>Our digital marketing strategies are designed to increase visibility, generate quality leads, and improve ROI.</p>
              <div className="service-details">
                <h4>Marketing Solutions We Offer:</h4>
                <ul>
                  <li>Search Engine Optimization (SEO)</li>
                  <li>Google Ads & Paid Campaigns</li>
                  <li>Social Media Marketing</li>
                  <li>Lead Generation Campaigns</li>
                  <li>Conversion-Optimized Landing Pages</li>
                </ul>
                <p className="service-benefit">Results-Driven. Data-Backed. Growth-Focused.</p>
              </div>
            </div>

            {/* Hosting Service */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-server"></i>
              </div>
              <h3>Hosting Services</h3>
              <p className="service-tagline">Fast, Secure & Reliable Hosting Solutions</p>
              <p>We provide dependable hosting services that ensure your website and applications run smoothly without downtime.</p>
              <div className="service-details">
                <h4>Our Hosting Solutions Include:</h4>
                <ul>
                  <li>Website & Application Hosting</li>
                  <li>Cloud Hosting Solutions</li>
                  <li>Domain & Email Hosting</li>
                  <li>Server Management & Monitoring</li>
                  <li>Backup & Recovery Support</li>
                </ul>
                <div className="benefits">
                  <span className="benefit-item">✔ High Uptime</span>
                  <span className="benefit-item">✔ Fast Load Speeds</span>
                  <span className="benefit-item">✔ Scalable Infrastructure</span>
                </div>
              </div>
            </div>

            {/* Security Service */}
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Security & VAPT Services</h3>
              <p className="service-tagline">Protect Your Business From Digital Threats</p>
              <p>We offer Vulnerability Assessment & Penetration Testing (VAPT) to identify and fix security risks before attackers do.</p>
              <div className="service-details">
                <h4>Security Services:</h4>
                <ul>
                  <li>Web Application Security Testing</li>
                  <li>Mobile App Security Testing</li>
                  <li>Network Vulnerability Assessment</li>
                  <li>Penetration Testing</li>
                  <li>Compliance & Risk Reports</li>
                </ul>
                <p className="service-benefit">Stay Secure. Stay Compliant. Stay Trusted.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose">
        <div className="container">
          <h2>Why Choose Luvetha Tech Solutions</h2>
          <div className="reasons-grid">
            <div className="reason-card">
              <i className="fas fa-briefcase"></i>
              <h4>Business-Focused Technology Solutions</h4>
              <p>We align technology with your business goals for maximum impact.</p>
            </div>
            <div className="reason-card">
              <i className="fas fa-users"></i>
              <h4>Experienced Designers, Developers & Marketers</h4>
              <p>Our team brings years of expertise across all digital domains.</p>
            </div>
            <div className="reason-card">
              <i className="fas fa-cube"></i>
              <h4>Custom Solutions – Not Templates</h4>
              <p>Every project is tailored to your unique requirements and challenges.</p>
            </div>
            <div className="reason-card">
              <i className="fas fa-chart-bar"></i>
              <h4>Transparent Process & Reporting</h4>
              <p>Regular updates and clear communication at every stage.</p>
            </div>
            <div className="reason-card">
              <i className="fas fa-headset"></i>
              <h4>Long-Term Support & Maintenance</h4>
              <p>We provide ongoing support to ensure your success continues.</p>
            </div>
          </div>
          <p className="partnership-text">We don't just build solutions — we build partnerships.</p>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="process">
        <div className="container">
          <h2>How We Work</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Requirement Analysis</h3>
              <p>Understanding your business goals, target audience, and project requirements in detail.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Planning & Strategy</h3>
              <p>Creating a comprehensive design, development & marketing roadmap.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Execution</h3>
              <p>Building, testing & launching your solution with regular progress updates.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Optimization & Support</h3>
              <p>Continuous improvement, monitoring, and growth-focused support.</p>
            </div>
          </div>
          <p className="process-tagline">Simple. Clear. Result-Oriented.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta">
        <div className="container">
          <h2>Let's Build Something Powerful Together</h2>
          <p className="cta-text">Whether you need a stunning design, a powerful application, better online visibility, secure systems, or reliable hosting — we've got you covered.</p>
          <div className="cta-buttons">
            <a href="#contact-form" className="btn btn-primary btn-large" onClick={(e) => scrollToSection(e, 'contact-form')}>Book a Free Consultation</a>
            <a href="tel:+1234567890" className="btn btn-secondary btn-large">Talk to Our Experts Today</a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form" id="contact-form">
        <div className="container">
          <h2>Get Your Free Consultation</h2>
          <form id="consultationForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                id="name" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                id="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleInputChange}
                required 
                className={formErrors.email ? 'error' : ''}
              />
              {formErrors.email && <span className="error-message">{formErrors.email}</span>}
            </div>
            <div className="form-group">
              <input 
                type="tel" 
                id="phone" 
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className={formErrors.phone ? 'error' : ''}
              />
              {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
            </div>
            <div className="form-group">
              <select 
                id="service" 
                value={formData.service}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>Select Service Interested In</option>
                <option value="uiux">UI/UX Design</option>
                <option value="development">Web & App Development</option>
                <option value="marketing">Digital Marketing</option>
                <option value="hosting">Hosting Services</option>
                <option value="security">Security/VAPT</option>
                <option value="multiple">Multiple Services</option>
              </select>
            </div>
            <div className="form-group">
              <textarea 
                id="message" 
                placeholder="Tell us about your project..." 
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Submit Request</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Luvetha Tech Solutions</h3>
              <p className="footer-description">Luvetha Tech Solutions Private Limited is a technology and digital solutions company providing UI/UX design, web and mobile application development, digital marketing services, hosting solutions, and security services (VAPT) for businesses across India.</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a></li>
                <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About Us</a></li>
                <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Services</a></li>
                <li><a href="#process" onClick={(e) => scrollToSection(e, 'process')}>Our Process</a></li>
                <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
              </ul>
            </div>
            <div className="footer-services">
              <h4>Our Services</h4>
              <ul>
                <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>UI/UX Design</a></li>
                <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Web Development</a></li>
                <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Mobile Apps</a></li>
                <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Digital Marketing</a></li>
                <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Hosting & Security</a></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4>Contact Us</h4>
              <div className="contact-info">
                <p><i className="fas fa-envelope"></i> info@luvethatech.com</p>
                <p><i className="fas fa-phone"></i> +91 12345 67890</p>
                <div className="social-links">
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-facebook"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Luvetha Tech Solutions Private Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LuvethaTechSolutions;