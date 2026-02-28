import React, { useState } from "react";

import vagtha from "../assets/vagtha1.webp";
import sumana from "../assets/sumana1.webp";
import dentist from "../assets/dentist1.webp";
import flowershopImg from "../assets/flowershop1.webp";
import saloonImg from "../assets/saloon1.webp";

import ptrImg from "../assets/ptr1.webp";
import sonaImg from "../assets/sona1.webp";
import goldenratioImg from "../assets/goldenratio1.webp";
import vibrantImg from "../assets/vibrantpropmart.png";
import dharaniImg from "../assets/dharaniforms.png";
import ishaaImg from "../assets/ishaasilks.png";

type Project = {
  name: string;
  category: string;
  image: string;
  url: string;
};

const projects: Project[] = [
  {
    name: "Vagtha Women Fashion",
    category: "Ecommerce Development",
    image: vagtha,
    url: "https://www.vagtha.com/",
  },
  {
    name: "Sumanaa Fashion",
    category: "Ecommerce Development",
    image: sumana,
    url: "http://sumanaaclothing.com/",
  },
  {
    name: "PTR Infracons",
    category: "HTML Web Design",
    image: ptrImg,
    url: "https://ptrinfracons.com/",
  },
  {
    name: "Sona Interiors",
    category: "HTML Web Design",
    image: sonaImg,
    url: "https://www.sonainteriors.co.in/",
  },
  {
    name: "Golden Ratio Interiors",
    category: "HTML Web Design",
    image: goldenratioImg,
    url: "https://goldenratioprofile.com/",
  },
  {
    name: "VibrantPropMart",
    category: "HTML Web Design",
    image: vibrantImg,
    url: "https://vibrantpropmart.com/",
  },
  {
    name: "DharaniForms",
    category: "HTML Web Design",
    image: dharaniImg,
    url: "https://dharani-farms.vercel.app/",
  },
  {
    name: "Ishaa Silks",
    category: "HTML Web Design",
    image: ishaaImg,
    url: "https://isha-silks.vercel.app/",
  },
  {
    name: "Dental Clinic Website",
    category: "HTML Web Design",
    image: dentist,
    url: "https://dental.wasmer.app/",
  },
  {
    name: "Flower Bouquet Website",
    category: "Ecommerce Development",
    image: flowershopImg,
    url: "https://flower.wasmer.app/",
  },
  {
    name: "Saloon Website",
    category: "WordPress Development",
    image: saloonImg,
    url: "https://beautysaloon.wasmer.app/",
  },
];

const allCategories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

const OurWork: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="our-work"
      className="relative w-full pt-24 pb-12 px-4 sm:px-6 lg:px-8 scroll-mt-24
      bg-gradient-to-b from-[#f5f5f7] via-[#ececf0] to-[#f3f3f4]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
            Our Work
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            A curated selection of live websites and ecommerce experiences
            crafted for fashion brands, interiors, clinics and local businesses.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {allCategories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={[
                  "px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-medium border transition-all duration-200",
                  isActive
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300",
                ].join(" ")}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <a
              key={project.url}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <article
                className="flex flex-col overflow-hidden rounded-xl
                border border-slate-200 bg-white
                shadow-sm transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl"
              >

                {/* IMAGE */}
                <div className="relative w-full h-56 overflow-hidden">
                  
                  {/* Light Zoom Image */}
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="w-full h-full object-cover
                               transition-transform duration-500
                               group-hover:scale-105"
                  />

                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 
                                  group-hover:bg-black/20 
                                  transition-all duration-300"></div>

                  {/* Category Badge (ONLY ON HOVER) */}
                  <div className="absolute top-3 right-3
                                  opacity-0 translate-y-2
                                  group-hover:opacity-100
                                  group-hover:translate-y-0
                                  transition-all duration-300">
                    <span className="rounded-full bg-white px-3 py-1 text-[10px] font-medium text-slate-700 shadow">
                      {project.category}
                    </span>
                  </div>

                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-2">
                    {project.name}
                  </h3>

                  <p className="text-xs text-slate-500 mb-4 flex-1">
                    Clean, responsive and conversion-focused design tailored to
                    the brand&apos;s audience.
                  </p>

                  <div className="mt-auto pt-2 flex items-center justify-between border-t border-slate-200">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 uppercase">
                        Live Project
                      </span>
                    </div>

                    <span
                      className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5
                      text-xs font-semibold text-white bg-slate-900
                      transition-all duration-300 group-hover:bg-black"
                    >
                      Visit Website ↗
                    </span>
                  </div>
                </div>

              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;