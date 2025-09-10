import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowRight, 
  Monitor, 
  Megaphone, 
  Database, 
  Code, 
  Zap, 
  BarChart, 
  Smartphone, 
  ShoppingBag, 
  HardDrive 
} from 'lucide-react'; 
// ✅ Added new icons: BarChart (Data Services), ShoppingBag (Retail Services), HardDrive (Database Maintenance)
import heroImage from '@/assets/hero-tech.jpg';

const Home = () => {
  // ✅ Each row is explicitly defined for clarity
  const servicesRows = [
    [
      {
        icon: <Monitor className="h-12 w-12 text-primary" />,
        title: 'Web Designing',
        description: 'Creative, responsive, and modern website designs tailored to your business identity.'
      },
      {
        icon: <Megaphone className="h-12 w-12 text-primary" />,
        title: 'Digital Marketing',
        description: 'Boost your brand visibility with SEO, social media, and performance-driven marketing campaigns.'
      },
      {
        icon: <BarChart className="h-12 w-12 text-primary" />,
        title: 'Data Services',
        description: 'Organize, process, and optimize data with scalable data service solutions.'
      }
    ],
    [
      {
        icon: <Code className="h-12 w-12 text-primary" />,
        title: 'Custom Development',
        description: 'Tailored software solutions built with cutting-edge technologies for your unique needs.'
      },
      {
        icon: <Zap className="h-12 w-12 text-primary" />,
        title: 'IT Consulting',
        description: 'Strategic technology consulting to optimize your IT infrastructure and processes.'
      },
      {
        icon: <Database className="h-12 w-12 text-primary" />,
        title: 'Data Analytics',
        description: 'Transform your data into actionable insights with advanced analytics and BI solutions.'
      }
    ],
    [
      {
        icon: <Smartphone className="h-12 w-12 text-primary" />,
        title: 'Mobile Apps',
        description: 'Native and cross-platform mobile applications for iOS and Android platforms.'
      },
      {
        icon: <ShoppingBag className="h-12 w-12 text-primary" />,
        title: 'Retail Services',
        description: 'Comprehensive retail IT solutions to enhance customer experience and streamline operations.'
      },
      {
        icon: <HardDrive className="h-12 w-12 text-primary" />,
        title: 'Data Base Maintenance',
        description: 'Reliable database maintenance and support to ensure your systems run smoothly.'
      }
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
          
          {/* ✅ Explicit Rows */}
          <div className="space-y-12">
            {servicesRows.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {row.map((service, index) => (
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
