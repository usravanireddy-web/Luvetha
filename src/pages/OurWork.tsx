import React, { useState } from "react";
import cosemeticImg from "../assets/Cosmetic.png";
import flowershopImg from "../assets/flowershop.png";
import saloonImg from "../assets/saloon.png";
import aqua from "../assets/aqua.jpg";
import newschannelImg from "../assets/newschannelImg.jpg";
type Project = {
  title: string;
  category: string;
  image: string;
  url: string;
};

const projects: Project[] = [
  { title: "Dental Clinic Website", category: "HTML Web Design", image:cosemeticImg, url: "https://your-dental-website.com" },
  { title: "Flower Bouquet Shop", category: "Ecommerce Development", image:flowershopImg, url: "https://your-flower-website.com" },
  { title: "Salon Website", category: "WordPress Development", image:saloonImg, url: "https://your-salon-website.com" },
  { title: "Aqua Water Website", category: "HTML Web Design", image: aqua, url: "https://your-news-website.com" },
  { title: "News Channel Website", category: "HTML Web Design ", image: newschannelImg, url: "https://your-landing-page.com" },
];

const categories = [
  "All",
  "HTML Web Design",
  "WordPress Development",
  "PHP Development",
  "Ecommerce Development",
];

const OurWork: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Our Work</h2>

      {/* Category Filter */}
      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              activeCategory === cat
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div key={index} className="relative group rounded-lg overflow-hidden shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-lg font-bold mb-2">{project.title}</h3>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200"
              >
                Visit Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWork;
