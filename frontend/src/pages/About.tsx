import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Award, Globe, Eye, Headphones } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '8+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  const coreValues = [
    {
      icon: <Target className="h-10 w-10 text-primary mx-auto mb-3" />,
      title: 'Innovation First',
      description:
        'We stay ahead of technology trends to deliver cutting-edge solutions that give you competitive advantage.'
    },
    {
      icon: <Users className="h-10 w-10 text-primary mx-auto mb-3" />,
      title: 'Client-Centric',
      description:
        'Your success is our priority. We work closely with you to understand and exceed your expectations.'
    },
    {
      icon: <Award className="h-10 w-10 text-primary mx-auto mb-3" />,
      title: 'Quality Excellence',
      description:
        'We maintain the highest standards in everything we do, from code quality to customer service.'
    },
    {
      icon: <Globe className="h-10 w-10 text-primary mx-auto mb-3" />,
      title: 'Global Reach',
      description:
        'Serving clients worldwide with scalable solutions that work across different markets and cultures.'
    }
  ];

  return (
    <div className="min-h-screen pt-0">

      {/* ================= HERO ================= */}
      <section className="py-20 bg-gradient-hero text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Pioneering Technology
            <br />
            <span className="text-primary-glow">Excellence</span>
          </h1>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed">
            Founded with a vision to bridge the gap between business needs and technology solutions,
            Luvetha Tech Solutions has been at the forefront of digital innovation,
            helping businesses transform and thrive in the digital age.
          </p>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-16 bg-background text-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">

          <Card className="bg-white border shadow-md rounded-xl p-6">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold uppercase">
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower businesses of all sizes with innovative, scalable,
                and reliable technology solutions that drive growth,
                enhance efficiency, and create lasting competitive advantages
                in an ever-evolving digital landscape.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border shadow-md rounded-xl p-6">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold uppercase">
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the leading technology partner for businesses worldwide,
                recognized for our innovation, expertise, and commitment to delivering
                solutions that transform challenges into opportunities and ideas into reality.
              </p>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* ================= ABOUT LUVETHA ================= */}
      <section className="py-20 bg-background text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About Luvetha Tech Solutions
          </h2>

          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Established in 2022, Luvetha Tech Solutions Pvt Ltd was built with a bold vision —
            to empower businesses through Digital Transformation and Data-Driven Decision Making.
            We integrate Technology and Compliance into one unified ecosystem,
            enabling startups, SMEs, and enterprises to scale confidently.
          </p>

          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-6 leading-relaxed">
            From Website Development and Digital Marketing to Accounting,
            Taxation, Automation, and Business Intelligence —
            we provide complete business growth systems under one trusted roof.
          </p>
        </div>
      </section>

      {/* ================= FOUNDER VISION ================= */}
      <section className="py-20 bg-secondary text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Founder Vision
          </h2>

          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            In 2022, three ambitious founders came together with one belief —
            businesses fail not because of lack of ideas,
            but because of lack of execution, structured systems, and digital clarity.
          </p>

          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-6 leading-relaxed">
            With discipline, innovation, and long-term strategic thinking,
            Luvetha Tech Solutions is steadily expanding toward becoming
            a globally recognized integrated technology and compliance partner.
          </p>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-20 bg-background text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="bg-white border shadow-md rounded-xl p-6">
                {value.icon}
                <CardTitle className="text-xl mb-3">{value.title}</CardTitle>
                <p className="text-lg text-muted-foreground">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 bg-secondary text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Us?
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            We combine technology, compliance, analytics, and automation under one unified ecosystem.
            Our relationship-driven approach, founder-led accountability, and structured execution model
            ensure measurable growth and long-term sustainability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border shadow-md rounded-xl p-6">
              <Users className="h-10 w-10 text-primary mx-auto mb-3" />
              <CardTitle className="text-xl mb-2">Expert Team</CardTitle>
              <p className="text-lg text-muted-foreground">
                Certified professionals with extensive experience in cutting-edge technologies.
              </p>
            </Card>

            <Card className="bg-white border shadow-md rounded-xl p-6">
              <Award className="h-10 w-10 text-primary mx-auto mb-3" />
              <CardTitle className="text-xl mb-2">Proven Track Record</CardTitle>
              <p className="text-lg text-muted-foreground">
                Successfully delivered 150+ projects across industries with consistent satisfaction.
              </p>
            </Card>

            <Card className="bg-white border shadow-md rounded-xl p-6">
              <Headphones className="h-10 w-10 text-primary mx-auto mb-3" />
              <CardTitle className="text-xl mb-2">24/7 Support</CardTitle>
              <p className="text-lg text-muted-foreground">
                Round-the-clock technical support and maintenance to ensure smooth operations.
              </p>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;