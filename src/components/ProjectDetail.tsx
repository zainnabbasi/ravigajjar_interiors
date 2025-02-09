import React from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Project } from '../data/portfolio';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/90 z-50 overflow-y-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <button
          onClick={onClose}
          className="flex items-center space-x-2 text-white mb-8 hover:text-secondary transition"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Portfolio</span>
        </button>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-serif text-white mb-4">{project.title}</h1>
          <p className="text-xl text-gray-400">
            {project.location} • {project.year} • {project.category}
          </p>
        </div>

        {/* Image Gallery - Beautiful Grid Layout */}
        <div className="grid grid-cols-12 gap-4 mb-12">
          {/* Main Large Image */}
          <div className="col-span-12 md:col-span-8 aspect-w-16 aspect-h-9">
            <img 
              src={project.images[0]} 
              alt={`${project.title} - Main View`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {/* Side Images */}
          <div className="col-span-12 md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-4">
            {project.images.slice(1, 3).map((image, index) => (
              <div key={index} className="aspect-w-4 aspect-h-3">
                <img 
                  src={image}
                  alt={`${project.title} - View ${index + 2}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
          {/* Bottom Images */}
          <div className="col-span-12 grid grid-cols-2 gap-4">
            {project.images.slice(3, 5).map((image, index) => (
              <div key={index} className="aspect-w-16 aspect-h-9">
                <img 
                  src={image}
                  alt={`${project.title} - View ${index + 4}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div className="text-white space-y-12 max-w-4xl">
          <div>
            <h2 className="text-3xl font-serif mb-6">Project Overview</h2>
            <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
          </div>

          <div>
            <h3 className="text-2xl font-serif mb-4">The Challenge</h3>
            <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
          </div>

          <div>
            <h3 className="text-2xl font-serif mb-4">Our Solution</h3>
            <p className="text-gray-300 leading-relaxed">{project.solution}</p>
          </div>

          <div>
            <h3 className="text-2xl font-serif mb-6">Key Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <ChevronRight className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.testimonial && (
            <div className="bg-white/5 p-8 rounded-lg">
              <blockquote className="text-xl italic mb-6">
                "{project.testimonial.text}"
              </blockquote>
              <div>
                <p className="text-secondary font-semibold">{project.testimonial.author}</p>
                <p className="text-gray-400">{project.testimonial.position}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;