// Removed Link import as auth links are removed for now
// import Link from "next/link";

// Removed auth and HydrateClient as we are simplifying for now
// import { auth } from "@/server/auth";
// import { api, HydrateClient } from "@/trpc/server";

// Import new components
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { Key, Globe, Users, Award, Languages, GraduationCap, MapPin, Calendar } from 'lucide-react'; // Add necessary icons

export default async function Home() {
  // Removed tRPC call and session logic for simplicity
  // const hello = await api.post.hello({ text: "from tRPC" });
  // const session = await auth();
  // if (session?.user) {
  //   void api.post.getLatest.prefetch();
  // }

  return (
    // <HydrateClient> // Removed HydrateClient
      <div className="flex flex-col min-h-screen">
        <Navbar activePage="Home"/>
        <main className="flex-grow">
          {/* Hero Section */}
          <div className="relative bg-gray-800 overflow-hidden">
             {/* Placeholder for a background image */}
            <div className="absolute inset-0">
              <img src="/placeholder-vatican.jpg" alt="Vatican background placeholder" className="w-full h-full object-cover opacity-30"/>
            </div>
            <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
              <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">His Holiness</span>
                <span className="block text-yellow-400">Pope Leo XIV</span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-center text-xl text-yellow-100 sm:max-w-3xl">
                Robert Francis Prevost, elected May 8, 2025. The first American Pope, bridging continents and cultures in service to the Universal Church.
              </p>
               {/* Optional Button */}
              {/* <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
                  <a href="/biography" className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-yellow-50 sm:px-8">
                    Learn His Story
                  </a>
                </div>
              </div> */}
            </div>
          </div>

          {/* Introduction Section */}
          <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <h2 className="text-base text-yellow-600 font-semibold tracking-wide uppercase">A Pontiff for Our Time</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Bridging North and South
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                  His Holiness Pope Leo XIV (born Robert Francis Prevost) made history on May 8, 2025, becoming the first Pope from the United States. As a dual citizen of the U.S. and Peru, his pontificate symbolizes the Church's global character and its deep connection to the Americas.
                </p>
              </div>
            </div>
          </div>

          {/* Key Facts Section */}
          <div className="bg-gray-50 py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Key Facts</h2>
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                      <div className="flex items-start">
                          <Calendar className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                          <div className="ml-4">
                              <h3 className="text-lg font-medium text-gray-900">Born</h3>
                              <p className="text-gray-500">September 14, 1955, Chicago, IL</p>
                          </div>
                      </div>
                      <div className="flex items-start">
                          <Award className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                          <div className="ml-4">
                              <h3 className="text-lg font-medium text-gray-900">Elected Pope</h3>
                              <p className="text-gray-500">May 8, 2025 (Name: Leo XIV)</p>
                          </div>
                      </div>
                       <div className="flex items-start">
                          <Globe className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                          <div className="ml-4">
                              <h3 className="text-lg font-medium text-gray-900">Citizenship</h3>
                              <p className="text-gray-500">United States & Peru</p>
                          </div>
                      </div>
                      <div className="flex items-start">
                          <Users className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                          <div className="ml-4">
                              <h3 className="text-lg font-medium text-gray-900">Religious Order</h3>
                              <p className="text-gray-500">Order of Saint Augustine (OSA)</p>
                          </div>
                      </div>
                       <div className="flex items-start">
                          <GraduationCap className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                          <div className="ml-4">
                              <h3 className="text-lg font-medium text-gray-900">Education</h3>
                              <p className="text-gray-500">B.S. Mathematics, M.Div., Doctorate in Canon Law</p>
                          </div>
                      </div>
                      <div className="flex items-start">
                          <Languages className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                          <div className="ml-4">
                              <h3 className="text-lg font-medium text-gray-900">Languages</h3>
                              <p className="text-gray-500">English, Spanish, Italian, French, Portuguese (+Latin, German reading)</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* Historic Significance Section */}
           <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Historic Significance</h2>
                 <ul className="mt-8 space-y-4 max-w-2xl mx-auto">
                    <li className="flex items-start">
                        <Key className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1 mr-3" />
                        <span>First Pope from the United States.</span>
                    </li>
                    <li className="flex items-start">
                        <Globe className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1 mr-3" />
                        <span>First Pope with dual citizenship (American and Peruvian).</span>
                    </li>
                    <li className="flex items-start">
                       <Users className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1 mr-3" />
                       <span>First Augustinian Pope since the 15th century.</span>
                    </li>
                    <li className="flex items-start">
                        <MapPin className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1 mr-3" />
                        <span>First Pope to have served extensively as a missionary in Latin America before election.</span>
                    </li>
                 </ul>
            </div>
           </div>

          {/* Removed Auth/Post sections */}
          {/* <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {hello ? hello.greeting : "Loading tRPC query..."}
            </p>

            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-center text-2xl text-white">
                {session && <span>Logged in as {session.user?.name}</span>}
              </p>
              <Link
                href={session ? "/api/auth/signout" : "/api/auth/signin"}
                className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
              >
                {session ? "Sign out" : "Sign in"}
              </Link>
            </div>
          </div>

          {session?.user && <LatestPost />} */}
        </main>
        <Footer />
      </div>
    // </HydrateClient> // Removed HydrateClient
  );
}