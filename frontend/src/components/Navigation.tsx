import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/lvbg.png";

/* Navbar height */
const NAVBAR_HEIGHT = "h-14 md:h-20";

const Navigation: React.FC = () => {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { id: "web-design", label: "Web Design", path: "/webdevelopment" ,
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
    { id: "data-services", label: "Data Services", path: "/dataservices" },
    { id: "custom-development", label: "Custom Development", path: "/customdevelopment" },
    { id: "it-consulting", label: "IT Consulting", path: "/itconsulting" },
    { id: "data-analytics", label: "Data Analytics", path: "/dataanalytics" },
    { id: "mobile-apps", label: "Mobile Apps", path: "/mobileapps", 
       children: [
      { label: "Mobile Application Development", path: "/mobile-application" },]
    },
    { id: "retail-services", label: "Retail Services", path: "/retailservices" },
    { id: "database-maintenance", label: "Database Maintenance", path: "/databasemaintenance" },
  ];

  const navTextStyle =
    "text-[15px] md:text-base font-semibold transition-colors";

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className={`flex items-center justify-between ${NAVBAR_HEIGHT}`}>

            {/* LOGO */}
            <Link to="/homepagecontent" className="flex items-center">
              <img
                src={logo}
                alt="Luvetha Tech Solutions"
                className="h-14 md:h-[72px] lg:h-[80px] w-auto object-contain"
              />
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center space-x-5">

              {/* HOME */}
              <Link
                to="/homepagecontent"
                className={`${navTextStyle} ${
                  location.pathname === "/homepagecontent"
                    ? "text-sky-500"
                    : "text-muted-foreground hover:text-sky-500"
                }`}
              >
                Home
              </Link>

              {/* ABOUT */}
              <Link
                to="/about"
                className={`${navTextStyle} ${
                  location.pathname === "/about"
                    ? "text-sky-500"
                    : "text-muted-foreground hover:text-sky-500"
                }`}
              >
                About
              </Link>

              {/* SERVICES */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link
                  to="/services"
                  className={`flex items-center gap-1 ${navTextStyle} ${
                    location.pathname === "/services"
                      ? "text-sky-500"
                      : "text-muted-foreground hover:text-sky-500"
                  }`}
                >
                  Services

                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                {/* DROPDOWN */}
               {isServicesOpen && (
  <div className="absolute top-full left-0 w-72 bg-background border border-border rounded-lg shadow-lg p-2 space-y-1 z-50">

    {services.map((service) => (
      <div key={service.path} className="relative group/sub">

        {/* Main Service Link */}
        <Link
          to={service.path}
          className="flex justify-between items-center px-4 py-2 text-[15px] md:text-base text-muted-foreground hover:text-sky-500 hover:bg-muted rounded-md transition-all"
        >
          {service.label}
          {service.children && <ChevronDown size={14} />}
        </Link>

        {/* Sub Dropdown (Digital Marketing) */}
        {service.children && (
         <div
      className="absolute left-full ml-2 top-0 w-56 bg-white 
             shadow-lg rounded-md p-2 space-y-1 
             opacity-0 invisible 
             group-hover/sub:opacity-100 
             group-hover/sub:visible 
             transition-all duration-300"
>
            {service.children.map((child) => (
              <Link
                key={child.path}
                to={child.path}
        className="block px-4 py-2 text-sm 
           text-gray-700 
           hover:bg-sky-500 
           hover:text-white 
           rounded-md 
           transition-all duration-300"
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

              {/* OUR WORK */}
              <Link
                to="/ourwork"
                className={`${navTextStyle} ${
                  location.pathname === "/ourwork"
                    ? "text-sky-500"
                    : "text-muted-foreground hover:text-sky-500"
                }`}
              >
                Our Work
              </Link>

              {/* CONTACT */}
              <Link
                to="/contact"
                className={`${navTextStyle} ${
                  location.pathname === "/contact"
                    ? "text-sky-500"
                    : "text-muted-foreground hover:text-sky-500"
                }`}
              >
                Contact
              </Link>

              {/* CAREERS */}
              <Link
                to="/careers"
                className={`${navTextStyle} ${
                  location.pathname === "/careers"
                    ? "text-sky-500"
                    : "text-muted-foreground hover:text-sky-500"
                }`}
              >
                Careers
              </Link>

              {/* BUTTON */}
              <Button
                asChild
                className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 text-[15px] md:text-base"
              >
                <Link to="/contact#contact-form">Get Started</Link>
              </Button>

            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden flex items-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border px-5 py-5 space-y-4">

            <Link to="/" className="block text-base font-semibold">Home</Link>
            <Link to="/about" className="block text-base font-semibold">About</Link>

            <div>
  <span className="block text-base font-semibold">Services</span>

  <div className="ml-4 mt-2 space-y-2">
    {services.map((service) => (
      <div key={service.path}>
        <Link
          to={service.path}
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
</div>

            <Link to="/ourwork" className="block text-base font-semibold">Our Work</Link>
            <Link to="/contact" className="block text-base font-semibold">Contact</Link>
            <Link to="/careers" className="block text-base font-semibold">Careers</Link>

          </div>
        )}

      </nav>

      {/* PAGE OFFSET */}
      <div className={NAVBAR_HEIGHT} />
    </>
  );
};

export default Navigation;
