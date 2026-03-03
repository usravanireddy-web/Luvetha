import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import logo from "@/assets/lvbg.png";

const NAVBAR_HEIGHT = "h-14 md:h-20";

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDataOpen, setIsDataOpen] = useState(false);
  const [isDataServicesOpen, setIsDataServicesOpen] = useState(false);

  const services = [
    { label: "Web Design", path: "/webdevelopment" },
    { label: "Digital Marketing", path: "/digitalmarketing" },
    { label: "Custom Development", path: "/customdevelopment" },
    { label: "Mobile Apps", path: "/mobileapps" },
    { label: "Retail Services", path: "/retailservices" },
    { label: "Database Maintenance", path: "/databasemaintenance" },
  ];

  const dataSubMenu = [
    { label: "Power BI Consulting Services", path: "/powerbi" },
    { label: "AI Development Services", path: "/aidevelopment" },
    // { label: "SAP Consulting Services", path: "/sapconsulting" },
    { label: "Data Science Services", path: "/datascience" },
  ];

  const dataServicesSubMenu = [
    { label: "AWS Services", path: "/aws" },
    { label: "Networking Services", path: "/networking" },
  ];

  const navTextStyle =
    "text-[15px] md:text-base font-semibold transition-colors duration-200";

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsDataOpen(false);
    setIsDataServicesOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className={`flex items-center justify-between ${NAVBAR_HEIGHT}`}>

            {/* LOGO (moved slightly right) */}
            <Link to="/homepagecontent" className="flex items-center ml-4">
              <img
                src={logo}
                alt="Luvetha Tech Solutions"
                className="h-14 md:h-[72px] lg:h-[80px] w-auto object-contain"
              />
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center space-x-5">

              <Link to="/homepagecontent" className={`${navTextStyle} hover:text-sky-500`}>
                Home
              </Link>

              <Link to="/about" className={`${navTextStyle} hover:text-sky-500`}>
                About
              </Link>

              {/* SERVICES */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => {
                  setIsServicesOpen(false);
                  setIsDataOpen(false);
                  setIsDataServicesOpen(false);
                }}
              >
                <button className={`flex items-center gap-1 ${navTextStyle} hover:text-sky-500`}>
                  Services
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isServicesOpen && (
                  <div className="absolute top-full left-[-8px] w-72 bg-white border rounded-lg shadow-lg p-2 z-50">

                    {/* DATA ANALYTICS MAIN ITEM */}
                    <div
                      className="relative"
                      onMouseEnter={() => setIsDataOpen(true)}
                      onMouseLeave={() => setIsDataOpen(false)}
                    >
                      <Link
                        to="/dataanalytics"
                        className={`flex justify-between items-center px-4 py-2 rounded-md transition
                        ${
                          isDataOpen
                            ? "bg-blue-600 text-white"
                            : "hover:bg-blue-600 hover:text-white"
                        }`}
                      >
                        Data Analytics
                        <ChevronRight
                          size={16}
                          className={`${isDataOpen ? "text-white" : ""}`}
                        />
                      </Link>

                      {/* SIDE SUBMENU */}
                      {isDataOpen && (
                        <div className="absolute top-0 left-[calc(100%-2px)] w-72 bg-white shadow-lg rounded-md p-2 transition-all duration-200 ease-out">
                          {dataSubMenu.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="block px-4 py-2 rounded-md hover:bg-gray-100 transition"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* DATA SERVICES MAIN ITEM */}
                    <div
                      className="relative"
                      onMouseEnter={() => setIsDataServicesOpen(true)}
                      onMouseLeave={() => setIsDataServicesOpen(false)}
                    >
                      <Link
                        to="/dataservices"
                        className={`flex justify-between items-center px-4 py-2 rounded-md transition
                        ${
                          isDataServicesOpen
                            ? "bg-blue-600 text-white"
                            : "hover:bg-blue-600 hover:text-white"
                        } w-full`}
                      >
                        Data Services
                        <ChevronRight
                          size={16}
                          className={`${isDataServicesOpen ? "text-white" : ""}`}
                        />
                      </Link>

                      {/* SIDE SUBMENU */}
                      {isDataServicesOpen && (
                        <div className="absolute top-0 left-[calc(100%-2px)] w-72 bg-white shadow-lg rounded-md p-2 transition-all duration-200 ease-out">
                          {dataServicesSubMenu.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="block px-4 py-2 rounded-md hover:bg-gray-100 transition"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* OTHER SERVICES */}
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-2 rounded-md hover:bg-gray-100 transition"
                      >
                        {service.label}
                      </Link>
                    ))}

  </div>
)}
              </div>

              <Link to="/ourwork" className={`${navTextStyle} hover:text-sky-500`}>
                Our Work
              </Link>

              <Link to="/contact" className={`${navTextStyle} hover:text-sky-500`}>
                Contact
              </Link>

              <Link to="/careers" className={`${navTextStyle} hover:text-sky-500`}>
                Careers
              </Link>

              <Button asChild className="bg-sky-500 hover:bg-sky-600 text-white">
                <Link to="/contact#contact-form">Get Started</Link>
              </Button>

            </div>

            {/* MOBILE BUTTON */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-white px-4 py-3 space-y-1">
            <Link
              to="/homepagecontent"
              onClick={closeMobileMenu}
              className="block px-2 py-2 rounded-md hover:bg-gray-100"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="block px-2 py-2 rounded-md hover:bg-gray-100"
            >
              About
            </Link>

            <button
              type="button"
              onClick={() => setIsServicesOpen((prev) => !prev)}
              className="w-full flex items-center justify-between px-2 py-2 rounded-md hover:bg-gray-100"
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isServicesOpen && (
              <div className="pl-2 space-y-1">
                <Link
                  to="/dataanalytics"
                  onClick={closeMobileMenu}
                  className="block px-2 py-2 rounded-md hover:bg-gray-100"
                >
                  Data Analytics
                </Link>
                {dataSubMenu.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeMobileMenu}
                    className="block px-5 py-2 text-sm rounded-md hover:bg-gray-100"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/dataservices"
                  onClick={closeMobileMenu}
                  className="block px-2 py-2 rounded-md hover:bg-gray-100"
                >
                  Data Services
                </Link>
                {dataServicesSubMenu.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeMobileMenu}
                    className="block px-5 py-2 text-sm rounded-md hover:bg-gray-100"
                  >
                    {item.label}
                  </Link>
                ))}
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={closeMobileMenu}
                    className="block px-2 py-2 rounded-md hover:bg-gray-100"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              to="/ourwork"
              onClick={closeMobileMenu}
              className="block px-2 py-2 rounded-md hover:bg-gray-100"
            >
              Our Work
            </Link>
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="block px-2 py-2 rounded-md hover:bg-gray-100"
            >
              Contact
            </Link>
            <Link
              to="/careers"
              onClick={closeMobileMenu}
              className="block px-2 py-2 rounded-md hover:bg-gray-100"
            >
              Careers
            </Link>

            <Button asChild className="w-full bg-sky-500 hover:bg-sky-600 text-white mt-2">
              <Link to="/contact#contact-form" onClick={closeMobileMenu}>
                Get Started
              </Link>
            </Button>
          </div>
        )}
      </nav>

      <div className={NAVBAR_HEIGHT} />
    </>
  );
};

export default Navigation;
