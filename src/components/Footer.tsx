import React from 'react';
import { Link } from 'react-router-dom';
import logo from "@/assets/logoluvetha.png";
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Footer = () => {
  // ✅ Rewritten Services with correct order & new services
  const services = [
    { name: 'Web Designing', path: '/services' },
    { name: 'Digital Marketing', path: '/services' },
    { name: 'Data Services', path: '/services' },
    { name: 'Custom Development', path: '/services' },
    { name: 'IT Consulting', path: '/services' },
    { name: 'Data Analytics', path: '/services' },
    { name: 'Mobile Apps', path: '/services' },
    { name: 'Retail Services', path: '/services' },
    { name: 'Database Maintenance', path: '/services' }
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="footer-color">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in">
            <img src={logo} alt="Luvetha Logo" className="logo"/>
            <p className="text-primary-glow1 mb-6 leading-relaxed">
              Transforming businesses through innovative technology solutions and expert consulting services.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/luvetha-tech-solutions-pvt-ltd/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/lv_luvetha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.youtube.com/@luvethatechsolutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/919000204921" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="font-semibold text-xl mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path}
                    className="text-primary-glow1 hover:text-primary-foreground transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-semibold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-primary-glow1 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-4">
              <li className="mt-3">
                <Link 
                  to="/privacy-policy" 
                  className="hover:underline text-primary-glow1 hover:text-primary-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="font-semibold text-xl mb-6">Contact Info</h3>
            <div className="space-y-4">
              {/* Phone Number */}
              <div
                className="flex items-center gap-3 mb-2 cursor-pointer text-gray-800 hover:text-blue-600"
                onClick={() => (window.location.href = "tel:+919000204921")}
              >
                <Phone className="text-blue-400" size={20} />
                <span>+91 9000204921</span>
              </div>

              {/* Email */}
              <div
                className="flex items-center gap-3 mb-2 cursor-pointer text-gray-800 hover:text-blue-600"
                onClick={() =>
                  (window.location.href = "mailto:lakshmareddy@luvethatech.com")
                }
              >
                <Mail className="text-blue-400" size={20} />
                <span>lakshmareddy@luvethatech.com</span>
              </div>

              {/* Address */}
              <div
                className="flex items-center gap-3 cursor-pointer text-gray-800 hover:text-blue-600"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps?q=Vivekananda+Nagar,Kukatpally,Hyderabad+Telangana+500057",
                    "_blank"
                  )
                }
              >
                <MapPin className="text-blue-400" size={20} />
                <span>
                  Vivekananda Nagar, Kukatpally <br /> Hyderabad Telangana 500057
                </span>
              </div>

              {/* ✅ Remote Services Worldwide */}
              <div className="flex items-center gap-3 text-gray-800">
                <MapPin className="text-blue-400" size={20} />
                <span>Remote Services Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mx-auto px-4 text-center text-primary-glow1">
              © 2024 Luvetha Tech Solutions Pvt Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
