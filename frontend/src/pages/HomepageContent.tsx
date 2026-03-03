import React, { useState, useEffect, useRef } from 'react';
import './HomePageContent.css';
import { useNavigate } from 'react-router-dom';
import {
  Briefcase,
  FolderCheck,
  Users,
  Headphones,
  ArrowUpRight,
  Search,
  Target,
  Zap,
  CheckCircle,
  Rocket,
  ChevronRight,
  Lightbulb,
  Calendar,
  Code,
  Shield,
  TrendingUp,
  GitBranch,
  Users as UsersIcon,
  BarChart3,
  Clock,
  MessageSquare,
  Award,
  Star,
  Heart,
  PenTool,
  Trophy,
  Globe,
  Coffee,
  Smile
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

// ================= COUNTER COMPONENT =================
const Counter = ({
  end,
  suffix,
  start,
}: {
  end: number;
  suffix: string;
  start: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const increment = end / 60;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [start, end]);

  return (
    <span className="stat-value-horizontal">
      {count}
      {suffix}
    </span>
  );
};

// ================= HORIZONTAL STAT CARD COMPONENT =================
const HorizontalStatCard = ({
  icon,
  value,
  suffix,
  label,
  start,
}: {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  start: boolean;
}) => {
  return (
    <div className="stat-card-horizontal">
      <div className="stat-icon-horizontal">
        {icon}
      </div>
      <Counter end={value} suffix={suffix} start={start} />
      <p className="stat-label-horizontal">{label}</p>
    </div>
  );
};

// ================= COMPLETE PROCESS SECTION =================
const ProcessSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const navigate = useNavigate();
  
  // Process Steps Data
  const processSteps = [
    {
      id: 1,
      title: "Discovery",
      description: "Understanding your vision, goals, and requirements through in-depth consultation.",
      icon: <Search size={24} />,
      color: "#3B82F6",
      duration: "1-2 weeks",
      deliverables: ["Project Scope", "Tech Stack", "Timeline"],
    },
    {
      id: 2,
      title: "Strategy",
      description: "Creating a comprehensive roadmap with clear milestones and success metrics.",
      icon: <Target size={24} />,
      color: "#8B5CF6",
      duration: "2-3 weeks",
      deliverables: ["Wireframes", "Architecture", "Budget"],
    },
    {
      id: 3,
      title: "Design",
      description: "Crafting beautiful, intuitive interfaces that delight your users.",
      icon: <PenTool size={24} />,
      color: "#EC4899",
      duration: "3-4 weeks",
      deliverables: ["UI Design", "Prototype", "Style Guide"],
    },
    {
      id: 4,
      title: "Development",
      description: "Building your product using agile methodology with regular updates.",
      icon: <Zap size={24} />,
      color: "#F59E0B",
      duration: "8-12 weeks",
      deliverables: ["Code", "Documentation", "Tests"],
    },
    {
      id: 5,
      title: "Launch",
      description: "Deploying your product and ensuring smooth transition to live environment.",
      icon: <Rocket size={24} />,
      color: "#10B981",
      duration: "1-2 weeks",
      deliverables: ["Deployment", "Training", "Handover"],
    },
    {
      id: 6,
      title: "Support",
      description: "Ongoing maintenance, updates, and optimization for peak performance.",
      icon: <Heart size={24} />,
      color: "#EF4444",
      duration: "Ongoing",
      deliverables: ["Monitoring", "Updates", "Support"],
    }
  ];

  // Testimonials Data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      // role: "CEO, TechStart",
      content: "The team transformed our vision into reality. Their process was transparent and they delivered beyond our expectations.",
      rating: 5,
      image: "SJ",
      color: "#3B82F6",
      project: "E-commerce Platform"
    },
    {
      id: 2,
      name: "Michael Chen",
      // role: "Founder, GrowthLabs",
      content: "Exceptional work ethic and technical expertise. They didn't just build a product; they became our technology partners.",
      rating: 5,
      image: "MC",
      color: "#8B5CF6",
      project: "Mobile App"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      // role: "Product Manager, InnovateCo",
      content: "Their agile approach kept us involved throughout. The weekly demos and clear communication made all the difference.",
      rating: 5,
      image: "ER",
      color: "#EC4899",
      project: "SaaS Platform"
    },
    {
      id: 4,
      name: "David Kim",
      // role: "CTO, FutureTech",
      content: "Outstanding technical architecture and clean code. Our system handles millions of users seamlessly.",
      rating: 5,
      image: "DK",
      color: "#F59E0B",
      project: "Cloud Infrastructure"
    }
  ];

  // Team Members
  const teamMembers = [
    {
      name: "Alex Morgan",
      role: "Project Lead",
      experience: "10+ years",
      expertise: ["Agile", "Scrum", "Management"],
      color: "#3B82F6"
    },
    {
      name: "Jessica Lee",
      role: "Senior Developer",
      experience: "8+ years",
      expertise: ["React", "Node.js", "Python"],
      color: "#8B5CF6"
    },
    {
      name: "Marcus Webb",
      role: "UX Designer",
      experience: "7+ years",
      expertise: ["UI/UX", "Research", "Prototyping"],
      color: "#EC4899"
    },
    {
      name: "Priya Patel",
      role: "QA Lead",
      experience: "6+ years",
      expertise: ["Testing", "Automation", "Security"],
      color: "#F59E0B"
    }
  ];

  // FAQ Data
  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Projects typically range from 3-6 months depending on complexity. Simple websites may take 4-8 weeks, while complex web applications can take 6-12 months. We'll provide a detailed timeline during the discovery phase after understanding your specific requirements."
    },
    {
      question: "What is your development process?",
      answer: "We follow agile methodology with 2-week sprints, daily standups, and weekly client demos. This approach ensures transparency, allows for feedback integration, and keeps the project on track. You'll see progress every week and have full visibility into what's being built."
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Yes, we offer ongoing maintenance and support packages tailored to your needs. This includes bug fixes, security updates, performance monitoring, content updates, and feature enhancements. We have flexible plans ranging from basic maintenance to full-service support."
    },
    {
      question: "How much does a project cost?",
      answer: "Project costs vary based on scope, complexity, and requirements. We provide transparent pricing with detailed quotes after our discovery phase. Our pricing models include fixed-price for well-defined projects and time & material for ongoing or evolving projects. Contact us for a free estimate tailored to your needs."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in modern technologies including React, Angular, Vue.js for frontend; Node.js, Python, .NET, PHP for backend; React Native, Flutter for mobile; and various CMS platforms like WordPress, Shopify, and Magento. We choose the best technology stack based on your specific project requirements."
    },
    {
      question: "Do you work with startups?",
      answer: "Absolutely! We love working with startups and have special engagement models designed for early-stage companies. We offer MVP development, flexible payment terms, and scalable solutions that grow with your business. Many of our enterprise clients started as startups with us."
    },
    {
      question: "How do you ensure project quality?",
      answer: "Quality is built into every step of our process. We have dedicated QA engineers who write test cases, perform manual and automated testing, conduct code reviews, and ensure security best practices. We also use CI/CD pipelines to catch issues early and maintain high quality standards."
    },
    {
      question: "Can you help with digital marketing after launch?",
      answer: "Yes, our digital marketing team can create comprehensive strategies to promote your product. This includes SEO, content marketing, social media management, PPC campaigns, email marketing, and conversion rate optimization. We help you attract users and grow your audience."
    }
  ];

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

  // Button handlers
  const handleStartProject = () => {
    navigate('/contact');
  };

  const handleWatchVideo = () => {
    window.open('https://www.youtube.com/watch?v=demo', '_blank');
  };

  const handleLearnMore = (articleId: number) => {
    navigate(`/blog/${articleId}`);
  };

  return (
    <section style={{
      background: '#FFFFFF',
      padding: '40px 20px',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
      }}>
        {/* ===== SECTION 1: HERO WITH STATS ===== */}
        <div style={{
          marginBottom: '60px',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center',
          }}>
            <div>
              <div style={{
                background: '#EFF6FF',
                display: 'inline-block',
                padding: '6px 16px',
                borderRadius: '30px',
                marginBottom: '20px',
              }}>
                <span style={{ color: '#3B82F6', fontSize: '14px', fontWeight: 600 }}>✦ OUR PROCESS</span>
              </div>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: 700,
                color: '#0F172A',
                lineHeight: 1.2,
                marginBottom: '20px',
              }}>
                We turn ideas into{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  successful products
                </span>
              </h1>
              <p style={{
                fontSize: '1.1rem',
                color: '#475569',
                lineHeight: 1.7,
                marginBottom: '30px',
              }}>
                From concept to launch and beyond, we guide you through every step with complete transparency.
              </p>
              <div style={{
                display: 'flex',
                gap: '16px',
              }}>
                <button 
                  onClick={handleStartProject}
                  style={{
                    background: '#0F172A',
                    color: 'white',
                    border: 'none',
                    padding: '14px 32px',
                    borderRadius: '40px',
                    fontSize: '1rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#1E293B';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#0F172A';
                  }}
                >
                  Start a project
                </button>
                <button 
                  onClick={handleWatchVideo}
                  style={{
                    background: 'transparent',
                    color: '#0F172A',
                    border: '1px solid #E2E8F0',
                    padding: '14px 32px',
                    borderRadius: '40px',
                    fontSize: '1rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#F8FAFC';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  Watch video →
                </button>
              </div>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px',
            }}>
              {[
                { value: "150+", label: "Projects Completed", icon: <CheckCircle size={24} /> },
                { value: "50+", label: "Happy Clients", icon: <Users size={24} /> },
                { value: "98%", label: "Success Rate", icon: <TrendingUp size={24} /> },
                { value: "24/7", label: "Support Available", icon: <Clock size={24} /> },
              ].map((stat, idx) => (
                <div key={idx} style={{
                  background: '#F8FAFC',
                  borderRadius: '20px',
                  padding: '24px',
                  border: '1px solid #E2E8F0',
                }}>
                  <div style={{ color: '#3B82F6', marginBottom: '12px' }}>{stat.icon}</div>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#0F172A' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.9rem', color: '#64748B' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== SECTION 2: PROCESS STEPS ===== */}
        <div style={{
          marginBottom: '60px',
          background: '#F8FAFC',
          borderRadius: '30px',
          padding: '50px',
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '40px',
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 600,
              color: '#0F172A',
              marginBottom: '12px',
            }}>Our 6-step process</h2>
            <p style={{
              fontSize: '1rem',
              color: '#64748B',
              maxWidth: '600px',
              margin: '0 auto',
            }}>A proven methodology that delivers results, every time.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}>
            {processSteps.map((step) => (
              <div key={step.id} style={{
                background: 'white',
                borderRadius: '20px',
                padding: '24px',
                border: '1px solid #E2E8F0',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: step.color,
                  color: 'white',
                  width: '28px',
                  height: '28px',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: 600,
                }}>{step.id}</div>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: `${step.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                  color: step.color,
                }}>{step.icon}</div>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: '#0F172A',
                  marginBottom: '8px',
                }}>{step.title}</h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#64748B',
                  marginBottom: '16px',
                  lineHeight: 1.5,
                }}>{step.description}</p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '12px',
                }}>
                  <Clock size={14} color="#94A3B8" />
                  <span style={{ fontSize: '0.85rem', color: '#64748B' }}>{step.duration}</span>
                </div>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                }}>
                  {step.deliverables.map((item, idx) => (
                    <span key={idx} style={{
                      background: '#F1F5F9',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      color: '#334155',
                    }}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== SECTION 3: TEAM ===== */}
        <div style={{
          marginBottom: '60px',
          padding: '30px 0',
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '40px',
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 600,
              color: '#0F172A',
              marginBottom: '12px',
            }}>Meet your team</h2>
            <p style={{
              fontSize: '1rem',
              color: '#64748B',
            }}>Experienced professionals dedicated to your success.</p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
          }}>
            {teamMembers.map((member, idx) => (
              <div key={idx} style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '24px',
                border: '1px solid #E2E8F0',
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '30px',
                  background: member.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: 'white',
                  marginBottom: '16px',
                }}>{member.name.charAt(0)}</div>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: '#0F172A',
                  marginBottom: '4px',
                }}>{member.name}</h3>
                <div style={{
                  color: member.color,
                  fontSize: '0.9rem',
                  marginBottom: '12px',
                }}>{member.role}</div>
                <div style={{
                  fontSize: '0.85rem',
                  color: '#64748B',
                  marginBottom: '12px',
                }}>{member.experience}</div>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                }}>
                  {member.expertise.map((skill, i) => (
                    <span key={i} style={{
                      background: '#F1F5F9',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      color: '#334155',
                    }}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== SECTION 4: TESTIMONIALS ===== */}
        <div style={{
          marginBottom: '60px',
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '40px',
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 600,
              color: '#0F172A',
              marginBottom: '12px',
            }}>Client success stories</h2>
            <p style={{
              fontSize: '1rem',
              color: '#64748B',
            }}>What our clients say about working with us.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px',
          }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} style={{
                background: 'white',
                borderRadius: '20px',
                padding: '30px',
                border: '1px solid #E2E8F0',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  fontSize: '3rem',
                  color: '#E2E8F0',
                  fontFamily: 'serif',
                }}>"</div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '20px',
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '25px',
                    background: testimonial.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: 'white',
                  }}>{testimonial.image}</div>
                  <div>
                    <div style={{
                      fontWeight: 600,
                      color: '#0F172A',
                    }}>{testimonial.name}</div>
                    <div style={{
                      fontSize: '0.85rem',
                      color: '#64748B',
                    }}></div>
                  </div>
                </div>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#334155',
                  lineHeight: 1.6,
                  marginBottom: '16px',
                  fontStyle: 'italic',
                }}>{testimonial.content}</p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} style={{ color: '#FBBF24', fontSize: '1rem' }}>★</span>
                  ))}
                  <span style={{
                    fontSize: '0.85rem',
                    color: '#64748B',
                    marginLeft: '8px',
                  }}>{testimonial.project}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* ===== SECTION 5: BLOG/PREVIEW ===== */}
<div style={{ marginBottom: "60px" }}>
  <h2
    style={{
      fontSize: "2rem",
      fontWeight: 600,
      color: "#0F172A",
      marginBottom: "30px",
      textAlign: "center",
    }}
  >
    Latest Insights
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "24px",
    }}
  >
    {[
      {
        title: "How to choose the right tech stack",
        desc: "Learn about the factors that influence technology decisions...",
        image:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
         
      },
      {
        title: "Modern Web Development Trends",
        desc: "Discover the latest tools and frameworks shaping the web...",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      },
      {
        title: "Cloud Computing for Startups",
        desc: "How cloud infrastructure helps startups scale efficiently...",
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      },
    ].map((blog, index) => (
      <div
        key={index}
        style={{
          background: "white",
          borderRadius: "20px",
          border: "1px solid #E2E8F0",
          overflow: "hidden",   
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow =
            "0 10px 25px rgba(0,0,0,0.08)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
       
        <img
          src={blog.image}
          alt={blog.title}
          style={{
            width: "100%",      
            height: "200px",    
            objectFit: "cover", 
            display: "block",
          }}
        />

        <div style={{ padding: "20px" }}>
          <div
            style={{
              fontSize: "0.85rem",
              color: "#3B82F6",
              marginBottom: "8px",
            }}
          >
            Article • 5 min read
          </div>

          <h3
            style={{
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "#0F172A",
              marginBottom: "8px",
            }}
          >
            {blog.title}
          </h3>

          <p
            style={{
              fontSize: "0.9rem",
              color: "#64748B",
              marginBottom: "16px",
            }}
          >
            {blog.desc}
          </p>

          <span
            style={{
              color: "#3B82F6",
              fontSize: "0.9rem",
              fontWeight: 500,
            }}
          >
            Read more →
          </span>
        </div>
      </div>
    ))}
  </div>
</div>

        {/* ===== SECTION 6: FAQ ===== */}
        <div style={{
          marginBottom: '60px',
          background: '#F8FAFC',
          borderRadius: '30px',
          padding: '50px',
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 600,
            color: '#0F172A',
            marginBottom: '30px',
            textAlign: 'center',
          }}>Frequently asked questions</h2>

          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} style={{
                  background: 'white',
                  borderRadius: '16px',
                  marginBottom: '12px',
                  border: '1px solid #E2E8F0',
                  overflow: 'hidden',
                }}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      padding: '20px 24px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                    }}
                  >
                    <span style={{
                      fontWeight: 600,
                      color: '#0F172A',
                      fontSize: '1rem',
                    }}>
                      {faq.question}
                    </span>
                    <ChevronRight
                      size={18}
                      color="#64748B"
                      style={{
                        transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                        flexShrink: 0,
                      }}
                    />
                  </button>
                  {isOpen && (
                    <div style={{
                      color: '#64748B',
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                      padding: '0 24px 20px',
                    }}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ===== SECTION 7: PARTNERS ===== */}
        <div style={{
          marginBottom: '60px',
          textAlign: 'center',
        }}>
          <h2 style={{
            color: '#0F172A',
            fontSize: '2.2rem',
            fontWeight: 700,
            marginBottom: '50px',
          }}>Trusted by industry leaders</h2>
          
          <div className="partners-marquee">
            <div className="partners-marquee-track">
              {[...partnerLogos, ...partnerLogos].map((partner, idx) => (
                <div key={`${partner.name}-${idx}`} className="partner-logo-card">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="partner-logo-image"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/220x120?text=' + partner.name;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// ================= MAIN HOMEPAGE CONTENT =================
const HomePageContent: React.FC = () => {
  const navigate = useNavigate();
  
  // Auto-changing text states
  const services = ['E-Commerce Development', 'Digital Marketing', 'Web Design', 'UI/UX', 'Data Services', 'App Development', 'Security'];
  const [currentService, setCurrentService] = useState(0);
  
  // Auto-changing background images - using imported images
  const heroImages = [Banner1, Banner2, Banner3, Banner4];
  const [currentImage, setCurrentImage] = useState(0);
  
  // Stats animation state
  const [startCount, setStartCount] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Auto-change text every 3 seconds
  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(textInterval);
  }, []);

  // Auto-change background every 5 seconds
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(imageInterval);
  }, []);

  // Intersection Observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCount(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const handleServiceClick = (serviceName: string, path: string) => {
    navigate(path);
  };

  return (
    <div className="App">
      {/* HERO SECTION */}
      <section 
        id="home"
        className="hero-section" 
        style={{
          backgroundImage: `url(${heroImages[currentImage]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Technology & Digital Solutions That Power Business Growth
            </h1>
            <h2 className="hero-services-text">
              We Professional in{" "}
              <span className="changing-text">{services[currentService]}</span>
              {" "}Services
            </h2>
            <p className="hero-subtitle">
              Luvetha Tech Solutions Private Limited helps businesses design better experiences, 
              build powerful applications, market smarter, and stay secure with end-to-end technology solutions.
            </p>
            
            <div className="hero-buttons">
              <a href="/contact#contact-form" className="hero-btn primary">Get Free Consultation</a>
              <a href="/services" className="hero-btn secondary">Explore Our Services</a>
            </div>
            <p className="hero-trust">
              Trusted technology partner for startups, SMEs, and growing enterprises.
            </p>
          </div>
          
          <div className="hero-image-preview">
            <div className="image-tracker">
              {heroImages.map((_, index) => (
                <div 
                  key={index} 
                  className={`tracker-dot ${index === currentImage ? 'active' : ''}`}
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REST OF THE CONTENT */}
      <div className="content-wrapper">
        {/* 🔹 INTRO / COMPANY OVERVIEW */}
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
                  <p>
                    Luvetha Tech Solutions Private Limited is a full-service technology and 
                    digital solutions company delivering <strong>UI/UX design, web & mobile 
                    application development, digital marketing, hosting services, and 
                    security testing (VAPT)</strong>.
                  </p>
                  <p>
                    We combine <strong>design thinking, modern development, data-driven 
                    marketing, and strong security practices</strong> to help businesses 
                    grow faster and operate smarter.
                  </p>
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

        {/* 🔹 SERVICES SECTION */}
        <section id="services" className="services-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Our Core Services</h2>
              <div className="title-underline"></div>
              <p className="section-subtitle">Comprehensive solutions designed to support your business at every digital stage.</p>
            </div>

            <div className="services-grid">
              {/* 1. WEB DESIGN */}
              <div className="service-card">
                <div className="service-header">
                  <div className="service-icon">🎨</div>
                  <h3>Web Design</h3>
                  <p className="service-subtitle">Beautiful, responsive websites that captivate your audience</p>
                </div>
                <p>Create stunning, user-friendly websites that reflect your brand and drive engagement.</p>
                
                <div className="service-content">
                  <h4>What We Offer:</h4>
                  <ul className="offerings-list">
                    <li>Custom Website Design</li>
                    <li>Responsive & Mobile-First Design</li>
                    <li>UI/UX Optimization</li>
                    <li>Landing Page Design</li>
                    <li>Website Redesign</li>
                  </ul>
                </div>
                <a href="/webdevelopment" className="get-started-link" onClick={(e) => { e.preventDefault(); handleServiceClick('Web Design', '/webdevelopment'); }}>Get started today →</a>
              </div>

              {/* 2. DIGITAL MARKETING */}
              <div className="service-card">
                <div className="service-header">
                  <div className="service-icon">📈</div>
                  <h3>Digital Marketing</h3>
                  <p className="service-subtitle">Turn Traffic Into Leads. Leads Into Revenue.</p>
                </div>
                <p>Increase visibility, generate quality leads, and improve ROI.</p>
                
                <div className="service-content">
                  <h4>Marketing Solutions:</h4>
                  <ul className="offerings-list">
                    <li>Search Engine Optimization (SEO)</li>
                    <li>Google Ads & Paid Campaigns</li>
                    <li>Social Media Marketing</li>
                    <li>Lead Generation Campaigns</li>
                    <li>Conversion Landing Pages</li>
                  </ul>
                </div>
                <a href="/digitalmarketing" className="get-started-link" onClick={(e) => { e.preventDefault(); handleServiceClick('Digital Marketing', '/digitalmarketing'); }}>Get started today →</a>
              </div>

              {/* 3. DATA SERVICES */}
              <div className="service-card">
                <div className="service-header">
                  <div className="service-icon">📊</div>
                  <h3>Data Services</h3>
                  <p className="service-subtitle">Transform data into actionable insights</p>
                </div>
                <p>Leverage your data to make informed business decisions.</p>
                
                <div className="service-content">
                  <h4>What We Offer:</h4>
                  <ul className="offerings-list">
                    <li>Data Analytics & Visualization</li>
                    <li>Business Intelligence</li>
                    <li>Data Warehousing</li>
                    <li>ETL Services</li>
                    <li>Big Data Solutions</li>
                  </ul>
                </div>
                <a href="/dataservices" className="get-started-link" onClick={(e) => { e.preventDefault(); handleServiceClick('Data Services', '/dataservices'); }}>Get started today →</a>
              </div>

              {/* 4. CUSTOM DEVELOPMENT */}
              <div className="service-card">
                <div className="service-header">
                  <div className="service-icon">⚙️</div>
                  <h3>Custom Development</h3>
                  <p className="service-subtitle">Tailored software solutions for your unique needs</p>
                </div>
                <p>Build custom applications designed specifically for your business requirements.</p>
                
                <div className="service-content">
                  <h4>Our Services:</h4>
                  <ul className="offerings-list">
                    <li>Custom Software Development</li>
                    <li>Enterprise Applications</li>
                    <li>API Development & Integration</li>
                    <li>Legacy System Modernization</li>
                    <li>Cloud-Based Solutions</li>
                  </ul>
                </div>
                <a href="/customdevelopment" className="get-started-link" onClick={(e) => { e.preventDefault(); handleServiceClick('Custom Development', '/customdevelopment'); }}>Get started today →</a>
              </div>

              {/* 5. IT CONSULTING */}
              <div className="service-card">
                <div className="service-header">
                  <div className="service-icon">🔄</div>
                  <h3>IT Consulting</h3>
                  <p className="service-subtitle">Strategic Technology Advisory</p>
                </div>
                <p>Make informed technology decisions and optimize IT infrastructure.</p>
                
                <div className="service-content">
                  <h4>Consulting Services:</h4>
                  <ul className="offerings-list">
                    <li>Technology Strategy</li>
                    <li>IT Infrastructure Planning</li>
                    <li>Digital Transformation</li>
                    <li>Cloud Migration</li>
                    <li>IT Budget Optimization</li>
                  </ul>
                </div>
                <a href="/itconsulting" className="get-started-link" onClick={(e) => { e.preventDefault(); handleServiceClick('IT Consulting', '/itconsulting'); }}>Get started today →</a>
              </div>

              {/* 6. DATA ANALYTICS */}
              <div className="service-card">
                <div className="service-header">
                  <div className="service-icon">📉</div>
                  <h3>Data Analytics</h3>
                  <p className="service-subtitle">Uncover patterns, predict trends, drive growth</p>
                </div>
                <p>Turn raw data into valuable insights for better decision making.</p>
                
                <div className="service-content">
                  <h4>Analytics Services:</h4>
                  <ul className="offerings-list">
                    <li>Predictive Analytics</li>
                    <li>Business Intelligence Dashboards</li>
                    <li>Customer Analytics</li>
                    <li>Real-Time Analytics</li>
                    <li>Data Mining</li>
                  </ul>
                </div>
                <a href="/dataanalytics" className="get-started-link" onClick={(e) => { e.preventDefault(); handleServiceClick('Data Analytics', '/dataanalytics'); }}>Get started today →</a>
              </div>

              {/* 7. MOBILE APPS */}
              <div className="service-card">
                <div className="service-header">
                  <div className="service-icon">📱</div>
                  <h3>Mobile Apps</h3>
                  <p className="service-subtitle">Native & cross-platform mobile solutions</p>
                </div>
                <p>Reach your customers on the go with powerful mobile applications.</p>
                
                <div className="service-content">
                  <h4>Mobile Services:</h4>
                  <ul className="offerings-list">
                    <li>iOS App Development</li>
                    <li>Android App Development</li>
                    <li>Cross-Platform Apps (React Native, Flutter)</li>
                    <li>App UI/UX Design</li>
                    <li>App Store Optimization</li>
                  </ul>
                </div>
                <a href="/mobileapps" className="get-started-link" onClick={(e) => { e.preventDefault(); handleServiceClick('Mobile Apps', '/mobileapps'); }}>Get started today →</a>
              </div>

              {/* 8. RETAIL SERVICES */}
              <div className="service-card">
                <div className="service-header">
                  <div className="service-icon">🏪</div>
                  <h3>Retail Services</h3>
                  <p className="service-subtitle">Digital solutions for modern retail businesses</p>
                </div>
                <p>Transform your retail business with innovative technology solutions.</p>
                
                <div className="service-content">
                  <h4>Retail Solutions:</h4>
                  <ul className="offerings-list">
                    <li>E-Commerce Development</li>
                    <li>POS System Integration</li>
                    <li>Inventory Management</li>
                    <li>Customer Loyalty Programs</li>
                    <li>Omnichannel Solutions</li>
                  </ul>
                </div>
                <a href="/retailservices" className="get-started-link" onClick={(e) => { e.preventDefault(); handleServiceClick('Retail Services', '/retailservices'); }}>Get started today →</a>
              </div>

              {/* 9. DATABASE MAINTENANCE */}
              <div className="service-card">
                <div className="service-header">
                  <div className="service-icon">🗄️</div>
                  <h3>Database Maintenance</h3>
                  <p className="service-subtitle">Keep your data secure, optimized, and available</p>
                </div>
                <p>Ensure your databases run smoothly with professional maintenance.</p>
                
                <div className="service-content">
                  <h4>Database Services:</h4>
                  <ul className="offerings-list">
                    <li>Database Optimization</li>
                    <li>Backup & Recovery</li>
                    <li>Performance Tuning</li>
                    <li>Security & Encryption</li>
                    <li>Migration & Upgrades</li>
                  </ul>
                </div>
                <a href="/databasemaintenance" className="get-started-link" onClick={(e) => { e.preventDefault(); handleServiceClick('Database Maintenance', '/databasemaintenance'); }}>Get started today →</a>
              </div>
            </div>
          </div>
        </section>

       
        {/* <div className="stats-wrapper-horizontal" ref={statsRef}>
          <div className="stats-container-horizontal">
            <div className="stats-grid-horizontal">
            
              <HorizontalStatCard
                icon={<Trophy size={32} />}
                value={12}
                suffix="+"
                label="Years of Excellence"
                start={startCount}
              />

             
              <HorizontalStatCard
                icon={<Globe size={32} />}
                value={500}
                suffix="+"
                label="Projects Delivered"
                start={startCount}
              />

              
              <HorizontalStatCard
                icon={<Smile size={32} />}
                value={300}
                suffix="+"
                label="Happy Clients"
                start={startCount}
              />

            
              <HorizontalStatCard
                icon={<Coffee size={32} />}
                value={50}
                suffix="+"
                label="Team Experts"
                start={startCount}
              />
            </div>
          </div>
        </div> */}

        {/* 🔹 TECHNOLOGIES & PLATFORMS */}
        <section className="tech-section">
          <div className="tech-container">
            {/* LEFT IMAGE */}
            <div className="tech-image-box">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Business Growth Technology"
                className="tech-image"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="tech-content">
              <h2 className="tech-title">
                Technologies & <span>Platform</span>
              </h2>

              <p className="tech-desc">
                With our profound understanding of the latest digital platforms and
                technologies, we assist businesses in accelerating growth and
                gaining a competitive edge.
              </p>

              <ul className="tech-list">
                <li>
                  <span className="check-icon">✔</span>
                  <div>
                    <strong>Backend</strong>
                    <p>.NET | PHP | Java | Node | Python</p>
                  </div>
                </li>

                <li>
                  <span className="check-icon">✔</span>
                  <div>
                    <strong>Frontend</strong>
                    <p>Angular | VueJS | React</p>
                  </div>
                </li>

                <li>
                  <span className="check-icon">✔</span>
                  <div>
                    <strong>Mobile</strong>
                    <p>iOS | Android | Kotlin | Flutter | React Native</p>
                  </div>
                </li>

                <li>
                  <span className="check-icon">✔</span>
                  <div>
                    <strong>CMS</strong>
                    <p>WordPress | Shopify | Drupal</p>
                  </div>
                </li>

                <li>
                  <span className="check-icon">✔</span>
                  <div>
                    <strong>eCommerce</strong>
                    <p>Magento | WooCommerce | OpenCart | Shopify</p>
                  </div>
                </li>
              </ul>

              <button
                className="tech-btn"
                onClick={() => navigate("/contact#contact-form")}
              >
                Get Started Today
              </button>
            </div>
          </div>
        </section>

        {/* 🔹 ENHANCED PROCESS SECTION */}
        <ProcessSection />

      </div>
    </div>
  );
};

export default HomePageContent;