import React from 'react';
import Navbar from '@/app/_components/Navbar';
import Footer from '@/app/_components/Footer';

export default function ElectionPage() {
  return (
    <div className="font-sans min-h-screen bg-white">
      <Navbar activePage="Election" />

      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-base font-semibold text-yellow-600 tracking-wide uppercase">Habemus Papam</h1>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            The Papal Election of Leo XIV
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Details of the historic conclave of May 2025 and the significance of the chosen papal name.
          </p>
        </div>

        <div className="mt-16 prose prose-lg text-gray-500 mx-auto">
          {/* Content from claude_1.md (Papal Election) and claude_3.md (Name Significance) goes here */}
          <h2>The Conclave of May 2025</h2>
          <p>
            Following the passing of Pope Francis on April 21, 2025, the College of Cardinals convened in the Sistine Chapel...
            {/* ... more content ... */}
          </p>

          <h2>Significance of the Name Leo XIV</h2>
          <p>
            The tradition of popes taking a new name dates back centuries... By choosing Leo XIV, Robert Francis Prevost connects himself to a distinguished line of popes...
             {/* ... more content from claude_3.md ... */}
          </p>
           <h3>The Leo Legacy</h3>
           <h4>Leo I "The Great" (440-461)</h4>
           <p>A Doctor of the Church known for theological clarity and diplomatic skill...</p>
           <h4>Leo XIII (1878-1903)</h4>
           <p>Known for the groundbreaking encyclical Rerum Novarum and engagement with the modern world...</p>
           {/* ... more details on other Leos and interpretation ... */}

           <h2>Interpreting the Choice</h2>
           <p>
            The selection of Leo XIV likely signals several priorities for the new papacy, including theological leadership, social justice, balancing tradition and innovation...
            {/* ... expand based on claude_3.md ... */}
           </p>

           <p className="mt-12 text-center text-2xl font-bold text-gray-800">
             More detailed content coming soon!
           </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}