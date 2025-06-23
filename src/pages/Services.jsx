import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { pservices } from "../data/Data";
import { CheckCircle, ArrowRight } from "lucide-react";

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = location.hash.replace("#", "");
      const service = document.getElementById(element);
      if (service) {
        setTimeout(() => {
          const yOffset = -180;
          const y =
            service.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
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
              Our <span className="gradient-text fn">Services</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Complete digital marketing solutions designed to grow your
              business. From strategy to execution, we handle everything so you
              can focus on what you do best.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {pservices.map((service, index) => (
              <motion.div
                id={service.id}
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                      <service.icon className="text-[#146aff]" size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-xl text-gray-600 mb-8">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        What We Do
                      </h3>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center">
                            <CheckCircle
                              className="text-[#146aff] mr-2 flex-shrink-0"
                              size={16}
                            />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Benefits
                      </h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center">
                            <CheckCircle
                              className="text-[#17c7fb] mr-2 flex-shrink-0"
                              size={16}
                            />
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className={
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }
                >
                  <div className="bg-white rounded-2xl shadow-2xl p-8">
                    <div className="text-center">
                      <div className="w-24 h-24 stats-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                        <service.icon className="text-white" size={40} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Ready to Get Started?
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Let's discuss how {service.title.toLowerCase()} can help
                        grow your business.
                      </p>
                      <Link to="/quote" className="btn-primary">
                        Get Free Quote
                        <ArrowRight size={20} className="ml-2 inline" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
