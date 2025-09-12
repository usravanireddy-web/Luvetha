// src/pages/Services.tsx
import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Monitor,
  Megaphone,
  Database,
  Code,
  Zap,
  LineChart,
  Smartphone,
  ShoppingCart,
  Server,
  ArrowRight,
  CheckCircle,
  MessageSquare,
  ClipboardCheck,
  Rocket,
  LifeBuoy,
} from "lucide-react"; // Added new icons
import heroImage from "@/assets/hero-tech.jpg";

const Services = () => {
  // Grouped rows of services (3 per row)
  const servicesRows = [
    [
      {
        icon: <Monitor className="h-16 w-16 text-primary" />,
        title: "Web Development",
        description:
          "Responsive, accessible and high-performance websites & web apps tailored to your business.",
        features: [
          "Responsive UI / UX",
          "Frontend & Backend (React / Node)",
          "E-commerce & CMS",
          "SEO best practices",
          "Performance optimization",
        ],
      },
      {
        icon: <Megaphone className="h-16 w-16 text-primary" />,
        title: "Digital Marketing",
        description:
          "Performance-driven marketing: SEO, paid ads, social campaigns and content that converts.",
        features: [
          "SEO & GEO",
          "Google Ads",
          "Social Media Marketing ",
          "E-Mail Marketing",
          "Google My Business",
        ],
      },
      {
        icon: <Database className="h-16 w-16 text-primary" />,
        title: "Data Services",
        description:
          "Reliable data pipelines, ETL, storage and delivery to power analytics and BI solutions.",
        features: [
          "Data Ingestion & ETL",
          "Data Warehousing",
          "Data Modeling",
          "Data Governance",
          "API / Data Delivery",
        ],
      },
    ],

    [
      {
        icon: <Code className="h-16 w-16 text-primary" />,
        title: "Custom Development",
        description:
          "Custom software built for your unique workflows and integrations using modern engineering practices.",
        features: [
          "Custom Web & Mobile Apps",
          "API & Microservices",
          "System Integration",
          "Agile Delivery",
          "CI / CD & Testing",
        ],
      },
      {
        icon: <Zap className="h-16 w-16 text-primary" />,
        title: "IT Consulting",
        description:
          "Strategic technology consulting to align IT with business goals and reduce technical risk.",
        features: [
          "Technology Roadmaps",
          "Solution Architecture",
          "Vendor Selection",
          "Process Optimization",
          "Cloud Strategy",
        ],
      },
      {
        icon: <LineChart className="h-16 w-16 text-primary" />,
        title: "Data Analytics",
        description:
          "BI, dashboards and ML-powered analytics that turn raw data into actionable decisions.",
        features: [
          "Dashboards & Reporting",
          "Predictive Modelling",
          "KPI Design",
          "Data Visualization",
          "Model Deployment",
        ],
      },
    ],

    [
      {
        icon: <Smartphone className="h-16 w-16 text-primary" />,
        title: "Mobile Apps",
        description:
          "Native and cross-platform mobile apps with delightful UX and reliable performance.",
        features: [
          "iOS & Android Development",
          "Cross-platform (React Native / Flutter)",
          "App Store Deployment",
          "Push & Notification Integrations",
          "Ongoing App Maintenance",
        ],
      },
      {
        icon: <ShoppingCart className="h-16 w-16 text-primary" />,
        title: "Retail Services",
        description:
          "Retail-focused IT solutions: POS, e-commerce, inventory and customer engagement technology.",
        features: [
          "POS / Payment Integration",
          "Inventory & Catalog Systems",
          "Loyalty & CRM Integration",
          "Omnichannel Experience",
          "Retail Analytics",
        ],
      },
      {
        icon: <Server className="h-16 w-16 text-primary" />,
        title: "Data Base Maintenance",
        description:
          "Database administration and maintenance to keep your systems fast, secure and available.",
        features: [
          "Performance Tuning",
          "Backups & Disaster Recovery",
          "Security & Patching",
          "Monitoring & Alerts",
          "Cloud DB Management",
        ],
      },
    ],
  ];

  // Our Process Steps
  const processSteps = [
    {
      icon: <MessageSquare className="h-14 w-14 text-primary" />,
      title: "Consultation",
      description: "We start by understanding your goals, needs, and challenges.",
    },
    {
      icon: <ClipboardCheck className="h-14 w-14 text-primary" />,
      title: "Planning",
      description: "Creating a detailed roadmap tailored to your project requirements.",
    },
    {
      icon: <Rocket className="h-14 w-14 text-primary" />,
      title: "Implementation",
      description: "Agile execution with regular feedback and quality assurance.",
    },
    {
      icon: <LifeBuoy className="h-14 w-14 text-primary" />,
      title: "Support",
      description: "Ongoing maintenance, updates, and support to ensure success.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>

        <div className="relative z-10 text-center text-primary-foreground px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Comprehensive IT
            <br />
            <span className="text-primary-glow">Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            From Web Development to Data Services and Digital Marketing — we
            build and scale technology that drives outcomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/services">
                Explore Services <ArrowRight className="ml-2" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link to="/contact">Get Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Services organized by capability — select any card to learn more or
              request a quote.
            </p>
          </div>

          <div className="space-y-12">
            {servicesRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {row.map((service, colIndex) => (
                  <Card
                    key={colIndex}
                    className="group hover:shadow-professional transition-all duration-300 hover:scale-105 animate-scale-in bg-gradient-card border-0"
                    style={{
                      animationDelay: `${(rowIndex * 3 + colIndex) * 0.06}s`,
                    }}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-accent rounded-lg group-hover:bg-primary/10 transition-colors">
                          {service.icon}
                        </div>
                        <CardTitle className="text-2xl mb-2">
                          {service.title}
                        </CardTitle>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <CardDescription className="text-base mb-6">
                        {service.description}
                      </CardDescription>

                      <div className="space-y-2 mb-6">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm">{feat}</span>
                          </div>
                        ))}
                      </div>

                      <Button
                        asChild
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                      >
                        <Link to="/contact">
                          Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            A clear and proven workflow that ensures your project’s success from
            start to finish.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-white shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex justify-center mb-6">{step.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Tell us about your project and we’ll propose the right solution and
            timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/contact">
                Request Consultation <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;