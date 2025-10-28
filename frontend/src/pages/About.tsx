import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Award, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '8+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  const values = [
    {
      icon: <Target className="h-12 w-12 text-primary" />,
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give you competitive advantage.'
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: 'Client-Centric',
      description: 'Your success is our priority. We work closely with you to understand and exceed your expectations.'
    },
    {
      icon: <Award className="h-12 w-12 text-primary" />,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.'
    },
    {
      icon: <Globe className="h-12 w-12 text-primary" />,
      title: 'Global Reach',
      description: 'Serving clients worldwide with scalable solutions that work across different markets and cultures.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            {/* <Badge variant="secondary" className="mb-6">
              About Luvetha Tech Solutions
            </Badge> */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Pioneering Technology
              <br />
              <span className="text-primary-glow">Excellence</span>
            </h1>
            <p className="text-xl leading-relaxed">
              Founded with a vision to bridge the gap between business needs and technology solutions, 
              Luvetha Tech Solutions has been at the forefront of digital innovation, helping businesses 
              transform and thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-gradient-card border-0 shadow-professional animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To empower businesses of all sizes with innovative, scalable, and reliable technology solutions 
                  that drive growth, enhance efficiency, and create lasting competitive advantages in an 
                  ever-evolving digital landscape.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-professional animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To be the leading technology partner for businesses worldwide, recognized for our innovation, 
                  expertise, and commitment to delivering solutions that transform challenges into opportunities 
                  and ideas into reality.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as a company
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="group hover:shadow-professional transition-all duration-300 hover:scale-105 animate-scale-in bg-gradient-card border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-accent rounded-lg w-fit group-hover:bg-primary/10 transition-colors">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Us?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team of experienced professionals brings together diverse expertise and a shared commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center bg-gradient-card border-0 shadow-professional animate-scale-in">
              <CardHeader>
                <CardTitle className="text-xl">Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Certified professionals with extensive experience in cutting-edge technologies and industry best practices.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-card border-0 shadow-professional animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle className="text-xl">Proven Track Record</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Successfully delivered 150+ projects across various industries with consistent client satisfaction.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-card border-0 shadow-professional animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="text-xl">24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Round-the-clock technical support and maintenance to ensure your systems run smoothly at all times.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;