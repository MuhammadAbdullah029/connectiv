import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Services", href: "/services" },
    // { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="stats-gradient text-white py-2 px-4 text-sm">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>teams@connectiv.us</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Ready to grow your business? Let's connect!</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg"
            : "bg-white/95 backdrop-blur-sm"
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="container-custom">
          <div className="flex justify-between items-center py-4 px-4 md:px-0">
            {/* Logo */}
            <Link
              to="/"
              className="overflow-hidden flex items-center space-x-2 px-4 md:px-2  md:ml-0 w-44 sm:w-40 md:w-48 lg:w-56 h-16 md:h-20"
            >
              <img
                className="w-full h-full object-contain scale-[2.3] md:scale-[2.5] "
                src="/connective_logo.png"
                alt="logo"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors duration-200 ${location.pathname === item.href
                      ? "gradient-text"
                      : "text-gray-700 hover:text-[#146aff]"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/quote" className="btn-primary">
                Get Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#146aff] hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            className={`lg:hidden ${isOpen
                ? "block px-4 pointer-events-auto"
                : "hidden pointer-events-none"
              }`}
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: isOpen ? 1 : 0, maxHeight: isOpen ? 500 : 0 }}
            transition={{ duration: 0.3 }}
            aria-hidden={!isOpen}
          >
            <div className="py-4 space-y-4 border-t border-gray-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block font-medium transition-colors duration-200 ${location.pathname === item.href
                      ? "gradient-text"
                      : "text-gray-700 hover:text-[#146aff]"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/quote"
                className="btn-primary inline-block"
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        </nav>
      </motion.header>
    </>
  );
};

export default Header;
