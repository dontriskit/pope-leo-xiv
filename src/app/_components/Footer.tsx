import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <span className="text-yellow-500 font-bold text-2xl">Pope Leo XIV</span>
            <p className="text-gray-300 text-base">
              A tribute website dedicated to His Holiness Pope Leo XIV, the first American pope in the history of the Catholic Church.
            </p>
            {/* Social media links can be added here */}
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  About
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="/biography" className="text-base text-gray-300 hover:text-white">
                      Biography
                    </a>
                  </li>
                  <li>
                    <a href="/election" className="text-base text-gray-300 hover:text-white">
                      Papal Election
                    </a>
                  </li>
                  <li>
                    <a href="/peru" className="text-base text-gray-300 hover:text-white">
                      Ministry in Peru
                    </a>
                  </li>
                  <li>
                    <a href="/teachings" className="text-base text-gray-300 hover:text-white">
                      Teachings & Views
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Resources
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="/gallery" className="text-base text-gray-300 hover:text-white">
                      Photo Gallery
                    </a>
                  </li>
                  <li>
                     {/* Link to official Vatican website or similar */}
                    <a href="https://www.vatican.va/content/vatican/en.html" target="_blank" rel="noopener noreferrer" className="text-base text-gray-300 hover:text-white">
                      Vatican Website
                    </a>
                  </li>
                   <li>
                     {/* Placeholder for News/Updates */}
                    <a href="#" className="text-base text-gray-300 hover:text-white">
                      News
                    </a>
                  </li>
                  <li>
                    {/* Placeholder for Contact/Support */}
                     <a href="#" className="text-base text-gray-300 hover:text-white">
                      Contact & Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Add another column if needed */}
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            © 2025 Pope Leo XIV Tribute Site. Developed with dedication.
          </p>
          <p className="text-base text-gray-400 xl:text-center mt-2">
            Made with love by bimbi & dontriskit <a href="https://github.com/dontriskit" className="hover:text-white">https://github.com/dontriskit</a> <a href="https://github.com/bimbx" className="hover:text-white">https://github.com/bimbx</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
