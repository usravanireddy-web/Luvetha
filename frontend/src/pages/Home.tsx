import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import heroImage from '@/assets/hero-tech.jpg';

// Service images
import websiteDesign from '@/assets/websitedesign.png';
import digitalMarketing from '@/assets/digitalmarketing.png';
import dataServices from "@/assets/data-services.png";
import customDevelopment from '@/assets/customdevelopment.png';
import itConsulting from '@/assets/itconsulting.png';
import dataAnalytics from '@/assets/dataanalytics.png';
import mobileApps from '@/assets/mobileapps.png';
import retailServices from '@/assets/retailservices.png';
import dataBase from '@/assets/batabase.png';

const Home = () => {
  const servicesRows = [
    [
      { image: websiteDesign, title: 'Web Designing', description: 'Modern, responsive websites that perfectly reflect your brand identity and engage your audience.' },
      { image: digitalMarketing, title: 'Digital Marketing', description: 'Effective online marketing strategies to increase visibility, traffic, and conversions.' },
      { image: dataServices, title: 'Data Services', description: 'Comprehensive data solutions to store, manage, and process your business information efficiently.' }
    ],
    [
      { image: customDevelopment, title: 'Custom Development', description: 'Tailored software solutions built to meet the unique needs of your business.' },
      { image: itConsulting, title: 'IT Consulting', description: 'Expert guidance to optimize IT infrastructure and improve overall technology strategy.' },
      { image: dataAnalytics, title: 'Data Analytics', description: 'Transform your business data into actionable insights for smarter decision-making.' }
    ],
    [
      { image: mobileApps, title: 'Mobile Apps', description: 'High-quality mobile applications for iOS and Android to enhance customer engagement.' },
      { image: retailServices, title: 'Retail Services', description: 'IT solutions for retail businesses to streamline operations and improve customer experience.' },
      { image: dataBase, title: 'Database Maintenance', description: 'Reliable database management and support to ensure your systems run smoothly and securely.' }
    ]
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transforming
            <br />
            <span className="text-primary-glow">Digital Future</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering businesses with innovative technology solutions, expert consulting, and seamless digital transformation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/services">
                Explore Services →
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">Get Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Expertise</h2>
            <p className="text-xl text-gray-700 font-semibold max-w-3xl mx-auto">
              Delivering innovative IT solutions that drive growth, efficiency, and business success.
            </p>
          </div>
          
          <div className="space-y-12">
            {servicesRows.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {row.map((service, index) => (
                  <Card 
                    key={index} 
                    className="group hover:shadow-professional transition-all duration-300 hover:scale-105 animate-scale-in bg-gradient-card border-0 overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-full h-48 md:h-56 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    <CardHeader className="text-center">
                      <CardTitle className="text-xl mt-4 font-bold text-gray-900">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center text-base font-semibold text-gray-600">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can accelerate your growth and innovation
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link to="/contact">
              Start Your Project →
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
