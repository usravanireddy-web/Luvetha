import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

import emailjs from "@emailjs/browser";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react"; // ✅ Added YouTube from lucide-react
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  // ✅ Contact info with improved subtitle color
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      details: "+91 9000204921",
      subtitle: "Mon-Fri 9AM-6PM EST",
      link: "tel:+919000204921",
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      details: "lakshmareddy@luvethatech.com",
      subtitle: "24/7 Email Support",
      link: "mailto:lakshmareddy@luvethatech.com",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      details:
        "Vivekananda Nagar, Kukatpally Hyderabad Telangana 500057",
      subtitle: "Remote Services Worldwide",
      link: "https://www.google.com/maps?q=Vivekananda+Nagar+Kukatpally+Hyderabad+Telangana+500057",
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Response Time",
      details: "Within 2 hours",
      subtitle: "During Business Hours",
      link: "#faq",
    },
  ];

  // ✅ Handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Handle form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await emailjs.send(
        "service_68fwzfa",
        "template_5kmx2m5",
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        "PlTXt6XAgnVXWf_Tg"
      );

      console.log("✅ Email sent:", res.status, res.text);

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
        description:
          error?.text ||
          error?.message ||
          "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* ================= Hero Section ================= */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's Build Something
              <br />
              <span className="text-primary-glow">Amazing Together</span>
            </h1>
            <p className="text-xl leading-relaxed">
              Ready to transform your business with cutting-edge technology
              solutions? Our team of experts is here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* ================= Contact Info ================= */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card
                  className="text-center hover:shadow-professional transition-all duration-300 hover:scale-105 animate-scale-in bg-gradient-card border-0 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-accent rounded-lg w-fit">
                      {info.icon}
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="font-semibold text-foreground mb-1">
                      {info.details}
                    </div>
                    {/* ✅ Darker subtitle color for better visibility */}
                    <CardDescription className="text-gray-700">
                      {info.subtitle}
                    </CardDescription>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          {/* ✅ Social Icons Beside Heading */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
            <h2 className="text-3xl font-semibold">Follow Us On</h2>
            <div className="flex gap-8">
              <a
                href="https://www.instagram.com/lv_luvetha" // ✅ Luvetha Instagram
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-8 w-8 text-pink-500 hover:scale-110 transition" />
              </a>
              <a
                href="https://wa.me/919000204921"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="h-8 w-8 text-green-500 hover:scale-110 transition" />
              </a>
              <a
                href="https://youtube.com/@luvethatechsolutions" // ✅ Luvetha YouTube
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-8 w-8 text-red-600 hover:scale-110 transition" />
              </a>
              <a
                href="https://www.linkedin.com/company/luvetha-tech-solutions-pvt-ltd/?viewAsMember=true" // ✅ Luvetha LinkedIn
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-8 w-8 text-blue-600 hover:scale-110 transition" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Contact Form ================= */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="animate-slide-up bg-gradient-card border-0 shadow-professional">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
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
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
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
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2"
                      >
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+91 0123456789"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
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
          </div>
        </div>
      </section>

      {/* ================= FAQ Section ================= */}
      <section id="faq" className="py-20 bg-background">
        {/* Add your FAQ code here */}
      </section>
    </div>
  );
};

export default Contact;
