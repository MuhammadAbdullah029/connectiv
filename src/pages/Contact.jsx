import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  Calendar,
} from "lucide-react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const formRef = useRef();

  const onSubmit = (data) => {
    emailjs
      .sendForm(
        "service_o94t3mc",
        "template_02bzb01",
        formRef.current,
        "yBH9UcZpErfjd9fdI"
      )
      .then((result) => {
        console.log(result.text);
        setIsSubmitted(true);
        reset();
      })
      .catch((error) => {
        console.error(error.text);
        alert("Something went wrong!");
      });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+92 341 4129771",
      description: "Mon-Fri from 8am to 6pm EST",
    },
    {
      icon: Mail,
      title: "Email",
      details: "teams@connectiv.us",
      description: "We respond within 24 hours",
    },
    
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday",
      description: "8:00 AM - 6:00 PM EST",
    },
  ];

  const faqs = [
    {
      question: "How quickly can you start working on my project?",
      answer:
        "We can typically start within 1-2 weeks of signing the contract, depending on the scope of work and our current capacity.",
    },
    {
      question: "Do you work with businesses in my industry?",
      answer:
        "We work with businesses across all industries. Our strategies are customized to fit your specific market and audience.",
    },
    {
      question: "What makes Connectiv different from other agencies?",
      answer:
        "We offer complete digital marketing solutions under one roof, eliminating the need to coordinate between multiple agencies.",
    },
    {
      question: "How do you measure success?",
      answer:
        "We track key metrics that matter to your business: leads, conversions, revenue, and ROI. You'll receive regular reports showing your progress.",
    },
  ];

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
              Get in <span className="gradient-text fn">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to transform your digital presence? Let's discuss how we can
              help your business grow and thrive online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle
                      className="text-green-500 mx-auto mb-4"
                      size={64}
                    />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. We'll get back to you within
                      24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          name="firstName"
                          type="text"
                          {...register("firstName", {
                            required: "First name is required",
                          })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.firstName.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          {...register("lastName", {
                            required: "Last name is required",
                          })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.lastName.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid email address",
                          },
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        {...register("phone")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        {...register("company")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Services Interested In
                      </label>
                      <select
                        name="service"
                        {...register("service")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      >
                        <option value="">Select a service</option>
                        <option value="social-media">
                          Social Media Marketing
                        </option>
                        <option value="website">Website Development</option>
                        <option value="seo">SEO & Google Marketing</option>
                        <option value="cold-calling">Cold Calling</option>
                        <option value="complete">
                          Complete Digital Package
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        {...register("message", {
                          required: "Message is required",
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Tell us about your project and goals..."
                      ></textarea>
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <button type="submit" className="w-full btn-primary">
                      Send Message
                      <Send size={20} className="ml-2 inline" />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-8">
                  We're here to help you succeed. Reach out to us through any of
                  these channels and we'll get back to you as soon as possible.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-6"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <info.icon className="text-[#146aff]" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {info.title}
                    </h3>
                    <p className="text-gray-900 font-medium mb-1">
                      {info.details}
                    </p>
                    <p className="text-gray-600 text-sm">{info.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="gradient-bg section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="text-[#146aff] mx-auto mb-4" size={48} />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Visit Our Office
          </h3>
          <p className="text-gray-600 w-[91%]">
            <strong>Pakistan office:</strong> 352M, Model Town Lahore, Pakistan , <br/>
            <strong>US Location:</strong> 1301 W.Forrest Grove Rd Building #3 Vineland, NJ 08360
          </p>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
