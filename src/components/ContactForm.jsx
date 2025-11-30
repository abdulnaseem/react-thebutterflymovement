import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY; // v2 Checkbox key

const initialState = {
  name: "",
  subject: "",
  email: "",
  contactNumber: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const trimmed = {
      name: formData.name.trim(),
      subject: formData.subject.trim(),
      email: formData.email.trim(),
      contactNumber: formData.contactNumber.replace(/\s+/g, ""),
      message: formData.message.trim(),
    };

    const newErrors = {};

    if (!trimmed.name) newErrors.name = "Name is required.";
    if (!trimmed.subject) newErrors.subject = "Subject is required.";

    if (!trimmed.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(trimmed.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!trimmed.contactNumber) {
      newErrors.contactNumber = "Contact number is required.";
    } else if (!/^\d{10,15}$/.test(trimmed.contactNumber)) {
      newErrors.contactNumber = "Contact number should contain 10–15 digits.";
    }

    if (!trimmed.message) newErrors.message = "Message is required.";

    if (!recaptchaToken) {
      newErrors.recaptcha = "Please confirm you are not a robot.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setFormData((prev) => ({
        ...prev,
        ...trimmed,
        contactNumber: trimmed.contactNumber,
      }));
      return true;
    }

    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://node-thebutterflymovement.vercel.app/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...formData,
            recaptchaToken,
          }),
        }
      );

      if (response.ok) {
        alert("Thank you for contacting us! We'll get back to you soon.");
        setFormData(initialState);
        setErrors({});
        setRecaptchaToken("");
        recaptchaRef.current?.reset();
      } else {
        const errorData = await response.json().catch(() => ({}));
        alert(
          `Failed to send the message: ${
            errorData.message || "Please try again."
          }`
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
      recaptchaRef.current?.reset();
      setRecaptchaToken("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      aria-labelledby="contact-form-heading"
      className="bg-[#fdfaf3] rounded-2xl shadow-[0_18px_40px_rgba(0,0,0,0.18)] border border-[#e2d6bf] p-6 sm:p-8"
    >
      <div className="mb-6 text-center sm:text-left">
        <h2
          id="contact-form-heading"
          className="mma-logo-font text-2xl sm:text-3xl font-bold tracking-wide text-[#0b0d10]"
        >
          Send us a message
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-700">
          Fill in the form below and we’ll reply as soon as possible.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
        noValidate
        aria-describedby={
          Object.keys(errors).length ? "form-error-summary" : undefined
        }
      >
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[#0b0d10]"
          >
            Name <span className="text-red-600 font-bold ml-0.5">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="mt-1 block w-full rounded-md border border-[#d8cbb2] bg-[#fdfaf3] px-4 py-2 text-sm sm:text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f5b400] focus:border-[#f5b400]"
            placeholder="Enter your full name"
            required
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-red-600" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-[#0b0d10]"
          >
            Subject <span className="text-red-600 font-bold ml-0.5">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            className="mt-1 block w-full rounded-md border border-[#d8cbb2] bg-[#fdfaf3] px-4 py-2 text-sm sm:text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f5b400] focus:border-[#f5b400]"
            placeholder="How can we help?"
            required
          />
          {errors.subject && (
            <p
              id="subject-error"
              className="mt-1 text-xs text-red-600"
              role="alert"
            >
              {errors.subject}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#0b0d10]"
          >
            Email <span className="text-red-600 font-bold ml-0.5">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="mt-1 block w-full rounded-md border border-[#d8cbb2] bg-[#fdfaf3] px-4 py-2 text-sm sm:text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f5b400] focus:border-[#f5b400]"
            placeholder="name@example.com"
            required
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Contact Number */}
        <div>
          <label
            htmlFor="contactNumber"
            className="block text-sm font-medium text-[#0b0d10]"
          >
            Contact number <span className="text-red-600 font-bold ml-0.5">*</span>
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            autoComplete="tel"
            value={formData.contactNumber}
            onChange={handleChange}
            aria-invalid={!!errors.contactNumber}
            aria-describedby={
              errors.contactNumber ? "contactNumber-error" : undefined
            }
            className="mt-1 block w-full rounded-md border border-[#d8cbb2] bg-[#fdfaf3] px-4 py-2 text-sm sm:text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f5b400] focus:border-[#f5b400]"
            placeholder="Include country code if outside the UK"
            required
          />
          {errors.contactNumber && (
            <p
              id="contactNumber-error"
              className="mt-1 text-xs text-red-600"
              role="alert"
            >
              {errors.contactNumber}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-[#0b0d10]"
          >
            Message <span className="text-red-600 font-bold ml-0.5">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="mt-1 block w-full rounded-md border border-[#d8cbb2] bg-[#fdfaf3] px-4 py-2 text-sm sm:text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f5b400] focus:border-[#f5b400] resize-y"
            placeholder="Tell us a little about your enquiry…"
            required
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-xs text-red-600" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        {/* reCAPTCHA */}
        <div className="mt-4 flex justify-center">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={SITE_KEY}
            onChange={(token) => {
              setRecaptchaToken(token || "");
              setErrors((prev) => ({ ...prev, recaptcha: "" }));
            }}
            onExpired={() => {
              setRecaptchaToken("");
              setErrors((prev) => ({
                ...prev,
                recaptcha: "reCAPTCHA expired. Please tick again.",
              }));
            }}
          />
        </div>
        {errors.recaptcha && (
          <p className="text-center text-xs text-red-600 mt-1">
            {errors.recaptcha}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full inline-flex items-center justify-center rounded-full bg-[#0b0d10] px-6 py-2.5 text-sm sm:text-base font-semibold text-[#f5f0e5] hover:bg-black transition-colors focus:outline-none focus:ring-2 focus:ring-[#f5b400] focus:ring-offset-2 focus:ring-offset-[#fdfaf3] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? "Sending…" : "Send message"}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;