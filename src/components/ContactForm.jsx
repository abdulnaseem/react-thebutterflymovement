import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY; // must be v2 Checkbox key

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

  /* ------------------------------
      HANDLE INPUT CHANGE
  ------------------------------- */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* ------------------------------
      VALIDATION
  ------------------------------- */
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
      newErrors.email = "Please enter a valid email.";
    }

    if (!trimmed.contactNumber) {
      newErrors.contactNumber = "Contact number is required.";
    } else if (!/^\d{10,15}$/.test(trimmed.contactNumber)) {
      newErrors.contactNumber = "Contact number must be 10–15 digits.";
    }

    if (!trimmed.message) newErrors.message = "Message cannot be empty.";

    if (!recaptchaToken) {
      newErrors.recaptcha = "Please verify that you are not a robot.";
    }

    setErrors(newErrors);

    // If no validation errors, normalise form data
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

  /* ------------------------------
      SUBMIT HANDLER
  ------------------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    setIsLoading(true);

    try {
      const response = await fetch(
        // Local testing:
        "http://localhost:5000/send-email",
        // Production:
        // "https://node-thebutterflymovement.vercel.app/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
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
        const err = await response.json().catch(() => ({}));
        alert(err.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("An error occurred. Please try again.");
      recaptchaRef.current?.reset();
      setRecaptchaToken("");
    } finally {
      setIsLoading(false);
    }
  };

  /* ------------------------------
      COMPONENT JSX
  ------------------------------- */
  return (
    <section
      aria-labelledby="contact-heading"
      className="bg-[#fdfaf3] rounded-2xl shadow-[0_18px_40px_rgba(0,0,0,0.18)] border border-[#e2d6bf] p-6 sm:p-8 max-w-2xl mx-auto"
    >
      <h2
        id="contact-heading"
        className="mma-logo-font text-3xl font-bold text-[#0b0d10] mb-4 text-center sm:text-left"
      >
        Send us a message
      </h2>

      <p className="text-slate-700 mb-6 text-center sm:text-left">
        Fill in the form below and we’ll reply as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* NAME */}
        <div>
          <label className="form-label">Name *</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
          />
          {errors.name && <p className="form-error">{errors.name}</p>}
        </div>

        {/* SUBJECT */}
        <div>
          <label className="form-label">Subject *</label>
          <input
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            className="form-input"
          />
          {errors.subject && <p className="form-error">{errors.subject}</p>}
        </div>

        {/* EMAIL */}
        <div>
          <label className="form-label">Email *</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />
          {errors.email && <p className="form-error">{errors.email}</p>}
        </div>

        {/* CONTACT NUMBER */}
        <div>
          <label className="form-label">Contact Number *</label>
          <input
            name="contactNumber"
            type="tel"
            value={formData.contactNumber}
            onChange={handleChange}
            className="form-input"
          />
          {errors.contactNumber && (
            <p className="form-error">{errors.contactNumber}</p>
          )}
        </div>

        {/* MESSAGE */}
        <div>
          <label className="form-label">Message *</label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="form-input"
          />
          {errors.message && <p className="form-error">{errors.message}</p>}
        </div>

        {/* RECAPTCHA */}
        <div className="mt-5 flex justify-center">
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
          <p className="form-error text-center mt-2">{errors.recaptcha}</p>
        )}

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-full bg-[#0b0d10] text-[#fdfaf3] py-3 font-semibold hover:bg-black transition disabled:opacity-50"
        >
          {isLoading ? "Sending…" : "Send Message"}
        </button>
      </form>

      {/* Inline Styles for simplicity */}
      <style>{`
        .form-label {
          display:block;
          font-size:0.9rem;
          font-weight:600;
          color:#0b0d10;
          margin-bottom:4px;
        }
        .form-input {
          width:100%;
          padding:10px 14px;
          background:#fdfaf3;
          border:1px solid #d8cbb2;
          border-radius:8px;
          outline:none;
          transition:0.2s;
        }
        .form-input:focus {
          border-color:#f5b400;
          box-shadow:0 0 0 2px rgba(245,180,0,0.3);
        }
        .form-error {
          color:#d00;
          font-size:0.8rem;
          margin-top:4px;
        }
      `}</style>
    </section>
  );
};

export default ContactForm;
