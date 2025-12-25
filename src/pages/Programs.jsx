import React from 'react';
import { Card } from '../components/ui/card';
import { GraduationCap, Sparkles, Users, BookOpen } from 'lucide-react';
import { programs } from '../mock';

const Programs = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5212342/pexels-photo-5212342.jpeg"
            alt="Students Learning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/90 to-purple-600/85"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our Programs
          </h1>
          <p className="text-xl text-white/90">
            CBSE curriculum from Kindergarten to Secondary School
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-100 rounded-full px-4 py-2 mb-4">
              <GraduationCap className="w-5 h-5 text-orange-600" />
              <span className="text-orange-600 font-semibold text-sm">Educational Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Education for Every Stage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From foundational years to secondary education, we provide CBSE-aligned programs designed for holistic development
            </p>
          </div>

          <div className="space-y-8">
            {programs.map((program, index) => (
              <Card key={program.id} className={`p-8 lg:p-10 border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
                index % 2 === 0 ? 'bg-gradient-to-br from-white to-orange-50' : 'bg-gradient-to-br from-white to-pink-50'
              }`}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-1">
                    <div className={`w-20 h-20 bg-gradient-to-br ${
                      index % 3 === 0 ? 'from-orange-500 to-pink-600' :
                      index % 3 === 1 ? 'from-pink-500 to-purple-600' :
                      'from-purple-500 to-indigo-600'
                    } rounded-2xl flex items-center justify-center mb-6 shadow-xl`}>
                      {index === 0 ? <Sparkles className="w-10 h-10 text-white" /> :
                       index === 1 ? <BookOpen className="w-10 h-10 text-white" /> :
                       <Users className="w-10 h-10 text-white" />}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{program.level}</h3>
                    <p className="text-orange-600 font-semibold text-lg mb-4">{program.ageGroup}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {program.description}
                    </p>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Program Highlights:</h4>
                    <ul className="space-y-3">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700 text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Makes Us Special
            </h2>
            <p className="text-xl text-gray-600">
              Beyond academics - developing the whole child
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Co-Curricular Activities', desc: 'Art, music, dance, and drama programs', emoji: '🎨' },
              { title: 'Sports & Fitness', desc: 'Professional coaching in various sports', emoji: '⚽' },
              { title: 'Technology Integration', desc: 'Smart classrooms and computer labs', emoji: '💻' },
              { title: 'Personality Development', desc: 'Focus on confidence and leadership skills', emoji: '⭐' }
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 border-2 bg-white hover:-translate-y-2">
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Enroll Your Child Today
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Give your child the gift of quality education at Sparkle Kids
          </p>
          <a href="/admissions" className="inline-block bg-white text-orange-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-colors shadow-2xl">
            Start Admission Process
          </a>
        </div>
      </section>
    </div>
  );
};

export default Programs;