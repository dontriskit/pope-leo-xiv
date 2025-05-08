// File: src/app/peru/page.tsx
import React from 'react';
import Navbar from '@/app/_components/Navbar';
import Footer from '@/app/_components/Footer';
import { MapPin, Flag, Book, Users, Award, Star, Calendar, CheckCircle } from 'lucide-react';

export default function PeruPage() {
  return (
    <div className="font-sans min-h-screen bg-white">
      <Navbar activePage="Peru" />

      {/* Page Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-base font-semibold text-yellow-600 tracking-wide uppercase">Decades of Service</h1>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Pope Leo XIV's Ministry in Peru
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Exploring the deep roots and lasting impact of his extensive work in Peru, which profoundly shaped his pastoral vision.
            </p>
          </div>
        </div>
      </div>

      {/* Section Navigation (Optional, similar to Biography) */}
      <div className="sticky top-16 z-40 border-b border-gray-200 bg-gray-50 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4 overflow-x-auto pb-2 md:space-x-8">
            <a href="#introduction" className="px-3 py-2 text-sm font-medium whitespace-nowrap text-yellow-600 hover:text-yellow-800">
              Introduction
            </a>
            <a href="#first-mission" className="px-3 py-2 text-sm font-medium whitespace-nowrap text-gray-500 hover:text-gray-800">
              First Mission
            </a>
            <a href="#trujillo-ministry" className="px-3 py-2 text-sm font-medium whitespace-nowrap text-gray-500 hover:text-gray-800">
              Trujillo Years
            </a>
            <a href="#bishop-chiclayo" className="px-3 py-2 text-sm font-medium whitespace-nowrap text-gray-500 hover:text-gray-800">
              Bishop of Chiclayo
            </a>
            <a href="#legacy" className="px-3 py-2 text-sm font-medium whitespace-nowrap text-gray-500 hover:text-gray-800">
              Legacy & Impact
            </a>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section id="introduction" className="scroll-mt-32 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Deep Roots in Peru
              </h2>
              <p className="mt-4 text-gray-500">
                Pope Leo XIV's connection to Peru is not fleeting; it spans over three decades and represents a deeply formative chapter in his spiritual and pastoral journey. His extensive ministry across various regions and roles within the Peruvian Church provided him with firsthand experience of the joys, challenges, and vitality of Catholicism in Latin America.
              </p>
              <p className="mt-4 text-gray-500">
                This profound immersion shaped his understanding of the Global South, the importance of inculturation, the preferential option for the poor, and the practical application of faith in diverse social contexts. Ultimately, his time in Peru led him to embrace Peruvian citizenship, solidifying his identity as a bridge between North and South America – a unique perspective he brings to the papacy.
              </p>
                 <div className="mt-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Flag className="h-5 w-5 text-yellow-500" />
                      </div>
                      <div className="ml-3">
                        <span className="text-gray-800 font-medium">Over 30 years of connection to Peru</span>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center">
                      <div className="flex-shrink-0">
                        <Users className="h-5 w-5 text-yellow-500" />
                      </div>
                      <div className="ml-3">
                        <span className="text-gray-800 font-medium">Dual Citizen: United States & Peru</span>
                      </div>
                    </div>
                 </div>
            </div>
             <div className="mt-8 lg:mt-0">
              {/* Replace with actual image */}
              <div className="aspect-w-5 aspect-h-6 overflow-hidden rounded-lg">
                <img
                  src="/placeholder-peru-map.jpg" // Placeholder path
                  alt="Map of Peru highlighting regions served (Placeholder)"
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <div className="mt-4 text-sm text-gray-500 italic">
                His Holiness Pope Leo XIV's ministry spanned various regions of Peru (Placeholder Image).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First Missionary Experience Section */}
      <section id="first-mission" className="scroll-mt-32 bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div className="lg:order-2">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                First Missionary Experience (1985-1986)
              </h2>
              <p className="mt-4 text-gray-500">
                As a young priest fresh from earning his Licentiate in Canon Law, Robert Francis Prevost embarked on his first mission to Peru in 1985. This initial period served as both practical canonical training and an introduction to the vibrant and challenging world of missionary life.
              </p>
              <p className="mt-4 text-gray-500">
                He was assigned to the <strong className="text-gray-700">Territorial Prélature of Chulucanas</strong> in northwestern Peru, near the border with Ecuador. There, he served as Chancellor and Vicar of the cathedral. This experience immersed him in the realities of the rural Latin American Church: navigating poverty, engaging with deep popular faith, and understanding the pastoral needs of communities with limited resources.
              </p>
              <div className="mt-6">
                  <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Calendar className="h-5 w-5 text-yellow-500" />
                      </div>
                      <div className="ml-3">
                        <span className="text-gray-800 font-medium">Years Served: 1985 - 1986</span>
                      </div>
                    </div>
                  <div className="flex items-center mt-2">
                      <div className="flex-shrink-0">
                        <MapPin className="h-5 w-5 text-yellow-500" />
                      </div>
                      <div className="ml-3">
                        <span className="text-gray-800 font-medium">Location: Chulucanas, Piura Region</span>
                      </div>
                    </div>
                   <div className="flex items-center mt-2">
                      <div className="flex-shrink-0">
                        <Award className="h-5 w-5 text-yellow-500" />
                      </div>
                      <div className="ml-3">
                        <span className="text-gray-800 font-medium">Role: Chancellor, Vicar</span>
                      </div>
                    </div>
              </div>
            </div>
             <div className="mt-8 lg:order-1 lg:mt-0">
              {/* Replace with actual image */}
              <div className="aspect-w-5 aspect-h-6 overflow-hidden rounded-lg">
                <img
                  src="/placeholder-chulucanas.jpg" // Placeholder path
                  alt="Landscape of Chulucanas region (Placeholder)"
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <div className="mt-4 text-sm text-gray-500 italic">
                The region of Chulucanas, where Fr. Prevost began his Peruvian ministry (Placeholder Image).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extended Ministry in Trujillo Section */}
       <section id="trujillo-ministry" className="scroll-mt-32 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                A Decade in Trujillo (1988-1998)
              </h2>
              <p className="mt-4 text-gray-500">
                Returning to Peru in 1988 with a Doctorate in Canon Law, Fr. Prevost began a significant ten-year ministry based in Trujillo, Peru's third-largest city. This period was crucial in shaping his understanding of pastoral leadership, education, and Church governance in a Latin American context.
              </p>
              <p className="mt-4 text-gray-500">
                His responsibilities were diverse and demanding. He headed the Augustinian seminary, shaping future priests, while also teaching Canon Law at the diocesan seminary. He served as prefect of studies and utilized his legal expertise as a judge on the regional ecclesiastical court and a member of the archbishop's college of consultors.
              </p>
              <p className="mt-4 text-gray-500">
                Crucially, alongside these academic and administrative duties, he maintained direct pastoral contact by leading a congregation on the city's outskirts. This decade coincided with challenging times in Peru, including political instability and economic hardship, giving him invaluable experience of the Church's role amidst social crises.
              </p>
              <div className="mt-6">
                 <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Calendar className="h-5 w-5 text-yellow-500" />
                      </div>
                      <div className="ml-3">
                        <span className="text-gray-800 font-medium">Years Served: 1988 - 1998</span>
                      </div>
                  </div>
                  <div className="flex items-center mt-2">
                      <div className="flex-shrink-0">
                        <MapPin className="h-5 w-5 text-yellow-500" />
                      </div>
                      <div className="ml-3">
                        <span className="text-gray-800 font-medium">Location: Trujillo, Peru</span>
                      </div>
                  </div>
                  <div className="flex items-center mt-2">
                      <div className="flex-shrink-0">
                        <Book className="h-5 w-5 text-yellow-500" />
                      </div>
                      <div className="ml-3">
                        <span className="text-gray-800 font-medium">Roles: Seminary Head, Professor, Judge, Pastor</span>
                      </div>
                  </div>
              </div>
            </div>
             <div className="mt-8 lg:mt-0">
              {/* Replace with actual image */}
              <div className="aspect-w-5 aspect-h-6 overflow-hidden rounded-lg">
                <img
                  src="/placeholder-trujillo.jpg" // Placeholder path
                  alt="Cityscape of Trujillo, Peru (Placeholder)"
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <div className="mt-4 text-sm text-gray-500 italic">
                Trujillo, Peru, where Fr. Prevost spent a decade in ministry (Placeholder Image).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bishop of Chiclayo Section */}
       <section id="bishop-chiclayo" className="scroll-mt-32 bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div className="lg:order-2">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Bishop of Chiclayo (2014-2023)
              </h2>
              <p className="mt-4 text-gray-500">
                After serving internationally as Prior General of the Augustinians, Robert Prevost was called back to Peru by Pope Francis in 2014, first as Apostolic Administrator and then, from September 2015, as the full Bishop of Chiclayo. This marked a return to the country that had so deeply shaped him.
              </p>
               <p className="mt-4 text-gray-500">
                As Bishop of Chiclayo, a diocese with over a million Catholics, he led significant pastoral initiatives. He restructured pastoral zones, strengthened seminary formation, expanded social outreach through Caritas, and implemented crucial child protection protocols. His leadership emphasized synodality, encouraging lay participation and consultation.
              </p>
              <p className="mt-4 text-gray-500">
                During this time, he also served in leadership roles within the Peruvian Bishops' Conference and Caritas Peru. It was during his episcopacy in Chiclayo that he formally acquired Peruvian citizenship, reflecting his profound bond with the nation he served.
              </p>
              <div className="mt-6">
                 <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Calendar className="h-5 w-5 text-yellow-500" />
                      </div>
                      <div className="ml-3">
                        <span className="text-gray-800 font-medium">Years Served: 2014 (Admin) / 2015 - 2023 (Bishop)</span>
                      </div>
                  </div>
                  <div className="flex items-center mt-2">
                      <div className="flex-shrink-0">
                        <MapPin className="h-5 w-5 text-yellow-500" />
                      </div>
                      <div className="ml-3">
                        <span className="text-gray-800 font-medium">Location: Diocese of Chiclayo, Peru</span>
                      </div>
                  </div>
                   <div className="flex items-center mt-2">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-green-600" /> {/* Use a check or similar icon */}
                      </div>
                      <div className="ml-3">
                        <span className="text-gray-800 font-medium">Key Initiatives: Pastoral Restructuring, Child Protection, Synodality</span>
                      </div>
                  </div>
              </div>
            </div>
             <div className="mt-8 lg:order-1 lg:mt-0">
              {/* Replace with actual image */}
              <div className="aspect-w-5 aspect-h-6 overflow-hidden rounded-lg">
                <img
                  src="/placeholder-bishop-chiclayo.jpg" // Placeholder path
                  alt="Bishop Prevost during his time in Chiclayo (Placeholder)"
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <div className="mt-4 text-sm text-gray-500 italic">
                Bishop Prevost meeting with faithful in Chiclayo (Placeholder Image).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enduring Legacy & Impact Section */}
      <section id="legacy" className="scroll-mt-32 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Enduring Legacy and Impact
              </h2>
               <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
                  Pope Leo XIV's decades in Peru were not just a phase but a defining element of his identity and ministry. This experience provides him with unique gifts for his role as Supreme Pontiff.
              </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
              <div>
                  <h3 className="text-xl font-semibold text-gray-900">North-South Bridge</h3>
                  <p className="mt-2 text-gray-500">His dual citizenship and deep understanding of both North American and Latin American cultures allow him to bridge perspectives within the global Church.</p>
              </div>
              <div>
                  <h3 className="text-xl font-semibold text-gray-900">Periphery to Center</h3>
                  <p className="mt-2 text-gray-500">His journey from missionary work in remote areas to the Vatican embodies Pope Francis's emphasis on bringing the peripheries to the center of the Church's focus.</p>
              </div>
               <div>
                  <h3 className="text-xl font-semibold text-gray-900">Pastoral Heart</h3>
                  <p className="mt-2 text-gray-500">Decades of direct ministry with diverse communities, including the poor and marginalized, forged a deeply pastoral approach grounded in compassion and practical experience.</p>
              </div>
              <div>
                  <h3 className="text-xl font-semibold text-gray-900">Cultural Synthesis</h3>
                  <p className="mt-2 text-gray-500">Fluent in Spanish and deeply immersed in Peruvian life, he facilitates dialogue and understanding across cultural divides within the universal Church.</p>
              </div>
               <div>
                  <h3 className="text-xl font-semibold text-gray-900">Missionary Vision</h3>
                  <p className="mt-2 text-gray-500">His background as a missionary informs his understanding of evangelization as requiring both proclamation and presence, witness and word.</p>
              </div>
               <div>
                  <h3 className="text-xl font-semibold text-gray-900">Peruvian Connection</h3>
                  <p className="mt-2 text-gray-500">His election was met with particular joy in Peru, where he is seen as one of their own, carrying their experiences and faith to the See of Peter.</p>
              </div>
          </div>
           <p className="mt-12 text-center text-2xl font-bold text-gray-800">
             Testimonials and further details coming soon!
           </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}