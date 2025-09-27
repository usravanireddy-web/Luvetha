// src/pages/Services.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

// Service Images
import websiteDesigin from "@/assets/websitedesign.png";
import digitalMarketing from "@/assets/digitalmarketing.png";
import dataServices from "@/assets/data-services.png";
import customDevelopment from "@/assets/customdevelopment.png";
import itConsuluting from "@/assets/itconsulting.png";
import dataAnalytics from "@/assets/dataanalytics.png";
import mobieApps from "@/assets/mobileapps.png";
import retailServices from "@/assets/retailservices.png";
import dataBase from "@/assets/batabase.png";

// Process Images
import consultationImg from "@/assets/consultationImg.png";
import planningImg from "@/assets/planningImg.png";
import implementationImg from "@/assets/implementationImg.png";
import supportImg from "@/assets/supportImg.png";

const Services = () => {
  const servicesRows = [
    [
      {
        image: websiteDesigin,
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
        image: digitalMarketing,
        title: "Digital Marketing",
        description:
          "Performance-driven marketing: SEO, paid ads, social campaigns and content that converts.",
        features: [
          "SEO & GEO",
          "Google Ads",
          "Social Media Marketing",
          "E-Mail Marketing",
          "Google My Business",
        ],
      },
      {
        image: dataServices,
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
        image: customDevelopment,
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
        image: itConsuluting,
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
        image: dataAnalytics,
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
        image: mobieApps,
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
        image: retailServices,
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
        image: dataBase,
        title: "Database Maintenance",
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

  const processSteps = [
    {
      image: consultationImg,
      title: "Consultation",
      desc: "Understanding your business goals, users, and challenges through deep discovery.",
    },
    {
      image: planningImg,
      title: "Planning",
      desc: "Crafting user-centric UI/UX designs that balance aesthetics with functionality.",
    },
    {
      image: implementationImg,
      title: "Implementation",
      desc: "Agile development using modern frameworks for scalable and maintainable solutions.",
    },
    {
      image: supportImg,
      title: "Support",
      desc: "Ongoing monitoring, optimization, and feature updates for long-term success.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
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
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/90">
            From Web Development to Data Services and Digital Marketing — we
            build and scale technology that drives outcomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-8 shadow-md"
            >
              <Link to="/services">
                Explore Services <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Core Services
            </h2>
            <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto">
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
                    className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white border border-gray-200 h-full flex flex-col"
                  >
                    {/* IMAGE (UNIFORM BOX) */}
                    <div className="flex justify-center items-center h-60 w-full bg-transparent">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-48 w-48 object-contain"
                      />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-2xl font-bold text-center mt-2 mb-2 text-gray-900">
                      {service.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-center text-gray-700 px-4 mb-4">
                      {service.description}
                    </p>

                    {/* FEATURES */}
                    <CardContent className="flex flex-col flex-grow px-6">
                      <div className="space-y-2 mb-6 text-left flex-grow">
                        {service.features.map((feat, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-center gap-2 text-gray-800"
                          >
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm">{feat}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto">
                        <Button
                          asChild
                          variant="outline"
                          className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                        >
                          <Link to="/contact">
                            Get Quote <ArrowRight className="ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900">
            Our Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-transform duration-300 hover:scale-105 h-full"
              >
                <div className="flex justify-center items-center h-40 w-full">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="h-28 w-28 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
