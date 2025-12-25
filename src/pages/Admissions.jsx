import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { CheckCircle2, FileText, ChevronRight } from 'lucide-react';
import { admissionProcess, requiredDocuments } from '../mock';

const Admissions = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f"
            alt="Students"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/90 to-blue-800/75"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Admissions
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Join our global learning community
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 shadow-2xl">
            Start Application
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Admissions Open Banner */}
      <section className="py-8 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl font-bold text-gray-900">
            🎓 Admissions Open for Academic Year 2025-26 🎓
          </p>
          <p className="text-gray-800 mt-2">Limited seats available - Apply now to secure your spot!</p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Admission Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, transparent, and student-friendly admission procedure
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-300 to-blue-600"></div>

            <div className="space-y-12">
              {admissionProcess.map((step, index) => (
                <div key={step.step} className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                  {/* Timeline dot */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full items-center justify-center z-10 shadow-lg">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>

                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'
                  }`}>
                    <Card className="p-6 hover:shadow-xl transition-all border-2 hover:border-blue-300">
                      <div className="flex items-start lg:hidden mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-white font-bold">{step.step}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        </div>
                      </div>
                      <h3 className="hidden lg:block text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{step.description}</p>
                    </Card>
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Required Documents
            </h2>
            <p className="text-xl text-gray-600">
              Please prepare the following documents for your application
            </p>
          </div>

          <Card className="p-8 bg-white border-2">
            <ul className="space-y-4">
              {requiredDocuments.map((doc, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700">{doc}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Important Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center border-2 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Age Criteria</h3>
              <p className="text-gray-700">
                Pre-Primary: 3+ years<br />
                Primary: 6+ years<br />
                Secondary: As per grade
              </p>
            </Card>

            <Card className="p-6 text-center border-2 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Application Fee</h3>
              <p className="text-gray-700">
                Non-refundable application processing fee of $100 (or equivalent)
              </p>
            </Card>

            <Card className="p-6 text-center border-2 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Assessment</h3>
              <p className="text-gray-700">
                Age-appropriate assessment and parent interview scheduled after application
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact our admissions team for personalized guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 shadow-2xl">
                Contact Admissions
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-900 text-lg px-8">
              Schedule Campus Tour
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;