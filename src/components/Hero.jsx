import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-32 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Unlock the Value of Your Unused Software Licenses
        </h1>
        <p className="text-lg md:text-xl mb-8">
          SoftSell helps you turn your unused software into cash — fast, easy, and secure.
        </p>
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
          Sell My Licenses
        </button>
      </div>
    </motion.section>
  );
}
