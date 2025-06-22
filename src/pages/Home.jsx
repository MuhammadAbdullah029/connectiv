import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Award,
  Zap,
} from "lucide-react";
import { services, stats, testimonials } from "../data/Data";

const Home = () => {
  const form = useRef();
  const [feedback, setFeedback] = useState({ message: "", type: "" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o94t3mc",
        "template_02bzb01",
        form.current,
        "yBH9UcZpErfjd9fdI"
      )
      .then(
        (result) => {
          setFeedback({
            message: "Thank you! Your message has been sent.",
            type: "success",
          });
        },
        (error) => {
          console.log(error.text);
          setFeedback({
            message: "Oops! Something went wrong. Please try again.",
            type: "error",
          });
        }
      );

    e.target.reset();
    setTimeout(() => setFeedback({ message: "", type: "" }), 4000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="gradient-bg section-padding min-h-screen flex items-center">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Grow Your Business with
                <span className="gradient-text block fn py-4">
                  Complete Digital Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We handle your entire digital presence so you can focus on
                running your business stress-free. From social media to
                websites, SEO to cold calling - we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/quote" className="btn-primary">
                  Get Free Quote
                  <ArrowRight size={20} className="ml-2 inline" />
                </Link>
                <Link to="/services" className="btn-secondary border-white">
                  Our Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="gradient-border">
                <div className="gradient-border-inner">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold gradient-text mb-2 fn">
                      Ready to Get Started?
                    </h3>
                    <p className="text-gray-600">
                      Get your free digital marketing audit
                    </p>
                  </div>

                  <form ref={form} onSubmit={sendEmail} className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                    />
                    <select
                      name="service"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                      required
                    >
                      <option value="">Select Service Interest</option>
                      <option value="Social Media Marketing">
                        Social Media Marketing
                      </option>
                      <option value="Website Development">
                        Website Development
                      </option>
                      <option value="SEO & Google Marketing">
                        SEO & Google Marketing
                      </option>
                      <option value="Cold Calling">Cold Calling</option>
                      <option value="Complete Digital Package">
                        Complete Digital Package
                      </option>
                    </select>

                    <button
                      type="submit"
                      className="w-full btn-primary justify-center"
                    >
                      Get Free Audit
                    </button>
                    {feedback.message && (
                      <div
                        className={`mt-2 text-center text-sm rounded-lg px-3 py-2 transition-all duration-300 ${
                          feedback.type === "success"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {feedback.message}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-gradient text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">
                  {stat.number}
                </div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete{" "}
              <span className="gradient-text fn">Digital Marketing</span>{" "}
              Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer everything you need to establish and grow your digital
              presence. No need to juggle multiple agencies - we handle it all.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl shadow-lg p-6 card-hover"
              >
                <div className="w-14 h-14 stats-gradient rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to={`/services#${service.id}`}
                  className="gradient-text font-medium hover:opacity-80 flex items-center transition-opacity"
                >
                  Learn More
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="gradient-bg section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from businesses we've
              helped grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-current"
                      size={20}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="stats-gradient text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
              Ready to Transform Your{" "}
              <span className="text-[#17c7fb] fn">Digital Presence</span>?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow">
              Join hundreds of businesses that trust us with their digital
              marketing. Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote" className="btn-primary">
                Get Free Quote
                <ArrowRight size={20} className="ml-2 inline" />
              </Link>
              <Link
                to="/contact"
                className="btn-secondary border-white text-white"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
