import React from 'react';
import Navbar from '@/app/_components/Navbar';
import Footer from '@/app/_components/Footer';

export default function TeachingsPage() {
  return (
    <div className="font-sans min-h-screen bg-white">
      <Navbar activePage="Teachings" />

      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-base font-semibold text-yellow-600 tracking-wide uppercase">Shepherd's Voice</h1>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Teachings and Priorities
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Exploring the theological views and pastoral focus of Pope Leo XIV.
          </p>
        </div>

        <div className="mt-16 prose prose-lg text-gray-500 mx-auto">
          {/* Content from claude_2.md goes here */}
          <h2>Overview of Theological Formation</h2>
          <p>
            Pope Leo XIV's perspectives have been shaped by Augustinian spirituality, his extensive experience in Latin America, and his expertise in Canon Law...
            {/* ... more content ... */}
          </p>

          <h2>Key Theological and Pastoral Positions</h2>
           <h3>On Synodality and Church Governance</h3>
           <p>A strong proponent of synodality, seeing it as essential to the Church's mission...</p>
           <h3>On Social Justice</h3>
           <p>Drawing from Catholic social teaching and his experience in Peru...</p>
           <h3>On Evangelization and Mission</h3>
           <p>Views evangelization as central to the Church's identity...</p>
           {/* ... more sections (Doctrinal Matters, Ecumenism) ... */}

           <h2>Pastoral Priorities</h2>
           <p>Focus areas include the formation of clergy, family ministry, youth engagement, and accountability...</p>
            {/* ... more content ... */}

           <h2>Notable Statements</h2>
           <blockquote>"Faith and reason are like two wings..."</blockquote>
           <blockquote>"The fundamental thing for every disciple of Christ is humility..."</blockquote>
            {/* ... more quotes ... */}

           <p className="mt-12 text-center text-2xl font-bold text-gray-800">
             More detailed content coming soon!
           </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}