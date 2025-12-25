import React from 'react';
import { Card } from '../components/ui/card';
import { Target, Eye, Award, Heart, Users, BookOpen } from 'lucide-react';
import { schoolInfo } from '../mock';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg"
            alt="School Building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-pink-600/85"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            About Us
          </h1>
          <p className="text-xl text-white/90">
            Nurturing excellence, inspiring futures
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-orange-50 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {schoolInfo.mission}
              </p>
            </Card>

            <Card className="p-8 border-2 hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-pink-50 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {schoolInfo.vision}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Care & Compassion',
                description: 'We create a nurturing environment where every child feels valued, safe, and supported to reach their full potential.',
                color: 'from-red-500 to-pink-600'
              },
              {
                icon: BookOpen,
                title: 'Quality Education',
                description: 'We are committed to delivering CBSE-aligned education that emphasizes conceptual understanding and practical application.',
                color: 'from-orange-500 to-yellow-600'
              },
              {
                icon: Users,
                title: 'Holistic Development',
                description: 'We focus on developing well-rounded individuals through academics, sports, arts, and character building activities.',
                color: 'from-purple-500 to-pink-600'
              }
            ].map((value, index) => (
              <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 border-2 bg-white hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Management */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Leadership
            </h2>
            <p className="text-xl text-gray-600">
              Visionary leadership driving excellence in education
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-10 border-2 hover:shadow-2xl transition-all bg-gradient-to-br from-white to-orange-50">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-pink-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl">
                  <span className="text-5xl font-bold text-white">{schoolInfo.managingDirector.charAt(4)}</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{schoolInfo.managingDirector}</h3>
                <p className="text-lg text-orange-600 font-semibold mb-6">Managing Director</p>
                <p className="text-gray-700 leading-relaxed">
                  With a vision to provide quality education accessible to all, our Managing Director has been instrumental in establishing Sparkle Kids International School as a beacon of excellence in the region. Under their leadership, the school has grown to become a trusted institution for hundreds of families.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CBSE Affiliation */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 mb-6">
                <Award className="w-5 h-5 text-yellow-300" />
                <span className="text-white font-semibold">Officially Recognized</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                CBSE Affiliated School
              </h2>
              <p className="text-xl text-white/90 mb-6">
                {schoolInfo.affiliation}
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                As a CBSE-affiliated institution, we follow the nationally recognized curriculum that ensures our students receive education that meets the highest standards. Our affiliation guarantees quality education and opens doors to opportunities across India and beyond.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-3xl"></div>
              <img
                src="https://images.pexels.com/photos/5212342/pexels-photo-5212342.jpeg"
                alt="Classroom Learning"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Campus Life
            </h2>
            <p className="text-xl text-gray-600">
              A glimpse into our vibrant learning environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              src="https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg"
              alt="Students with Technology"
              className="rounded-2xl shadow-xl w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg"
              alt="Art Activities"
              className="rounded-2xl shadow-xl w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754"
              alt="Happy Learning"
              className="rounded-2xl shadow-xl w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;