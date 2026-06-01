"use client";
import React, { useState } from "react";
import {
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaSpinner,
} from "react-icons/fa";
import { z } from "zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the Zod schema for form validation
const contactSchema = z.object({
  first_name: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name cannot exceed 50 characters"),
  last_name: z
    .string()
    .trim()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name cannot exceed 50 characters"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  phone: z.string().trim().optional().or(z.literal("")),
  service_interest: z.string().min(1, "Please select a service interest"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message cannot exceed 1000 characters"),
});

const ContactForm = () => {
  const [submitStatus, setSubmitStatus] = useState({
    success: null,
    message: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      service_interest: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    setSubmitStatus({ success: null, message: "" });

    try {
      const response = await axios.post(
        "https://hisolu-backend.vercel.app/api/contact",
        data,
      );
console.log("sbs:",response);
      setSubmitStatus({
        success: true,
        message:
          "Thank you! Your message has been sent successfully. We'll get back to you soon.",
      });

      // Reset the form fields on success
      reset();
    } catch (error) {
      console.error("Error submitting contact form:", error);
      let errorMessage =
        "Oops! Something went wrong. Please check your connection and try again.";

      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        errorMessage = error.response.data.message;
      } else if (error.message) {
        errorMessage = error.message;
      }

      setSubmitStatus({
        success: false,
        message: errorMessage,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {submitStatus.success !== null && (
        <div
          className={`p-4 rounded-xl flex items-start gap-3 border transition-all duration-300 ${
            submitStatus.success
              ? "bg-green-500/10 border-green-500/30 text-green-400"
              : "bg-red-500/10 border-red-500/30 text-red-400"
          }`}
        >
          {submitStatus.success ? (
            <FaCheckCircle className="text-xl mt-0.5 flex-shrink-0" />
          ) : (
            <FaExclamationCircle className="text-xl mt-0.5 flex-shrink-0" />
          )}
          <p className="text-sm font-medium">{submitStatus.message}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="first_name"
            className="block text-gray-400 text-sm mb-2 font-medium"
          >
            First Name
          </label>
          <input
            id="first_name"
            type="text"
            {...register("first_name")}
            className={`w-full bg-white/5 border ${
              errors.first_name
                ? "border-red-500 focus:border-red-500"
                : "border-white/10 focus:border-cyan-500"
            } rounded-xl px-4 py-3 text-white focus:outline-none transition-all`}
            placeholder="John"
          />
          {errors.first_name && (
            <p className="text-red-400 text-xs mt-1.5 font-medium">
              {errors.first_name.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="block text-gray-400 text-sm mb-2 font-medium"
          >
            Last Name
          </label>
          <input
            id="last_name"
            type="text"
            {...register("last_name")}
            className={`w-full bg-white/5 border ${
              errors.last_name
                ? "border-red-500 focus:border-red-500"
                : "border-white/10 focus:border-cyan-500"
            } rounded-xl px-4 py-3 text-white focus:outline-none transition-all`}
            placeholder="Doe"
          />
          {errors.last_name && (
            <p className="text-red-400 text-xs mt-1.5 font-medium">
              {errors.last_name.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-gray-400 text-sm mb-2 font-medium"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className={`w-full bg-white/5 border ${
            errors.email
              ? "border-red-500 focus:border-red-500"
              : "border-white/10 focus:border-cyan-500"
          } rounded-xl px-4 py-3 text-white focus:outline-none transition-all`}
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="text-red-400 text-xs mt-1.5 font-medium">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-gray-400 text-sm mb-2 font-medium"
        >
          Phone (Optional)
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone")}
          className={`w-full bg-white/5 border ${
            errors.phone
              ? "border-red-500 focus:border-red-500"
              : "border-white/10 focus:border-cyan-500"
          } rounded-xl px-4 py-3 text-white focus:outline-none transition-all`}
          placeholder="+1 (555) 000-0000"
        />
        {errors.phone && (
          <p className="text-red-400 text-xs mt-1.5 font-medium">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="service_interest"
          className="block text-gray-400 text-sm mb-2 font-medium"
        >
          Service Interest
        </label>
        <select
          id="service_interest"
          {...register("service_interest")}
          className={`w-full bg-white/5 border ${
            errors.service_interest
              ? "border-red-500 focus:border-red-500"
              : "border-white/10 focus:border-cyan-500"
          } rounded-xl px-4 py-3 text-white focus:outline-none transition-all`}
        >
          <option value="" className="bg-slate-900 text-white">
            Select a service
          </option>
          <option value="web" className="bg-slate-900 text-white">
            Web Development
          </option>
          <option value="mobile" className="bg-slate-900 text-white">
            Mobile Apps
          </option>
          <option value="cloud" className="bg-slate-900 text-white">
            Cloud Solutions
          </option>
          <option value="ai" className="bg-slate-900 text-white">
            AI Agents & Solutions
          </option>
          <option value="seo" className="bg-slate-900 text-white">
            SEO & Digital Marketing
          </option>
          <option value="design" className="bg-slate-900 text-white">
            Designing & Customization
          </option>
          <option value="other" className="bg-slate-900 text-white">
            Other
          </option>
        </select>
        {errors.service_interest && (
          <p className="text-red-400 text-xs mt-1.5 font-medium">
            {errors.service_interest.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-gray-400 text-sm mb-2 font-medium"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className={`w-full bg-white/5 border ${
            errors.message
              ? "border-red-500 focus:border-red-500"
              : "border-white/10 focus:border-cyan-500"
          } rounded-xl px-4 py-3 text-white focus:outline-none transition-all resize-none`}
          placeholder="Tell us about your project..."
        ></textarea>
        {errors.message && (
          <p className="text-red-400 text-xs mt-1.5 font-medium">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:scale-[1.02] active:scale-[0.98] disabled:scale-100 disabled:opacity-50 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            Sending...
            <FaSpinner className="text-sm animate-spin" />
          </>
        ) : (
          <>
            Send Message
            <FaPaperPlane className="text-sm" />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
