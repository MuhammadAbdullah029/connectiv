import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  TrendingUp,
  Users,
  DollarSign,
  ArrowRight,
  Filter,
} from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "social", label: "Social Media" },
    { id: "website", label: "Websites" },
    { id: "seo", label: "SEO" },
    { id: "complete", label: "Complete Solutions" },
  ];

  const projects = [
    {
      id: 1,
      title: "TechStart Inc.",
      category: "complete",
      image: "./roberto-cortese-ejhjSZKTeeg-unsplash (1) (1).jpg",
      description: "Complete digital transformation for a B2B tech startup",
      services: ["Website Development", "Social Media", "SEO", "Cold Calling"],
      results: [
        { metric: "Lead Increase", value: "300%" },
        { metric: "Website Traffic", value: "250%" },
        { metric: "Social Engagement", value: "400%" },
      ],
      testimonial:
        "Konnective transformed our entire digital presence. We went from struggling to get leads to having more qualified prospects than we can handle.",
      client: "Sarah Johnson, CEO",
    },
    {
      id: 2,
      title: "Local Restaurant Chain",
      category: "social",
      image: "./roberto-cortese-ejhjSZKTeeg-unsplash (1) (1).jpg",
      description:
        "Social media marketing campaign for local restaurant expansion",
      services: [
        "Social Media Marketing",
        "Content Creation",
        "Paid Advertising",
      ],
      results: [
        { metric: "Followers Growth", value: "500%" },
        { metric: "Online Orders", value: "180%" },
        { metric: "Brand Awareness", value: "320%" },
      ],
      testimonial:
        "Our social media presence went from non-existent to industry-leading. Customer engagement has never been higher.",
      client: "Mike Chen, Owner",
    },
    {
      id: 3,
      title: "E-commerce Fashion Store",
      category: "website",
      image: "./roberto-cortese-ejhjSZKTeeg-unsplash (1) (1).jpg",
      description:
        "Complete website redesign and optimization for online fashion retailer",
      services: [
        "Website Development",
        "E-commerce Integration",
        "UX/UI Design",
      ],
      results: [
        { metric: "Conversion Rate", value: "85%" },
        { metric: "Page Load Speed", value: "60%" },
        { metric: "Mobile Traffic", value: "200%" },
      ],
      testimonial:
        "The new website not only looks amazing but also converts visitors into customers at an incredible rate.",
      client: "Emily Davis, Founder",
    },
    {
      id: 4,
      title: "Professional Services Firm",
      category: "seo",
      image: "./roberto-cortese-ejhjSZKTeeg-unsplash (1) (1).jpg",
      description: "SEO optimization and Google Ads management for law firm",
      services: [
        "SEO Optimization",
        "Google Ads",
        "Local SEO",
        "Content Marketing",
      ],
      results: [
        { metric: "Search Rankings", value: "Top 3" },
        { metric: "Organic Traffic", value: "400%" },
        { metric: "Qualified Leads", value: "250%" },
      ],
      testimonial:
        "We now dominate local search results and get more qualified leads than ever before.",
      client: "David Wilson, Partner",
    },
    {
      id: 5,
      title: "Healthcare Practice",
      category: "complete",
      image: "./roberto-cortese-ejhjSZKTeeg-unsplash (1) (1).jpg",
      description: "Full digital marketing solution for medical practice",
      services: [
        "Website Development",
        "SEO",
        "Social Media",
        "Online Reputation",
      ],
      results: [
        { metric: "New Patients", value: "200%" },
        { metric: "Online Reviews", value: "4.9/5" },
        { metric: "Appointment Bookings", value: "150%" },
      ],
      testimonial:
        "Patient acquisition has never been easier. Our online presence now reflects the quality of care we provide.",
      client: "Dr. Lisa Martinez",
    },
    {
      id: 6,
      title: "Manufacturing Company",
      category: "website",
      image: "./roberto-cortese-ejhjSZKTeeg-unsplash (1) (1).jpg",
      description: "B2B website development and lead generation system",
      services: ["Website Development", "Lead Generation", "CRM Integration"],
      results: [
        { metric: "Lead Quality", value: "90%" },
        { metric: "Sales Cycle", value: "-40%" },
        { metric: "Revenue Growth", value: "180%" },
      ],
      testimonial:
        "The new website and lead system has streamlined our entire sales process.",
      client: "Robert Kim, Sales Director",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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
              Our <span className="gradient-text fn">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              See how we've helped businesses like yours achieve remarkable
              growth through strategic digital marketing solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? "bg-[#146aff] text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-50 shadow-md"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover"
              >
                {/* Project Image */}
                <div className="h-64 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 scale-[1.4] bg-primary-300 rounded-full flex items-center justify-center mx-auto mb-4">
                      <img
                        className="w-full h-full object-cover rounded-full"
                        src={project.image}
                        alt=""
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-[#146aff]">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-600 mb-6">{project.description}</p>

                  {/* Services */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Services Provided:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service) => (
                        <span
                          key={service}
                          className="bg-primary-100 text-[#146aff] px-3 py-1 rounded-full text-sm"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Results:
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      {project.results.map((result) => (
                        <div key={result.metric} className="text-center">
                          <div className="text-2xl font-bold text-[#146aff]">
                            {result.value}
                          </div>
                          <div className="text-sm text-gray-600">
                            {result.metric}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <p className="text-gray-600 italic mb-2">
                      "{project.testimonial}"
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      - {project.client}
                    </p>
                  </div>

                  {/* CTA */}
                  <Link to="/quote" className="w-full btn-primary text-center">
                    Start Your Success Story
                    <ArrowRight size={20} className="ml-2 inline" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-gradient text-white section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Results That Speak for Themselves
            </h2>
            <p className="text-xl text-primary-100">
              Aggregate results across all our client projects
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                metric: "285%",
                label: "Average Traffic Increase",
              },
              { icon: Users, metric: "340%", label: "Lead Generation Growth" },
              {
                icon: DollarSign,
                metric: "220%",
                label: "Revenue Improvement",
              },
              {
                icon: ExternalLink,
                metric: "95%",
                label: "Client Retention Rate",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={32} />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.metric}
                </div>
                <div className="text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Portfolio;
