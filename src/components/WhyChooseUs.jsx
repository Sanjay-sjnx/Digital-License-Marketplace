export default function WhyChooseUs() {
  const features = [
    { title: "Fast Payments", desc: "Get paid within 24 hours.", icon: "⚡" },
    { title: "Secure Transfers", desc: "Safe and verified transactions.", icon: "🔒" },
    { title: "Best Prices", desc: "Competitive and fair offers.", icon: "💵" },
    { title: "Expert Support", desc: "We're here to help 24/7.", icon: "🤝" },
  ];

  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-gray-100">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-1">
                {f.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
