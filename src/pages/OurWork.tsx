import React, { useState } from "react";
import vagtha from "../assets/vagtha.png";
import sumana from "../assets/sumana.png";
import dentist from "../assets/dentist.jpg";
import flowershopImg from "../assets/flowershop.png";
import saloonImg from "../assets/saloon.png";
import aqua from "../assets/aqua.png";
import newschannelImg from "../assets/newschannelImg.jpg";

type Project = {
  Name: string;
  title: string;
  category: string;
  image: string;
  url: string;
};

const projects: Project[] = [
  {
    Name: "Vagtha Women Fashion ",
    title: "Vagtha Women Fashion ",
    category: "Ecommerce Development",
    image: vagtha,
    url: "https://www.vagtha.com/",
  },
  {
    Name: "Sumanaa Fashion",
    title: "Sumanaa Fashion",
    category: "Ecommerce Development",
    image: sumana,
    url: "http://sumanaaclothing.com/",
  },
  {
    Name: "Dental Clinic Website",
    title: "Dental Clinic Website",
    category: "HTML Web Design",
    image: dentist,
    url: "https://usravanireddy-web.github.io/Dental/",
  },
  {
    Name: "Flower Bouquet Website",
    title: "Flower Bouquet Shop",
    category: "Ecommerce Development",
    image: flowershopImg,
    url: "https://usravanireddy-web.github.io/Flower/",
  },
  {
    Name: "Saloon Website",
    title: "Saloon Website",
    category: "WordPress Development",
    image: saloonImg,
    url: "https://usravanireddy-web.github.io/BeautySaloon/",
  },
  {
    Name: "Aqua Water Website",
    title: "Aqua Water Website",
    category: "HTML Web Design",
    image: aqua,
    url: "https://usravanireddy-web.github.io/AquaWater/",
  },
  {
    Name: "News Paper Website",
    title: "News Channel Website",
    category: "HTML Web Design ",
    image: newschannelImg,
    url: "https://usravanireddy-web.github.io/News/",
  },
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
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden shadow-lg"
          >
            {/* Responsive Image Container */}
            <div className="w-full aspect-[16/9] bg-gray-100 flex items-center justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-lg font-bold mb-2">
                {project.title}
              </h3>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200"
              >
                Visit Website
              </a>
            </div>

            {/* Always Visible Name */}
            <div className="p-4 bg-white">
              <p className="text-center font-semibold text-gray-800">
                {project.Name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWork;
