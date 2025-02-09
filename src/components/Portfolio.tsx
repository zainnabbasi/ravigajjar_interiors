import React, { useState } from "react";
import { Eye } from "lucide-react";
import ProjectDetail from "./ProjectDetail";
import { projects } from "../data/portfolio";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "hospitality", label: "Hospitality" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-4">
            <div className="h-[1px] w-12 bg-secondary" />
            <span className="text-sm tracking-widest uppercase text-gray-500">
              Our Portfolio
            </span>
            <div className="h-[1px] w-12 bg-secondary" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif text-primary leading-tight">
            Masterpieces of Design
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of thoughtfully crafted spaces, where each
            project tells its own unique story of transformation and excellence.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent
                  transition-all duration-500 ${
                    hoveredProject === project.id ? "opacity-100" : "opacity-0"
                  }`}
              >
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500">
                  <h3 className="text-2xl font-serif mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-200 mb-4">
                    {project.description}
                  </p>
                  <button className="flex items-center space-x-2 text-secondary group/btn">
                    <span>View Project</span>
                    <Eye className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Portfolio;