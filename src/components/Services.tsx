import React from 'react';
import { 
  Paintbrush, 
  Building2, 
  HomeIcon, 
  Coffee,
  PenTool,
  Lightbulb
} from 'lucide-react';

const services = [
  {
    icon: HomeIcon,
    title: "Residential Design",
    description: "Transform your living spaces into personalized sanctuaries that reflect your unique style and enhance your daily life."
  },
  {
    icon: Building2,
    title: "Commercial Projects",
    description: "Create impactful commercial spaces that boost productivity and leave lasting impressions on clients and employees."
  },
  {
    icon: Coffee,
    title: "Hospitality Design",
    description: "Design immersive hospitality environments that deliver unforgettable experiences and exceed guest expectations."
  },
  {
    icon: Paintbrush,
    title: "Interior Styling",
    description: "Elevate your space with our expert styling services, from color schemes to furniture selection and arrangement."
  },
  {
    icon: PenTool,
    title: "Custom Furniture",
    description: "Commission bespoke furniture pieces that perfectly complement your space and reflect your personal style."
  },
  {
    icon: Lightbulb,
    title: "Lighting Design",
    description: "Enhance ambiance and functionality with carefully planned lighting solutions that bring your space to life."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="h-[1px] w-12 bg-secondary" />
            <span className="text-sm tracking-widest uppercase text-gray-500">Our Services</span>
            <div className="h-[1px] w-12 bg-secondary" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-6">
            Comprehensive Design Solutions
          </h2>
          <p className="text-gray-600">
            From concept to completion, we offer a full range of interior design and architectural 
            services tailored to your unique vision and requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="inline-block p-4 bg-primary/5 rounded-lg group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;