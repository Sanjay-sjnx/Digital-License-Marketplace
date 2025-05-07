import React, { useState, useEffect } from "react";
import UploadModal from "./UploadModal.jsx";
import BuyModal from "./BuyModal.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Navbar() {
  const [sellMenu, setSellMenu] = useState(false);
  const [uploadOpen, setUploadOpen] = useState(false);
  const [buyOpen, setBuyOpen] = useState(false);

  useEffect(() => {
    function handleClick(e) {
      if (!e.target.closest("#sell-dropdown")) setSellMenu(false);
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <nav className="bg-white dark:bg-gray-800 shadow p-4 fixed w-full top-0 z-20">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-700 dark:text-blue-300">
            SoftSell
          </h1>

          <div className="flex items-center space-x-4">
            {/* Light/Dark Toggle */}
            <ThemeToggle />

            {/* Buy Licenses */}
            <button
              onClick={() => setBuyOpen(true)}
              className="text-gray-700 dark:text-gray-200 font-semibold hover:underline"
            >
              Buy Licenses
            </button>

            {/* Sell My Licenses Dropdown */}
            <div id="sell-dropdown" className="relative">
              <button
                onClick={() => setSellMenu(!sellMenu)}
                className="text-blue-700 dark:text-blue-300 font-semibold hover:underline inline-flex items-center"
                aria-haspopup="true"
                aria-expanded={sellMenu}
              >
                Sell My Licenses <span className="ml-1">▾</span>
              </button>

              {sellMenu && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
                  <div className="py-1">
                    <a
                      href="#contact"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Get a Quote
                    </a>
                    <button
                      onClick={() => {
                        setUploadOpen(true);
                        setSellMenu(false);
                      }}
                      className="w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Upload License
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <UploadModal isOpen={uploadOpen} onClose={() => setUploadOpen(false)} />
      <BuyModal isOpen={buyOpen} onClose={() => setBuyOpen(false)} />
    </>
  );
}
