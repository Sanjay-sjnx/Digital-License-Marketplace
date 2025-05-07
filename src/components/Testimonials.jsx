export default function Testimonials() {
  const reviews = [
    { name: "Sanjay K", role: "IT Manager", company: "Credex" },
    { name: "Thalapathy", role: "Procurement Lead", company: "TVKampany" },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-gray-100">
          Customer Testimonials
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 p-6 rounded shadow"
            >
              <p className="italic mb-4 text-gray-700 dark:text-gray-300">
                “SoftSell made it effortless to monetize our unused software.”
              </p>
              <div className="font-semibold text-blue-700 dark:text-blue-300">
                {r.name}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {r.role}, {r.company}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
