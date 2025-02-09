import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="py-32 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="h-[1px] w-12 bg-[#D1B527]" />
                <span className="text-sm tracking-widest uppercase text-gray-500">
                  About Us
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-serif text-[#8A383C] leading-tight">
                Creating spaces that evoke emotion & inspire life
              </h2>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-[#D1B527] pl-8 transition-all duration-300 hover:pl-10">
                <h3 className="text-2xl font-serif mb-3">The Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  At Ravi Gajjar Interior & Architects, we believe that every
                  space tells a story. Our vision is to create environments that
                  not only captivate the eye but touch the soul, transforming
                  ordinary spaces into extraordinary experiences.
                </p>
              </div>

              <div className="border-l-4 border-[#D1B527] pl-8 transition-all duration-300 hover:pl-10">
                <h3 className="text-2xl font-serif mb-3">The Journey</h3>
                <p className="text-gray-600 leading-relaxed">
                  With years of dedication to refined design excellence, we've
                  transformed countless spaces into masterpieces that reflect
                  our clients' dreams and aspirations, creating timeless
                  environments that inspire and endure.
                </p>
              </div>

              <div className="border-l-4 border-[#D1B527] pl-8 transition-all duration-300 hover:pl-10">
                <h3 className="text-2xl font-serif mb-3">Signature Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our design philosophy centers on the perfect balance of
                  aesthetics, functionality, and timeless artistry. Every
                  project is a unique canvas where innovation meets tradition,
                  creating spaces that transcend trends.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 relative z-10">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace"
                alt="Interior Designer at Work"
                className="object-cover rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-[#8A383C] text-white p-8 rounded-lg shadow-xl">
              <p className="text-3xl font-serif">15+</p>
              <p className="text-sm tracking-wider uppercase">
                Years of Excellence
              </p>
            </div>
            <div className="absolute -z-10 top-8 -right-8 w-full h-full border-2 border-[#D1B527] rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
