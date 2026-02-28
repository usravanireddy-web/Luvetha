import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Youtube,
  MessageCircle,
} from "lucide-react";
import logo from "@/assets/lvbg.png";

const Footer: React.FC = () => {
  return (
    <>
      {/* ================= CTA STRIP ================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#3b82f6] to-[#38bdf8]">

        {/* Large Soft Diagonal Shape */}
        <div
          className="absolute left-0 top-0 h-full w-72 bg-[#dbeafe]"
          style={{
            clipPath: "polygon(0 0, 65% 0, 45% 100%, 0% 100%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">

          {/* TEXT */}
          <div className="text-center md:text-left md:ml-20">
            <h3 className="text-white text-3xl md:text-4xl font-semibold">
              Want to Discuss About a New Project
            </h3>
            <p className="text-white/90 text-sm md:text-base mt-3">
              Thanks for getting in touch! Let’s discuss your project. When are
              you available?
            </p>
          </div>

          {/* BUTTON */}
          <Link
            to="/contact"
            className="mt-6 md:mt-0 bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-sky-100 transition shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#f8fafc] text-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

            {/* ===== COMPANY INFO ===== */}
            <div>
              <img src={logo} alt="Luvetha" className="w-40 mb-5" />

              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Luvetha Tech Solutions Private Limited delivers UI/UX design,
                web & mobile application development, digital marketing, cloud,
                and security services across India and globally.
              </p>

              <div className="flex gap-4">
                <SocialIcon brand="linkedin" />
                <SocialIcon brand="instagram" />
                <SocialIcon brand="youtube" />
                <SocialIcon brand="whatsapp" />
              </div>
            </div>

            {/* ===== QUICK LINKS ===== */}
            <FooterColumn title="Quick Links">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/ourwork">Our Work</FooterLink>
              <FooterLink to="/contact">Contact Us</FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
              <FooterLink to="/privacypolicy">Privacy Policy</FooterLink>
            </FooterColumn>

            {/* ===== SERVICES ===== */}
            <FooterColumn title="Services">
              <FooterLink to="/webdevelopment">Web Development</FooterLink>
              <FooterLink to="/mobileapps">Mobile Apps</FooterLink>
              <FooterLink to="/digitalmarketing">Digital Marketing</FooterLink>
              <FooterLink to="/dataservices">Data Services</FooterLink>
              <FooterLink to="/dataanalytics">Data Analytics</FooterLink>
              <FooterLink to="/databasemaintenance">Database Maintenance</FooterLink>
              <FooterLink to="/retailservices">Retail Services</FooterLink>
              <FooterLink to="/itconsulting">IT Consulting</FooterLink>
            </FooterColumn>

            {/* ===== CONTACT ===== */}
            <div>
              <FooterTitle title="Contact Us" />

              <div className="space-y-3 text-sm text-gray-600">

                {/* PHONE */}
                <div className="flex items-start gap-3 hover:text-[#38bdf8] transition">
                  <Phone className="text-[#38bdf8] mt-1" size={18} />
                  <div className="flex flex-col">
                    <a href="tel:+919000204921">+91 9000204921</a>
                    <a href="tel:+919000204857">+91 9000204857</a>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-3 hover:text-[#38bdf8] transition">
                  <Mail className="text-[#38bdf8] mt-1" size={18} />
                  <div className="flex flex-col">
                    <a href="mailto:info@luvethatech.com">
                      info@luvethatech.com
                    </a>
                    <a href="mailto:lakshamareddy@luvetha.com">
                      lakshamareddy@luvetha.com
                    </a>
                  </div>
                </div>

                {/* ADDRESS */}
                <div className="flex items-start gap-3 hover:text-[#38bdf8] transition">
                  <MapPin className="text-[#38bdf8] mt-1" size={50} />
                  <a
                    href="https://maps.app.goo.gl/RHc7ywR3t8nha67r8?g_st=com.google.maps.preview.copy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Flat No: 202, Anasuyaa Nilayam,
                    Plot No: 10, Vivekananda Nagar Colony,
                    Kukatpally, Hyderabad – 500072
                  </a>
                </div>

                {/* REMOTE */}
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#38bdf8]" size={19} />
                  <span>Remote Services Worldwide</span>
                </div>

              </div>
            </div>

          </div>

          {/* ===== BOTTOM ===== */}
          <div className="border-t border-gray-300 mt-16 pt-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Luvetha Tech Solutions Pvt Ltd. All rights reserved.
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;

/* ================= SUB COMPONENTS ================= */

const FooterTitle = ({ title }: { title: string }) => (
  <h3 className="text-lg font-semibold mb-6 relative inline-block text-gray-800">
    {title}
    <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#38bdf8]" />
    <span className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-2 h-2 bg-[#38bdf8] rounded-full" />
  </h3>
);

const FooterColumn = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <FooterTitle title={title} />
    <ul className="space-y-3 text-sm text-gray-600">{children}</ul>
  </div>
);

const FooterLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <li>
    <Link to={to} className="hover:text-[#38bdf8] transition">
      {children}
    </Link>
  </li>
);

const SocialIcon = ({ brand }: { brand: string }) => {
  const map: any = {
    linkedin: {
      icon: <Linkedin />,
      color: "bg-[#0A66C2]",
      link: "https://www.linkedin.com/company/luvetha-tech-solutions-pvt-ltd/",
    },
    instagram: {
      icon: <Instagram />,
      color:
        "bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#515bd4]",
      link: "https://www.instagram.com/luvetha_tech_solutions",
    },
    youtube: {
      icon: <Youtube />,
      color: "bg-[#FF0000]",
      link: "https://www.youtube.com/@luvethatechsolutions",
    },
    whatsapp: {
      icon: <MessageCircle />,
      color: "bg-[#25D366]",
      link: "https://wa.me/919000204921",
    },
  };

  return (
    <a
      href={map[brand].link}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-2 rounded-md text-white ${map[brand].color} hover:scale-105 transition`}
    >
      {map[brand].icon}
    </a>
  );
};
