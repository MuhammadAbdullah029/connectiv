import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Zap,
  Award,
  Users,
  CheckCircle,
  ArrowRight,
  Globe,
  Search,
  MessageCircle,
  BarChart3,
} from "lucide-react";

const Pricing = () => {
  const packages = [
    {
      name: "Starter",
      price: "$999",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "Social media management (2 platforms)",
        "Basic website maintenance",
        "Local SEO optimization",
        "Monthly reporting",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Growth",
      price: "$1,999",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Social media management (4 platforms)",
        "Website development/redesign",
        "SEO + Google Ads management",
        "Cold calling (50 calls/month)",
        "Bi-weekly reporting",
        "Phone support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$3,999",
      period: "/month",
      description: "Complete solution for established businesses",
      features: [
        "Full social media management",
        "Advanced website features",
        "Comprehensive SEO + PPC",
        "Cold calling (200 calls/month)",
        "Weekly reporting",
        "Dedicated account manager",
        "Priority support",
      ],
      popular: false,
    },
  ];

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
              Our <span className="gradient-text fn">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Complete digital marketing solutions designed to grow your
              business. From strategy to execution, we handle everything so you
              can focus on what you do best.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="gradient-bg section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible packages designed to meet your business needs and budget.
              All packages include our core services with varying levels of
              support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-lg p-8 relative ${
                  pkg.popular ? "ring-2 ring-[#17c7fb] transform scale-105" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#146aff] text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">
                      {pkg.price}
                    </span>
                    <span className="text-gray-600 ml-1">{pkg.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle
                        className="text-[#146aff] mr-3 flex-shrink-0"
                        size={16}
                      />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/quote"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 text-center block ${
                    pkg.popular
                      ? "btn-primary"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven process to ensure your digital marketing
              success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We learn about your business, goals, and target audience",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "We create a customized digital marketing strategy",
              },
              {
                step: "03",
                title: "Execution",
                description: "We implement and launch your campaigns",
              },
              {
                step: "04",
                title: "Optimization",
                description:
                  "We monitor, analyze, and continuously improve results",
              },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 footer-gradient text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Pricing;
