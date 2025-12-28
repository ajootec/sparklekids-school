import React from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle
} from "lucide-react";
import { schoolInfo } from "../mock";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
            <div className="relative w-14 h-14 bg-white rounded-2xl flex items-center justify-center transform group-hover:scale-105 transition-transform shadow-lg overflow-hidden">
            {/* <Sparkles className="w-6 h-6" /> */}
                <img
                  src={require('../assets/images/logo.png')}
                  alt="Sparkle Kids Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">Sparkle Kids</span>
                <span className="text-xs text-orange-400 font-semibold tracking-wider">
                  INTERNATIONAL SCHOOL
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Igniting young minds and shaping bright futures through quality
              education since establishment.
            </p>
            <div className="flex space-x-3">
              <a
                target="_BLANK"
                href="https://www.facebook.com/sparklekids2016"
                className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-500 hover:to-pink-600 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                target="_BLANK"
                href="https://instagram.com/sparkle_kids_international"
                className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-500 hover:to-pink-600 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                target="_BLANK"
                href="https://www.youtube.com/channel/UCNRDxk3JjQH1PLhxpR8qB2w"
                className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-500 hover:to-pink-600 transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                target="_BLANK"
                href="https://wa.me/+9765262728"
                className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-500 hover:to-pink-600  transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 group-hover:w-3 transition-all"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 group-hover:w-3 transition-all"></span>
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/facilities"
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 group-hover:w-3 transition-all"></span>
                  Facilities
                </Link>
              </li>
              <li>
                <Link
                  to="/admissions"
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 group-hover:w-3 transition-all"></span>
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 group-hover:w-3 transition-all"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  {schoolInfo.address}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  {schoolInfo.phone}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm break-all">
                  {schoolInfo.email}
                </span>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Office Hours
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">
                    {schoolInfo.officeHours}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">Sunday: Closed</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-gradient-to-br from-orange-500/10 to-pink-500/10 rounded-xl border border-orange-500/20">
                <p className="text-orange-400 font-semibold text-sm mb-1">
                  CBSE Affiliated
                </p>
                <p className="text-gray-400 text-xs">Affiliation No. 1131371</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Sparkle Kids International School. All rights
              reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2 md:mt-0">
              Managed by: {schoolInfo.managingDirector}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
