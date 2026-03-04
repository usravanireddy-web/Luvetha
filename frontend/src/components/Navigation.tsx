import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import logo from "@/assets/lvbg.png";

const NAVBAR_HEIGHT = "h-14 md:h-20";

type ServiceChild = {
  label: string;
  path: string;
};

type ServiceItem = {
  id: string;
  label: string;
  path: string;
  children?: ServiceChild[];
};

const services: ServiceItem[] = [
  {
    id: "web-design",
    label: "Web Design",
    path: "/webdevelopment",
    children: [
      { label: "UI/UX Design", path: "/uiux" },
      { label: "Web Application Development", path: "/webapplicationdevelopement" },
      { label: "Ecommerce Development Services", path: "/ecommercedevelopment" },
      { label: "Wordpress Development", path: "/wordpressdevelopment" },
    ],
  },
  {
    id: "digital-marketing",
    label: "Digital Marketing",
    path: "/digitalmarketing",
    children: [
      { label: "SEO Services", path: "/seo" },
      { label: "SMM Services", path: "/smm" },
      { label: "PPC Services", path: "/ppc" },
    ],
  },
  {
    id: "data-services",
    label: "Data Services",
    path: "/dataservices",
    children: [
      { label: "AWS Services", path: "/aws" },
      { label: "Networking Services", path: "/networking" },
    ],
  },
  {
    id: "custom-development",
    label: "Custom Development",
    path: "/customdevelopment",
  },
  {
    id: "data-analytics",
    label: "Data Analytics",
    path: "/dataanalytics",
    children: [
      { label: "Power BI", path: "/powerbi" },
      { label: "AI Development", path: "/aidevelopment" },
      { label: "Data Science", path: "/datascience" },
    ],
  },
  {
    id: "mobile-apps",
    label: "Mobile Apps",
    path: "/mobileapps",
    children: [{ label: "Mobile Application Development", path: "/mobile-application" }],
  },
  {
    id: "retail-services",
    label: "Retail Services",
    path: "/retailservices",
  },
  {
    id: "database-maintenance",
    label: "Database Maintenance",
    path: "/databasemaintenance",
  },
];

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navTextStyle = "text-[15px] md:text-base font-semibold transition-colors";

  const isActive = (path: string) =>
    location.pathname === path ? "text-sky-500" : "text-muted-foreground hover:text-sky-500";

  const closeMobile = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className={`flex items-center justify-between ${NAVBAR_HEIGHT}`}>
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Luvetha Tech Solutions"
                className="h-14 md:h-[72px] lg:h-[80px] w-auto object-contain"
              />
            </Link>

            <div className="hidden md:flex items-center space-x-5">
              <Link to="/" className={`${navTextStyle} ${isActive("/")}`}>
                Home
              </Link>

              <Link to="/about" className={`${navTextStyle} ${isActive("/about")}`}>
                About
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 ${navTextStyle} ${
                    location.pathname.startsWith("/service") ? "text-sky-500" : "text-muted-foreground hover:text-sky-500"
                  }`}
                >
                  Services
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isServicesOpen && (
                  <div className="absolute top-full left-0 w-72 bg-background border border-border rounded-lg shadow-lg p-2 space-y-1 z-50">
                    {services.map((service) => (
                      <div key={service.id} className="relative group/sub">
                        <Link
                          to={service.path}
                          className="flex justify-between items-center px-4 py-2 text-[15px] md:text-base text-muted-foreground hover:text-sky-500 hover:bg-muted rounded-md transition-all"
                        >
                          {service.label}
                          {service.children && <ChevronRight size={14} />}
                        </Link>

                        {service.children && (
                          <div className="absolute left-full ml-2 top-0 w-64 bg-white shadow-lg rounded-md p-2 space-y-1 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                            {service.children.map((child) => (
                              <Link
                                key={child.path}
                                to={child.path}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-500 hover:text-white rounded-md transition-all duration-200"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/ourwork" className={`${navTextStyle} ${isActive("/ourwork")}`}>
                Our Work
              </Link>

              <Link to="/contact" className={`${navTextStyle} ${isActive("/contact")}`}>
                Contact
              </Link>

              <Link to="/careers" className={`${navTextStyle} ${isActive("/careers")}`}>
                Careers
              </Link>

              <Button asChild className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 text-[15px] md:text-base">
                <Link to="/contact#contact-form">Get Started</Link>
              </Button>
            </div>

            <button
              className="md:hidden flex items-center"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              type="button"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border px-5 py-5 space-y-4">
            <Link to="/" onClick={closeMobile} className="block text-base font-semibold">
              Home
            </Link>
            <Link to="/about" onClick={closeMobile} className="block text-base font-semibold">
              About
            </Link>

            <div>
              <button
                type="button"
                className="w-full flex items-center justify-between text-base font-semibold"
                onClick={() => setIsServicesOpen((prev) => !prev)}
              >
                Services
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isServicesOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  {services.map((service) => (
                    <div key={service.id}>
                      <Link
                        to={service.path}
                        onClick={closeMobile}
                        className="block text-base text-muted-foreground"
                      >
                        {service.label}
                      </Link>
                      {service.children && (
                        <div className="ml-4 mt-1 space-y-1">
                          {service.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              onClick={closeMobile}
                              className="block text-sm text-gray-600"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link to="/ourwork" onClick={closeMobile} className="block text-base font-semibold">
              Our Work
            </Link>
            <Link to="/contact" onClick={closeMobile} className="block text-base font-semibold">
              Contact
            </Link>
            <Link to="/careers" onClick={closeMobile} className="block text-base font-semibold">
              Careers
            </Link>
          </div>
        )}
      </nav>

      <div className={NAVBAR_HEIGHT} />
    </>
  );
};

export default Navigation;
