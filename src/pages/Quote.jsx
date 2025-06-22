import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import {
  CheckCircle,
  ArrowRight,
  DollarSign,
  Calendar,
  Users,
  Target,
  Zap,
  Award,
} from "lucide-react";

const Quote = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const totalSteps = 4;

  const onSubmit = (data) => {
    // .sendForm(
    //   'service_o94t3mc',
    //   'template_nncr0hh',
    //   formRef.current,
    //   'yBH9UcZpErfjd9fdI'
    // )
    if (Array.isArray(data.services)) {
      data.services = data.services.join(", ");
    }
    emailjs
      .send("service_o94t3mc", "template_nncr0hh", data, "yBH9UcZpErfjd9fdI")
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
          reset();
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong.");
        }
      );
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const services = [
    { id: "social-media", name: "Social Media Marketing", icon: Users },
    { id: "website", name: "Website Development", icon: Zap },
    { id: "seo", name: "SEO & Google Marketing", icon: Award },
    { id: "cold-calling", name: "Cold Calling", icon: Target },
    { id: "complete", name: "Complete Digital Package", icon: CheckCircle },
  ];

  const budgetRanges = [
    { id: "under-1k", label: "Under $1,000/month" },
    { id: "1k-3k", label: "$1,000 - $3,000/month" },
    { id: "3k-5k", label: "$3,000 - $5,000/month" },
    { id: "5k-10k", label: "$5,000 - $10,000/month" },
    { id: "over-10k", label: "Over $10,000/month" },
  ];

  const timeframes = [
    { id: "asap", label: "As soon as possible" },
    { id: "1-month", label: "Within 1 month" },
    { id: "2-3-months", label: "2-3 months" },
    { id: "flexible", label: "Flexible timeline" },
  ];

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center gradient-bg"
      >
        <div className="container-custom">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-2xl p-12 text-center max-w-2xl mx-auto"
          >
            <CheckCircle className="text-[#146aff] mx-auto mb-6" size={80} />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Quote Request Submitted!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for your interest in our services. We'll review your
              requirements and get back to you with a detailed proposal within
              24 hours.
            </p>
            <div className="space-y-4">
              <p className="text-gray-600">
                <strong>What happens next?</strong>
              </p>
              <div className="text-left space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="text-[#146aff] mr-3" size={20} />
                  <span>We'll review your requirements (within 2 hours)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-[#146aff] mr-3" size={20} />
                  <span>Schedule a consultation call (within 24 hours)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-[#146aff] mr-3" size={20} />
                  <span>Receive your custom proposal (within 48 hours)</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setCurrentStep(1);
              }}
              className="btn-primary mt-8"
            >
              Request Another Quote
            </button>
          </motion.div>
        </div>
      </motion.div>
    );
  }

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
              Get Your Free <span className="gradient-text fn">Quote</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Tell us about your business and goals, and we'll create a custom
              digital marketing proposal tailored to your needs and budget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    step <= currentStep
                      ? "bg-[#146aff] text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step < currentStep ? <CheckCircle size={20} /> : step}
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-[#146aff] h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {/* Step 1: Business Information */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Tell Us About Your Business
                  </h2>

                  <div className="space-y-6">
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#146aff]"
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
                          name="lastName"
                          type="text"
                          {...register("lastName", {
                            required: "Last name is required",
                          })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#146aff]"
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
                        name="email"
                        type="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid email address",
                          },
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#146aff]"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        {...register("phone", {
                          required: "Phone number is required",
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#146aff]"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        name="company"
                        type="text"
                        {...register("company", {
                          required: "Company name is required",
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#146aff]"
                      />
                      {errors.company && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.company.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Industry *
                      </label>
                      <select
                        name="industry"
                        {...register("industry", {
                          required: "Industry is required",
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#146aff]"
                      >
                        <option value="">Select your industry</option>
                        <option value="technology">Technology</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="finance">Finance</option>
                        <option value="retail">Retail</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="professional-services">
                          Professional Services
                        </option>
                        <option value="real-estate">Real Estate</option>
                        <option value="restaurant">Restaurant/Food</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.industry && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.industry.message}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Services */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Which Services Do You Need?
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Select all services you're interested in:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service) => {
                      const selectedServices = watch("services") || [];
                      const isChecked = Array.isArray(selectedServices)
                        ? selectedServices.includes(service.id)
                        : selectedServices === service.id;

                      return (
                        <label
                          key={service.id}
                          className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors duration-200 ${
                            isChecked
                              ? "border-[#146aff] bg-primary-50"
                              : "border-gray-200 hover:border-primary-300"
                          }`}
                        >
                          <input
                            name="services"
                            type="checkbox"
                            {...register("services")}
                            value={service.id}
                            className="mr-3"
                          />
                          <div className="flex items-center">
                            <div
                              className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                                isChecked
                                  ? "bg-[#146aff] text-white"
                                  : "bg-primary-100 text-primary-600"
                              }`}
                            >
                              <service.icon size={24} />
                            </div>
                            <span className="font-medium text-gray-900">
                              {service.name}
                            </span>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Budget & Timeline */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Budget & Timeline
                  </h2>

                  <div className="space-y-8">
                    <div>
                      <label className="block text-lg font-medium text-gray-900 mb-4">
                        What's your monthly budget range?
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {budgetRanges.map((budget) => (
                          <label
                            key={budget.id}
                            className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary-300 transition-colors duration-200"
                          >
                            <input
                              name="budget"
                              type="radio"
                              {...register("budget")}
                              value={budget.id}
                              className="mr-3"
                            />
                            <span className="font-medium text-gray-900">
                              {budget.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-lg font-medium text-gray-900 mb-4">
                        When would you like to start?
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {timeframes.map((timeframe) => (
                          <label
                            key={timeframe.id}
                            className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary-300 transition-colors duration-200"
                          >
                            <input
                              name="timeframe"
                              type="radio"
                              {...register("timeframe")}
                              value={timeframe.id}
                              className="mr-3"
                            />
                            <span className="font-medium text-gray-900">
                              {timeframe.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Goals & Additional Info */}
              {currentStep === 4 && (
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Tell Us About Your Goals
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        What are your main business goals? *
                      </label>
                      <textarea
                        name="goals"
                        rows={4}
                        {...register("goals", {
                          required: "Please describe your goals",
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="e.g., Increase leads by 50%, improve online presence, launch new product..."
                      ></textarea>
                      {errors.goals && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.goals.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current challenges you're facing
                      </label>
                      <textarea
                        name="challenges"
                        rows={3}
                        {...register("challenges")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="e.g., Low website traffic, poor social media engagement, not enough leads..."
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional information or questions
                      </label>
                      <textarea
                        name="additional"
                        rows={3}
                        {...register("additional")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Anything else you'd like us to know..."
                      ></textarea>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={prevStep}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                    currentStep === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  disabled={currentStep === 1}
                >
                  Previous
                </button>

                {currentStep === totalSteps ? (
                  <button type="submit" className="btn-primary">
                    Submit Quote Request
                    <CheckCircle size={20} className="ml-2 inline" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn-primary"
                  >
                    Next Step
                    <ArrowRight size={20} className="ml-2 inline" />
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>
    </motion.div>
  );
};

export default Quote;
