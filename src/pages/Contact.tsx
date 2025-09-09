import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

import emailjs from "@emailjs/browser";
import { 
  Phone, Mail, MapPin, Clock, Send, 
  MessageSquare, Users, Award 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
   const { toast } = useToast();
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: 'Phone',
      details: '+91 9000204921',
      subtitle: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: 'Email',
      details: 'lakshmareddy@luvethatech.com',
      subtitle: '24/7 Email Support'
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: 'Location',
      details: 'Vivekananda Nagar,Kukatpally Hyderabad Telangana 500057',
      subtitle: 'Remote Services'
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: 'Response Time',
      details: 'Within 2 hours',
      subtitle: 'During Business Hours'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const res = await emailjs.send(
      "service_68fwzfa",   // Service ID from Email Services
      "template_5kmx2m5",  // ✅ Replace with your real Template ID
      {
        from_name: formData.name,   // must match {{from_name}}
        reply_to: formData.email,   // must match {{reply_to}}
        message: formData.message,  // must match {{message}}
      },
      "PlTXt6XAgnVXWf_Tg"  // ✅ Replace with your real Public Key
    );

    console.log("✅ Email sent:", res.status, res.text);

    // Redirect to Thank You page
    navigate("/thank-you");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: "",
    });
  } catch (error: any) {
    console.error("❌ EmailJS error:", error);
    toast({
      title: "Error!",
      description: error?.text || error?.message || "Something went wrong. Please try again.",
      variant: "destructive",
    });
  }

  setIsSubmitting(false);
};



  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            {/* <Badge variant="secondary" className="mb-6">
              Get In Touch
            </Badge> */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's Build Something
              <br />
              <span className="text-primary-glow">Amazing Together</span>
            </h1>
            <p className="text-xl leading-relaxed">
              Ready to transform your business with cutting-edge technology solutions? 
              Our team of experts is here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-professional transition-all duration-300 hover:scale-105 animate-scale-in bg-gradient-card border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-accent rounded-lg w-fit">
                    {info.icon}
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold text-foreground mb-1">{info.details}</div>
                  <CardDescription>{info.subtitle}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="animate-slide-up bg-gradient-card border-0 shadow-professional">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+91 0123456789"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  </div>


                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:shadow-glow"
                    size="lg"
                  >
                    {isSubmitting ? (
                      "Sending Message..."
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Card className="bg-gradient-card border-0 shadow-professional">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-8 w-8 text-primary" />
                    <CardTitle className="text-xl">Quick Response</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    We respond to all inquiries within 2 hours during business hours. 
                    Your time is valuable, and so is ours.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-professional">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Users className="h-8 w-8 text-primary" />
                    <CardTitle className="text-xl">Expert Consultation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Get free initial consultation with our technology experts to discuss 
                    your project requirements and potential solutions.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-professional">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Award className="h-8 w-8 text-primary" />
                    <CardTitle className="text-xl">Proven Results</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    With 150+ successful projects and 50+ satisfied clients, 
                    we have the experience to deliver exceptional results.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How do you ensure project security?",
                answer: "We implement industry-standard security practices including NDAs, secure development environments, and regular security audits."
              },
              {
                question: "What's your typical project timeline?",
                answer: "Project timelines vary based on complexity, but most projects range from 6-24 weeks with regular milestone updates."
              },
              {
                question: "Do you provide post-launch support?",
                answer: "Yes, we offer comprehensive support and maintenance packages to ensure your solutions continue to perform optimally."
              },
              {
                question: "Can you work with our existing team?",
                answer: "Absolutely! We can integrate with your existing team or work as an independent unit based on your preferences."
              }
            ].map((faq, index) => (
              <Card key={index} className="animate-scale-in bg-gradient-card border-0" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{faq.answer}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;