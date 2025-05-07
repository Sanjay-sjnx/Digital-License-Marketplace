import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    license: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = "Name is required";
    if (!form.email || !form.email.includes("@"))
      errs.email = "Valid email required";
    if (!form.company) errs.company = "Company is required";
    if (!form.license) errs.license = "Select a license type";
    if (!form.message) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setForm({ name: "", email: "", company: "", license: "", message: "" });
      setErrors({});
    } else {
      setErrors(errs);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-800">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800 dark:text-gray-100">
          Contact Us
        </h2>

        {submitted ? (
          <div className="text-center text-green-600 dark:text-green-400 font-semibold text-lg mb-6">
            Thanks for reaching out! We'll get back to you shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 mb-6">
            <input
              className="w-full border dark:border-gray-600 p-3 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}

            <input
              className="w-full border dark:border-gray-600 p-3 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}

            <input
              className="w-full border dark:border-gray-600 p-3 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              name="company"
              placeholder="Company"
              value={form.company}
              onChange={handleChange}
            />
            {errors.company && <div className="text-red-500 text-sm">{errors.company}</div>}

            <select
              className="w-full border dark:border-gray-600 p-3 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              name="license"
              value={form.license}
              onChange={handleChange}
            >
              <option value="">Select License Type</option>
              <option value="OS">Operating System</option>
              <option value="Office">Office Suite</option>
              <option value="Antivirus">Antivirus</option>
              <option value="Other">Other</option>
            </select>
            {errors.license && <div className="text-red-500 text-sm">{errors.license}</div>}

            <textarea
              className="w-full border dark:border-gray-600 p-3 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              name="message"
              rows="4"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
            />
            {errors.message && <div className="text-red-500 text-sm">{errors.message}</div>}

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded"
            >
              Send Message
            </button>
          </form>
        )}

        {/* LinkedIn Link */}
        <div className="text-center">
          <a
            href="https://www.linkedin.com/in/sanjayy-k"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-700 dark:text-blue-300 font-semibold hover:underline"
          >
            Connect with me on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
