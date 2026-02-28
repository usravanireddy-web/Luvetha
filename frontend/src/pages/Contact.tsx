import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Users, Award } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaInstagram, FaWhatsapp, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  /* ================== SCROLL TO FORM LOGIC ================== */
  useEffect(() => {
    if (location.hash === "#contact-form") {
      const element = document.getElementById("contact-form");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, [location]);
  /* =========================================================== */

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
    { icon: <Phone className="h-6 w-6 text-primary" />, title: 'Phone', details: ['+91 9000204921', '+91 9000204857'], subtitle: 'Mon-Fri 9AM-6PM IST' },
    { icon: <Mail className="h-6 w-6 text-primary" />, title: 'Email', details: ['info@luvethatech.com', 'lakshmareddy@luvethatech.com'], subtitle: '24/7 Email Support' },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      details: (
        <a
          href="https://maps.app.goo.gl/RHc7ywR3t8nha67r8?g_st=com.google.maps.preview.copy"
          target="_blank"
          rel="noopener noreferrer"
          className="location-link"
        >
          Flat No: 202, Anasuyaa Nilayam,
          Plot No: 10, Vivekananda Nagar Colony,
          Kukatpally, Hyderabad – 500072
          Remote Services Worldwide
        </a>
      )
    },
    { icon: <Clock className="h-6 w-6 text-primary" />, title: 'Response Time', details: 'Within 2 hours', subtitle: 'During Business Hours' }
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
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('contact_no', formData.phone);
      formDataToSend.append('message', formData.message);

      const response = await fetch("https://unique-bdqu.onrender.com/contact", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error ${response.status}: ${errorText}`);
      }

      await response.json();

      toast({
        title: "Message Sent!",
        description: "Your contact form was submitted successfully. We'll get back to you soon.",
      });

      setTimeout(() => navigate("/thankyou"), 1200);

      setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });

    } catch (error: any) {
      toast({
        title: "Submission Failed",
        description: error?.message || "We couldn't send your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-0">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Build Something <br />
            <span className="text-primary-glow">Amazing Together</span>
          </h1>
          <p className="text-xl leading-relaxed">
            Ready to transform your business with cutting-edge technology solutions?
            Our team of experts is here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {contactInfo.map((info, i) => (
            <Card key={i} className="text-center bg-gradient-card border-0 hover:shadow-professional hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-accent rounded-lg w-fit">
                  {info.icon}
                </div>
                <CardTitle className="text-lg">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="font-semibold text-foreground mb-1 space-y-1">
                  {Array.isArray(info.details)
                    ? info.details.map((detail, index) => (
                        <div key={index}>
                          {info.title === "Phone" ? (
                            <a href={`tel:${detail}`} className="hover:text-primary">{detail}</a>
                          ) : (
                            <a href={`mailto:${detail}`} className="hover:text-primary">{detail}</a>
                          )}
                        </div>
                      ))
                    : <div>{info.details}</div>}
                </div>
                <CardDescription>{info.subtitle}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Follow Us */}
        <div className="text-center mt-10">
          <h3 className="text-xl font-semibold text-foreground mb-4">Follow Us On</h3>
          <div className="flex justify-center items-center gap-6 text-3xl">
            <a href="https://www.instagram.com/luvetha_tech_solutions?igsh=eWQ0am5seTJpbHpz" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:scale-110 transition-transform duration-300"><FaInstagram /></a>
            <a href="https://wa.me/919000204921" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:scale-110 transition-transform duration-300"><FaWhatsapp /></a>
            <a href="https://www.youtube.com/@luvethatechsolutions" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:scale-110 transition-transform duration-300"><FaYoutube /></a>
            <a href="https://www.linkedin.com/company/luvetha-tech-solutions-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:scale-110 transition-transform duration-300"><FaLinkedin /></a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-secondary">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-gradient-card border-0 shadow-professional">
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input name="name" value={formData.name} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input name="email" type="email" value={formData.email} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <Input name="phone" type="tel" value={formData.phone} onChange={handleInputChange} required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <Textarea name="message" value={formData.message} onChange={handleInputChange} required rows={5} />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-primary hover:shadow-glow" size="lg">
                  {isSubmitting ? "Sending Message..." : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Why Choose Us */}
          <div className="space-y-8">
            {[{
              icon: <MessageSquare className="h-8 w-8 text-primary" />,
              title: "Quick Response",
              text: "We respond to all inquiries within 2 hours during business hours."
            },
            {
              icon: <Users className="h-8 w-8 text-primary" />,
              title: "Expert Consultation",
              text: "Get a free initial consultation with our technology experts."
            },
            {
              icon: <Award className="h-8 w-8 text-primary" />,
              title: "Proven Results",
              text: "With 150+ successful projects, we deliver exceptional results."
            }].map((item, i) => (
              <Card key={i} className="bg-gradient-card border-0 shadow-professional">
                <CardHeader className="flex items-center gap-3">
                  {item.icon}
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.text}</CardDescription>
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