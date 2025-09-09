import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Cloud, Shield, Smartphone, Code, Database, Zap } from 'lucide-react';
import heroImage from '@/assets/hero-tech.jpg';

const Home = () => {
  const services = [
    {
      icon: <Cloud className="h-12 w-12 text-primary" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to modernize your business operations.'
    },
    {
      icon: <Code className="h-12 w-12 text-primary" />,
      title: 'Custom Development',
      description: 'Tailored software solutions built with cutting-edge technologies for your unique needs.'
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and sensitive data.'
    },
    {
      icon: <Smartphone className="h-12 w-12 text-primary" />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.'
    },
    {
      icon: <Database className="h-12 w-12 text-primary" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and BI solutions.'
    },
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to optimize your IT infrastructure and processes.'
    }
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
          {/* <Badge variant="secondary" className="mb-6">
            Leading IT Solutions Provider
          </Badge> */}
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
                Explore Services <ArrowRight className="ml-2" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to drive your business growth and digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-professional transition-all duration-300 hover:scale-105 animate-scale-in bg-gradient-card border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-accent rounded-lg w-fit group-hover:bg-primary/10 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
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
              Start Your Project <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;