import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Cloud, Code, Shield, Smartphone, Database, Zap, 
  Server, Globe, HeadphonesIcon, ArrowRight, CheckCircle 
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: <Cloud className="h-16 w-16 text-primary" />,
      title: 'Cloud Solutions',
      description: 'Complete cloud infrastructure services including migration, optimization, and management across AWS, Azure, and Google Cloud platforms.',
      features: ['Cloud Migration', 'Infrastructure Management', 'Cost Optimization', 'Disaster Recovery', 'Multi-Cloud Strategy'],
      // price: 'Starting from $2,500/month'
    },
    {
      icon: <Code className="h-16 w-16 text-primary" />,
      title: 'Custom Software Development',
      description: 'End-to-end software development services using modern technologies and agile methodologies.',
      features: ['Web Applications', 'Enterprise Software', 'API Development', 'System Integration', 'Legacy Modernization'],
      // price: 'Starting from $15,000/project'
    },
    {
      icon: <Shield className="h-16 w-16 text-primary" />,
      title: 'Cybersecurity Services',
      description: 'Comprehensive security solutions to protect your digital assets from evolving cyber threats.',
      features: ['Security Assessment', 'Penetration Testing', 'Compliance Management', '24/7 Monitoring', 'Incident Response'],
      // price: 'Starting from $1,800/month'
    },
    {
      icon: <Smartphone className="h-16 w-16 text-primary" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with cutting-edge features.',
      features: ['iOS Development', 'Android Development', 'Cross-Platform Apps', 'UI/UX Design', 'App Store Deployment'],
      // price: 'Starting from $25,000/project'
    },
    {
      icon: <Database className="h-16 w-16 text-primary" />,
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence solutions.',
      features: ['Data Warehousing', 'Business Intelligence', 'Machine Learning', 'Data Visualization', 'Predictive Analytics'],
      // price: 'Starting from $5,000/month'
    },
    {
      icon: <Zap className="h-16 w-16 text-primary" />,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to optimize your IT infrastructure and business processes.',
      features: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'IT Roadmapping', 'Vendor Selection'],
      // price: 'Starting from $200/hour'
    }
  ];

  const additionalServices = [
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: 'Infrastructure Management',
      description: 'Complete IT infrastructure management and monitoring services.'
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: 'Digital Marketing Tech',
      description: 'Technology solutions for digital marketing and customer engagement.'
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8 text-primary" />,
      title: 'Technical Support',
      description: '24/7 technical support and maintenance for all our solutions.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            {/* <Badge variant="secondary" className="mb-6">
              Our Services
            </Badge> */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Comprehensive IT
              <br />
              <span className="text-primary-glow">Solutions</span>
            </h1>
            <p className="text-xl leading-relaxed">
              From cloud infrastructure to custom software development, we provide end-to-end 
              technology solutions that drive business growth and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized technology services designed to meet your unique business requirements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card 
                key={index}
                className="group hover:shadow-professional transition-all duration-300 hover:scale-105 animate-scale-in bg-gradient-card border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent rounded-lg group-hover:bg-primary/10 transition-colors">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <div className="text-primary font-semibold">{service.price}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    <Link to="/contact">
                      Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-6">Additional Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Supporting services to complement our core offerings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-card-hover transition-all duration-300 animate-scale-in bg-gradient-card border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-accent rounded-lg w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Understanding your business needs and objectives' },
              { step: '02', title: 'Planning', description: 'Developing comprehensive strategy and roadmap' },
              { step: '03', title: 'Implementation', description: 'Executing solutions with agile methodology' },
              { step: '04', title: 'Support', description: 'Ongoing maintenance and optimization' }
            ].map((process, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mb-4 mx-auto">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a customized solution for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/contact">
                Request Consultation <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;