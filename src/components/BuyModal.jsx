import React, { useState } from 'react';

export default function BuyModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    licenseType: '',
    quantity: 1,
    email: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    const errs = {};
    if (!form.licenseType) errs.licenseType = 'Please select a license';
    if (form.quantity < 1) errs.quantity = 'Quantity must be at least 1';
    if (!form.email || !form.email.includes('@'))
      errs.email = 'Valid email required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      // TODO: send to backend or API
    } else {
      setErrors(errs);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Buy Licenses
        </h2>

        {submitted ? (
          <div className="text-green-600 dark:text-green-400">
            Thank you! We’ll email you a quote shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-1">
                License Type
              </label>
              <select
                name="licenseType"
                value={form.licenseType}
                onChange={handleChange}
                className="w-full border dark:border-gray-600 p-2 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              >
                <option value="">Select a license</option>
                <option value="OS">Operating System</option>
                <option value="Office">Office Suite</option>
                <option value="Antivirus">Antivirus</option>
                <option value="Other">Other</option>
              </select>
              {errors.licenseType && (
                <div className="text-red-500 text-sm">{errors.licenseType}</div>
              )}
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-1">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                min="1"
                value={form.quantity}
                onChange={handleChange}
                className="w-full border dark:border-gray-600 p-2 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
              {errors.quantity && (
                <div className="text-red-500 text-sm">{errors.quantity}</div>
              )}
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-1">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border dark:border-gray-600 p-2 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
              {errors.email && (
                <div className="text-red-500 text-sm">{errors.email}</div>
              )}
            </div>

            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
              >
                Request Quote
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
