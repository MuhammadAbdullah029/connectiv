import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Heart,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { values, milestones } from "../data/Data";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-hidden"
    >
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="gradient-text fn">Connectiv</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're a passionate team of digital marketing experts dedicated to
              helping businesses grow and thrive in the digital world. Our
              mission is simple: take the pressure off business owners by
              handling their complete digital presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Connectiv, we're not just a marketing agency — we're your
                digital growth partner.
                <br />
                <br />
                We started with a simple idea: to help brands grow through
                creative and effective social media strategies. As we worked
                with more clients and gained experience, our vision started to
                grow too.
                <br />
                <br />
                Now, Connectiv is becoming a full digital solutions company.
                We’re building everything from websites and web apps to
                branding, content, and even tools for managing your business
                like accounting and automation.
                <br />
                <br />
                We’re all about turning ideas into action, connecting creativity
                with strategy, and helping businesses move forward with
                confidence.
              </p>
              <Link to="/contact" className="btn-primary">
                Work With Us
                <ArrowRight size={20} className="ml-2 inline" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle
                      className="text-[#146aff] mt-1 flex-shrink-0"
                      size={20}
                    />
                    <p className="text-gray-600">
                      Simplify digital marketing for business owners
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle
                      className="text-[#146aff] mt-1 flex-shrink-0"
                      size={20}
                    />
                    <p className="text-gray-600">
                      Deliver measurable results that drive real business growth
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle
                      className="text-[#146aff] mt-1 flex-shrink-0"
                      size={20}
                    />
                    <p className="text-gray-600">
                      Provide transparent, honest communication at every step
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle
                      className="text-[#146aff] mt-1 flex-shrink-0"
                      size={20}
                    />
                    <p className="text-gray-600">
                      Build long-term partnerships, not just client
                      relationships
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="gradient-bg section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we work
              with our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center card-hover"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-[#146aff]" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              From startup to industry leader - here's how we've grown
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center mb-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                  }`}
                >
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="text-[#146aff] font-bold text-lg mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {milestone.event}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-[#17c7fb] rounded-full flex-shrink-0 z-10"></div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="gradient-bg text-white section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's work together to transform your digital presence and grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Get Free Quote
                <ArrowRight size={20} className="ml-2 inline" />
              </Link>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section> */}
    </motion.div>
  );
};

export default About;
