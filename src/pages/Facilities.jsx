import React from 'react';
import { Card } from '../components/ui/card';
import { highlights } from '../mock';

const Facilities = () => {
  const iconMap = {
    bus: '🚌',
    building: '🏫',
    flask: '🔬',
    trophy: '🏆',
    award: '🎓',
    blocks: '🧩',
    monitor: '💻',
    leaf: '🌿'
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg"
            alt="School Facilities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-pink-600/85"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            World-Class Facilities
          </h1>
          <p className="text-xl text-white/90">
            Modern infrastructure for comprehensive development
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art infrastructure designed to provide the best learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((facility, index) => (
              <Card key={facility.id} className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-orange-300 bg-gradient-to-br from-white to-orange-50 hover:-translate-y-2">
                <div className="text-6xl mb-6">
                  {iconMap[facility.icon]}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{facility.title}</h3>
                <p className="text-gray-700 leading-relaxed">{facility.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Campus Gallery
            </h2>
            <p className="text-xl text-gray-600">
              A visual tour of our beautiful campus
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <img
              src="https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg"
              alt="School Building"
              className="rounded-2xl shadow-xl w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://images.pexels.com/photos/939702/pexels-photo-939702.jpeg"
              alt="Students Outdoors"
              className="rounded-2xl shadow-xl w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg"
              alt="Art Activities"
              className="rounded-2xl shadow-xl w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754"
              alt="Classroom"
              className="rounded-2xl shadow-xl w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://images.pexels.com/photos/5212342/pexels-photo-5212342.jpeg"
              alt="Interactive Learning"
              className="rounded-2xl shadow-xl w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg"
              alt="Technology Lab"
              className="rounded-2xl shadow-xl w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
