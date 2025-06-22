import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Search, Tag, Clock } from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Posts" },
    { id: "social-media", label: "Social Media" },
    { id: "seo", label: "SEO" },
    { id: "web-design", label: "Web Design" },
    { id: "marketing-tips", label: "Marketing Tips" },
    { id: "case-studies", label: "Case Studies" },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "10 Social Media Marketing Trends to Watch in 2024",
      excerpt:
        "Stay ahead of the curve with these emerging social media trends that will shape digital marketing this year.",
      category: "social-media",
      author: "Sarah Kim",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "./roberto-cortese-ejhjSZKTeeg-unsplash (1) (1).jpg",
      featured: true,
    },
    {
      id: 2,
      title: "How to Improve Your Website's SEO in 30 Days",
      excerpt:
        "A step-by-step guide to boosting your search engine rankings with proven SEO strategies.",
      category: "seo",
      author: "Mike Johnson",
      date: "2024-01-12",
      readTime: "8 min read",
      image: "./roberto-cortese-ejhjSZKTeeg-unsplash (1) (1).jpg",
      featured: false,
    },
    {
      id: 3,
      title: "The Psychology of Color in Web Design",
      excerpt:
        "Learn how color choices impact user behavior and conversion rates on your website.",
      category: "web-design",
      author: "Emma Chen",
      date: "2024-01-10",
      readTime: "6 min read",
      image: "./roberto-cortese-ejhjSZKTeeg-unsplash (1) (1).jpg",
      featured: false,
    },
    {
      id: 4,
      title: "Case Study: How We Increased Client Leads by 300%",
      excerpt:
        "A detailed breakdown of our digital marketing strategy that tripled lead generation for a B2B client.",
      category: "case-studies",
      author: "Alex Rodriguez",
      date: "2024-01-08",
      readTime: "10 min read",
      image: "./roberto-cortese-ejhjSZKTeeg-unsplash (1) (1).jpg",
      featured: true,
    },
    {
      id: 5,
      title: "Email Marketing Best Practices for Small Businesses",
      excerpt:
        "Maximize your email marketing ROI with these proven strategies and tactics.",
      category: "marketing-tips",
      author: "Sarah Kim",
      date: "2024-01-05",
      readTime: "7 min read",
      image: "./roberto-cortese-ejhjSZKTeeg-unsplash (1) (1).jpg",
      featured: false,
    },
    {
      id: 6,
      title: "Local SEO: Dominating Your Geographic Market",
      excerpt:
        "Essential local SEO strategies to help your business rank higher in local search results.",
      category: "seo",
      author: "Mike Johnson",
      date: "2024-01-03",
      readTime: "9 min read",
      image: "./roberto-cortese-ejhjSZKTeeg-unsplash (1) (1).jpg",
      featured: false,
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

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
              Digital Marketing{" "}
              <span className="gradient-text fn">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Stay updated with the latest digital marketing trends, strategies,
              and insights to help grow your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#146aff]"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      selectedCategory === category.id
                        ? "bg-[#146aff] text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Featured Post */}
          {featuredPost && selectedCategory === "all" && !searchTerm && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-64 lg:h-auto bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <div className="text-center flex flex-col items-center justify-center gap-4">
                      <div className="w-20 h-20 scale-[1.5] bg-primary-300 rounded-full flex items-center justify-center mx-auto mb-4">
                        <img
                          className="w-full h-full object-cover rounded-full"
                          src="./roberto-cortese-ejhjSZKTeeg-unsplash (1) (1).jpg"
                          alt=""
                        />
                      </div>
                      <span className="text-[#146aff] font-semibold">
                        Featured Article
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <span className="bg-primary-100 text-[#146aff] px-3 py-1 rounded-full">
                        {
                          categories.find(
                            (cat) => cat.id === featuredPost.category
                          )?.label
                        }
                      </span>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User size={16} className="text-gray-400 mr-2" />
                        <span className="text-gray-600">
                          {featuredPost.author}
                        </span>
                      </div>
                      <Link
                        to={`/blog/${featuredPost.id}`}
                        className="text-[#146aff] font-semibold hover:text-[#17c7fb] flex items-center"
                      >
                        Read More
                        <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
              >
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <div className="text-center flex flex-col items-center justify-center gap-4">
                    <div className="w-16 h-16 scale-[1.5] bg-primary-300 rounded-full flex items-center justify-center mx-auto mb-2">
                      <img
                        loading="lazy"
                        className="w-full h-full object-cover rounded-full"
                        src={post.image}
                        alt=""
                      />
                    </div>
                    <span className="text-[#146aff] text-sm font-medium">
                      {
                        categories.find((cat) => cat.id === post.category)
                          ?.label
                      }
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User size={14} className="text-gray-400 mr-1" />
                      <span className="text-sm text-gray-600">
                        {post.author}
                      </span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-[#146aff] font-medium flex items-center text-sm hover:text-[#17c7fb]"
                    >
                      Read More
                      <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-gray-400 mb-4">
                <Search size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No articles found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default Blog;
