import React from 'react';

export default function HowItWorks() {
  const steps = [
    { title: "Upload License", emoji: "📤" },
    { title: "Get Valuation", emoji: "💰" },
    { title: "Get Paid", emoji: "🏦" },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-gray-100">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{step.emoji}</div>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
