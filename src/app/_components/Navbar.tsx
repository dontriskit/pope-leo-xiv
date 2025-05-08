import React from 'react';
import Link from 'next/link';

interface NavbarProps {
  activePage?: 'Home' | 'Biography' | 'Election' | 'Teachings' | 'Peru' | 'Gallery';
}

export default function Navbar({ activePage }: NavbarProps) {
  const linkClass = (_page: string) =>
    `border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`;
  const activeLinkClass = (_page: string) =>
    `border-yellow-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`;

  return (
    <nav className="bg-gray-50 border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-yellow-600 font-bold text-xl">
                Pope Leo XIV
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className={activePage === 'Home' ? activeLinkClass('Home') : linkClass('Home')}>
                Home
              </Link>
              <Link href="/biography" className={activePage === 'Biography' ? activeLinkClass('Biography') : linkClass('Biography')}>
                Biography
              </Link>
              <Link href="/election" className={activePage === 'Election' ? activeLinkClass('Election') : linkClass('Election')}>
                Papal Election
              </Link>
              <Link href="/teachings" className={activePage === 'Teachings' ? activeLinkClass('Teachings') : linkClass('Teachings')}>
                Teachings
              </Link>
               <Link href="/peru" className={activePage === 'Peru' ? activeLinkClass('Peru') : linkClass('Peru')}>
                Ministry in Peru
              </Link>
              <Link href="/gallery" className={activePage === 'Gallery' ? activeLinkClass('Gallery') : linkClass('Gallery')}>
                Gallery
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
             {/* Language Selector can remain if multi-language support is planned */}
            <div className="flex items-center space-x-4">
              <select className="text-sm border-gray-300 rounded-md">
                <option>English</option>
                {/* <option>Español</option> */}
                {/* <option>Polski</option> */}
              </select>
            </div>
          </div>
           {/* Mobile menu button can be added here if needed */}
        </div>
      </div>
    </nav>
  );
}
