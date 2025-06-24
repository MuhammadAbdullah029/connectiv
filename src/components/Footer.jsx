import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Facebook,
  XIcon,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const services = [
    {
      id: "social-media-marketing",
      title: "Social Media Marketing",
    },
    {
      id: "website-development",
      title: "Website Development",
    },
    {
      id: "seo-google-marketing",
      title: "SEO & Google Marketing",
    },
    {
      id: "cold-calling",
      title: "Cold Calling",
    },
    {
      id: "digital-strategy",
      title: "Digital Strategy",
    },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    // { name: 'Portfolio', href: '/portfolio' },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/usconnectiv/",
      name: "Facebook",
    },
    // { icon: XIcon, href: '#', name: 'X' },
    {
      icon: Instagram,
      href: "https://www.instagram.com/connectiv.us/",
      name: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/connective-us",
      name: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="footer-gradient">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-4xl font-bold text-white fn">
                  Connectiv
                </span>
              </div>
              <p className="text-white/80 mb-6">
                We help businesses grow by handling their complete digital
                presence, so they can focus on what they do best.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-[#146aff] transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Our Services
              </h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.id}>
                    <Link
                      to={`/services#${service.id}`}
                      className="text-white/70 hover:text-[#17c7fb] transition-colors duration-200"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white/70 hover:text-[#17c7fb] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Get in Touch
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-[#17c7fb]" />
                  <span className="text-white/80">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-[#17c7fb]" />
                  <span className="text-white/80">teams@connectiv.us</span>
                </div>
                <div className="flex space-x-3">
                  <MapPin size={40} className="text-[#17c7fb]" />
                  <span className="text-white/80">
                    <strong>Pakistan office:</strong> 352M, Model Town Lahore,
                    Pakistan , <br />
                    <strong>US Location:</strong> 1301 W.Forrest Grove Rd
                    Building #3 Vineland, NJ 08360
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 bg-[#146aff] ">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm">
              © 2025 Connectiv. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="#"
                className="text-white/70 hover:text-[#17c7fb] text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="text-white/70 hover:text-[#17c7fb] text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
