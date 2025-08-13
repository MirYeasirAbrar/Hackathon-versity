import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Replace these with your EmailJS credentials
    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setStatus("✅ Message sent! We'll get back to you soon.");
          setForm({ name: "", email: "", subject: "", message: "" });
          setLoading(false);
        },
        () => {
          setStatus("❌ Failed to send. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      <h1 className="text-3xl font-bold text-center">📬 Contact & Support</h1>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="card bg-base-200 shadow-lg p-6 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="input input-bordered w-full"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="input input-bordered w-full"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="input input-bordered w-full"
          value={form.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="textarea textarea-bordered w-full h-32"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn btn-primary w-full" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
        {status && <p className="text-center">{status}</p>}
      </form>

      {/* Social Media Links */}
      <div className="text-center space-x-4">
        <a href="https://facebook.com" className="btn btn-circle btn-outline">
          <FaFacebook size={20} />
        </a>
        <a href="https://instagram.com" className="btn btn-circle btn-outline">
          <FaInstagram size={20} />
        </a>
        <a href="https://twitter.com" className="btn btn-circle btn-outline">
          <FaTwitter size={20} />
        </a>
        <a href="https://linkedin.com" className="btn btn-circle btn-outline">
          <FaLinkedin size={20} />
        </a>
      </div>

      {/* FAQ Section */}
      <div className="collapse collapse-arrow bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">❓ What is the response time?</div>
        <div className="collapse-content">
          <p>We usually respond within 24 hours.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">💌 Do I get a confirmation email?</div>
        <div className="collapse-content">
          <p>Yes! You’ll receive an automatic acknowledgment after submission.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">🌐 Can I reach out via social media?</div>
        <div className="collapse-content">
          <p>Absolutely! Use the links above to connect with us on social platforms.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
